<!-- 使用结果页 -->
<template>
  <div class="useResult">
    <!-- 全局组件-->
    <el-result :resultMsg="resultMsg" @on-cancel="cancel" @on-submit="submit" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'useResult',
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      //页面展示的静态内容集合
      resultMsg: {
        title: '提交成功', //描述标题
        submitText: '继续填写', //提交按钮文本
        cancelText: '退出应用', //取消按钮文本
        status: 'success' //输入值字段
      }
    }
  },

  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //取消按钮事件
    cancel() {
      this.$router.go(-1)
    },
    //提交按钮事件
    submit() {
      this.$router.go(-1)
    }
  },
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 在绑定元素的 attribute 或事件监听器被应用之前调用（可以访问当前this实例）
  created() {
    let item = this.$route && this.$route.query
    if (item.status === 'fail') {
      this.item = {
        title: '提交失败，请联系开发人员',
        submitText: '重新填写',
        cancelText: '退出应用',
        status: 'fail'
      }
    }
  },
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

.useResult {
}
</style>
