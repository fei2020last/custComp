<!-- 使用轮播图 -->
<template>
  <div class="useCarousel">
    <el-carousel-img :interval="parameter.interval">
      <img :src="carpool" alt="" />
      <img :src="gold" alt="" />
    </el-carousel-img>
    <el-button @click="goBack">返回</el-button>
  </div>
</template>

<script>
import carpool from '../../assets/img/success.png'
import gold from '../../assets/img/fail.png'
export default {
  name: 'useCarousel',
  props: {},
  data() {
    return {
      carpool,
      gold,
      //向子组件传递的值
      parameter: {
        interval: 3000 //轮播间隔时间
        //transitionTime: 100000 //轮播过度时间
      }
    }
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goBack() {
      this.$router.go(-1)
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
.useCarousel {
  .el-button {
    margin-top: 20px;
  }
}
</style>
