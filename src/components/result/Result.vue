<!-- 结果页封装 -->
<template>
  <div class="Result">
    <el-image :src="item.status === 'success' ? successBg : failBg" style="width: 250px">
      <div slot="placeholder" class="image-slot">图片加载中<span class="dot">...</span></div>
    </el-image>
    <div :class="item.status === 'success' ? 'success-title' : 'fail-title'">{{ item.title }}</div>
    <div>{{ item.describe }}</div>
    <div class="cm-flex cm-jc-sa">
      <div @click="cancel()" class="cm-btn-cancel">{{ item.cancelText }}</div>
      <div @click="submit()" class="cm-btn-submit">{{ item.submitText }}</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//import引入的组件需要注入到对象中才能使用
export default {
  name: 'Result',
  emits: ['on-cancel', 'on-submit'],
  props: {
    item: {
      type: Object,
      default: {}
    }
  },

  components: {},
  data() {
    //这里存放数据
    return {
      successBg: require('../../assets/img/success.png'),
      failBg: require('../../assets/img/fail.png')
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    cancel() {
      this.$emit('on-cancel', '')
    },
    submit() {
      this.$emit('on-submit', '')
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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

.Result {
}
</style>
