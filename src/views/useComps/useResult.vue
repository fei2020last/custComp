<!-- 使用结果页 -->
<template>
  <div class="useResult">
    <el-result :item="item" @on-cancel="cancel" @on-submit="submit"></el-result>
  </div>
</template>

<script>
import Result from '../../components/result/Result.vue'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'useResult',
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: { 'el-result': Result },
  data() {
    //这里存放数据
    return {
      //页面展示的静态内容集合
      item: {
        title: '提交成功', //描述标题
        submitText: '继续填写', //提交按钮文本
        cancelText: '退出应用', //取消按钮文本
        status: 'success' //输入值字段
      }
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //取消按钮事件
    cancel() {
      dd.biz.navigation.close({
        onSuccess: function(result) {
          /*result结构
             {}
             */
        },
        onFail: function(err) {}
      })
    },
    //提交按钮事件
    submit() {
      // this.$router.go(-1)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
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
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less">
//@import url(); 引入公共css类

.useResult {
}
</style>
