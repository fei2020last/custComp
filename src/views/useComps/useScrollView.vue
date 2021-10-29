<!-- 使用上拉加载更多组件 -->
<template>
  <div class="useScrollView">
    <div
      ref="scroll"
      class="scroll"
      v-scroll-view="getList"
      scroll-view-disabled="disabled"
      scroll-view-distance="10"
      scroll-view-delay="1000"
    >
      <div class="cm-pt-018 cm-tx-c item" v-for="item in list">
        {{ item }}
      </div>
      <p class="cm-tx-c bottom">{{ loadText }}</p>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'useScrollView',
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      count: 16,
      loadText: '加载中',
      disabled: false,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getList() {
      if (this.count >= 30) {
        this.disabled = true
        this.loadText = '加载完成'
      }
      this.getData()
    },
    getData() {
      this.list.push(this.count)
      this.count++
    }
  },
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 在绑定元素的 attribute 或事件监听器被应用之前调用（可以访问当前this实例）
  created() {},
  // 在绑定元素的父组件挂载之前调用
  beforeMount() {},
  // 绑定元素的父组件被挂载时调用
  mounted() {
    setTimeout(() => {
      //设置要滑动的div高度
      var scroll = this.$refs.scroll
      var hei = window.innerHeight
      scroll.style.height = hei + 'px'
    }, 200)
  },
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

.useScrollView {
  .scroll {
    overflow: auto;
  }
  .item {
    height: 50px;
    background: pink;
    border: 1px solid #ddd;
  }
  .bottom {
    height: 40px;
    line-height: 40px;
  }
}
</style>
