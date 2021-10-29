<!-- '添加' 页面 -->
<template>
  <div class="add">
    <h1>这是‘添加’页面</h1>
    <el-tab-bottom :tabList="tabList" :defaultTab="1" @on-click="changeTabBottom" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'add',
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      //公共的 tabList 可放在 store 中。
      tabList: [
        {
          title: '我的',
          path: 'mine',
          icon: require('@/assets/img/mine.png'),
          checkedIcon: require('@/assets/img/mineChecked.png')
        },
        {
          title: '添加',
          path: 'add',
          icon: require('@/assets/img/add.png'),
          checkedIcon: require('@/assets/img/addChecked.png')
        },
        {
          title: '团队',
          path: 'team',
          icon: require('@/assets/img/team.png'),
          checkedIcon: require('@/assets/img/teamChecked.png')
        }
      ]
    }
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //改变底部tab标签
    changeTabBottom(item, index) {}
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

.add {
}
</style>
