<!-- 半屏弹窗组件 -->
<template>
  <div class="HalfScreen">
    <!-- 遮罩层 -->
    <div class="mask" v-if="visible"></div>
    <!-- 动画 -->
    <transition name="halfscreen" @after-enter="afterEnter" @after-leave="afterLeave">
      <div v-if="visible" class="halfscreen-dialog-wrapper">
        <div ref="dialog" class="halfscreen-dialog">
          <div ref="header" class="dialog-header">
            <span class="dialog-title">{{ title }}</span>
            <a aria-label="Close" class="dialog-headerbtn">
              <i class="dialog-close el-icon el-icon-close" @click="closeMyself"></i>
            </a>
          </div>
          <div :class="customClass" class="dialog-body">
            <!--弹窗的内容-->
            <slot></slot>
            <div v-for="(item, index) in list" :key="index">
              <h4>{{ item }}</h4>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'HalfScreen',
  props: {
    title: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: []
    }
  },

  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {}
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {
    visible(val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.dialog.scrollTop = 0
        })
      }
    }
  },
  //方法集合
  methods: {
    //右上角关闭X号的事件
    closeMyself() {
      this.$emit('close', true)
    },
    afterEnter() {
      this.$emit('opened')
    },
    afterLeave() {
      this.$emit('closed')
    }
  },
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 在绑定元素的 attribute 或事件监听器被应用之前调用（可以访问当前this实例）
  created() {},
  // 在绑定元素的父组件挂载之前调用
  beforeMount() {},
  // 绑定元素的父组件被挂载时调用
  mounted() {},
  // 在包含组件的 VNode 更新之前调用
  beforeUpdate() {},
  // 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
  updated() {},
  // 在绑定元素的父组件卸载之前调用
  beforeUnmount() {},
  // 卸载绑定元素的父组件时调用
  unmounted() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
}
</script>
<style lang="less">
//@import url(); 引入公共css类
.HalfScreen {
  .mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    overflow-y: hidden;
    top: 0;
  }
  .halfscreen-dialog-wrapper {
    position: fixed;
    top: 250px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    z-index: 5;
    opacity: 1;
  }

  .halfscreen-dialog {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto 50px;
    background: #fff;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 0;

    overflow-y: auto;
  }
  .dialog-header {
    height: 50px;
    line-height: 24px;
    font-size: 18px;
    color: #fff;
    background-color: #516294;
    text-align: center;
  }
  .dialog-header .dialog-title {
    line-height: 1.35rem;
    font-size: 18px;
    color: #fff;
  }
  .dialog-headerbtn {
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 0;
    background: 0 0;
    border: none;
    outline: 0;
    cursor: pointer;
    font-size: 20px;
  }
  .dialog-headerbtn .dialog-close {
    color: #fff;
  }
  .dialog-headerbtn:focus .dialog-close,
  .dialog-headerbtn:hover .dialog-close {
    color: #409eff;
  }

  .dialog-body {
    height: calc(100% - 50px);
    color: #606266;
    line-height: 24px;
    font-size: 16px;
    overflow-y: auto;
  }
  .dialog-footer {
    height: 53px;
    padding: 10px 30px;
    text-align: right;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-top: 1px solid #ddd;
    background-color: #fff;
  }
  .el-popup-parent--hidden {
    overflow: hidden;
  }

  //动画过程
  .halfscreen-enter {
    animation: halfscreen-dialog-fade-in 0.5s ease;
  }
  .halfscreen-leave {
    animation: halfscreen-dialog-fade-out 0.5s ease forwards;
  }
  .halfscreen-enter-active {
    animation: halfscreen-dialog-fade-in 0.5s ease;
  }
  .halfscreen-leave-active {
    animation: halfscreen-dialog-fade-out 0.5s ease forwards;
  }

  @keyframes halfscreen-dialog-fade-in {
    0% {
      transform: translate3d(0, 100%, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes halfscreen-dialog-fade-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, 100%, 0);
      opacity: 1;
    }
  }
}
</style>
