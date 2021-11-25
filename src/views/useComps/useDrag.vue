<!-- 使用拖拽指令 -->
<template>
  <div class="useDrag">
    <el-button @click="goBack">返回</el-button>
    <el-button @click="closeDiaBoxWeb">展示弹窗——Web端</el-button>
    <el-divider></el-divider>
    <div class="diaBox" v-show="showBoxWeb" v-drag="dragVal">
      <div class="imgdiv">
        <img @click="closeDiaBoxWeb" src="@/assets/img/icon-gb.png" alt="" />
      </div>
      <div class="content">
        111
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  name: 'useDrag',
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      showBoxWeb: false,
      dragVal: 'diaBox'
    }
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goBack() {
      history.go(-1)
    },
    closeDiaBoxWeb() {
      this.showBoxWeb = !this.showBoxWeb
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

.useDrag {
  width: 100%;
  height: calc(100% - 60px);
  position: absolute;
  .diaBox {
    padding: 10px;
    width: 50%;
    height: 100px;
    position: fixed;
    z-index: 10;
    background: url('../../assets/img/bg-all2.png') no-repeat;
    background-size: 100% 100%;
    .imgdiv {
      margin-top: 15px;
      text-align: end;
      img {
        margin-right: 26px;
        cursor: pointer;
      }
    }
  }
  .el-button {
    margin-bottom: 10px;
  }
}
</style>
