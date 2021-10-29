<template>
  <div class="TabBottom">
    <div class="tab-fill-height">
      <div class="tab-position-fixed">
        <div
          v-for="(item, index) in tabList"
          @click="changeTab(item, index)"
          :class="activeTab == index ? 'tab-title-active' : 'tab-title'"
        >
          <img
            :src="activeTab == index ? item.checkedIcon : item.icon"
            alt=""
            class="tab-icon-20"
          />
          <div class="tab-text">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'el-tab-bottom',
  data() {
    return {
      activeTab: 0
    }
  },
  created() {
    this.activeTab = this.defaultTab
  },
  //获取子组件传过来的激活tab
  props: {
    tabList: {
      type: Array,
      default: function() {
        return []
      }
    },
    defaultTab: {
      type: Number,
      default: 0
    }
  },
  methods: {
    changeTab(item, index) {
      //如果传了路由路径就是跳转页面，没传路径就交给父组件处理，比如  点击某个tab弹框而不是跳转页面。
      if (item.path) {
        this.activeTab = index //改变选中的底部tab样式
        this.$router.push({ name: item.path }) //跳转对应的路由页面
      }
      this.$emit('on-click', item, index) //将点击Tab的事件暴露给父组件
    }
  }
}
</script>
<style lang="less">
.TabBottom {
  //填充由fixed定位造成的数据流脱离高度
  .tab-fill-height {
    width: 100%;
    height: 50px;
  }
  /*兼容iphoneXR底部遮住小黑条*/
  @supports (bottom: env(safe-area-inset-bottom)) {
    .tab-position {
      padding-bottom: calc(-50px + env(safe-area-inset-bottom));
    }
  }
  //绝对定位
  .tab-position-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff;
    border-top: 1px solid #ddd;
  }
  //默认或者选中的tab样式
  .tab-title-active {
    color: #005398;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  //未选中的tab样式
  .tab-title {
    color: #999;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  //底部文字样式
  .tab-text {
    margin-top: 3px;
    font-size: 12px;
  }
  //底部图标大小
  .tab-icon-20 {
    width: 20px;
    height: 20px;
  }
}
</style>
