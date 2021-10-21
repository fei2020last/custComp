<!-- Toast弹窗 -->
<template>
  <div class="Toast">
    <div class="toast-content">
      <img :src="img" v-if="img" alt="" height="160" class="toast-img-radius" />
      <div class="cm-flex-column cm-p-16-20">
        <div class="toast-title">{{ title || '温馨提示' }}</div>
        <div class="toast-detail cm-mt-10">{{ message }}</div>
      </div>
      <div class="cm-flex cm-border-top cm-w-full cm-jc-sa">
        <div class="toast-close cm-p-10 cm-w-half" @click.stop="close">
          {{ btnLeftText || '关闭' }}
        </div>
        <div class="toast-look cm-p-10 cm-w-half" @click.stop="look">
          {{ btnRightText || '查看' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'ElToast',
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      message: ''
    }
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    close() {
      this.$el.parentNode.removeChild(this.$el)
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    },
    look() {
      if (typeof this.onLook === 'function') {
        //先关闭弹框
        this.onClose()
        this.onLook()
      }
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
.Toast {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  .toast-content {
    width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-radius: 3px;
  }
  .toast-title {
    text-align: center;
    font-size: 17px;
    font-weight: bold;
    color: #333;
  }
  .toast-detail {
    text-align: center;
    font-size: 13px;
    color: #999;
  }
  .toast-close {
    font-size: 17px;
    color: rgba(50, 150, 250, 1);
    text-align: center;
  }
  .toast-look {
    font-size: 17px;
    border-left: 1px solid #ddd;
    font-weight: bold;
    color: rgba(50, 150, 250, 1);
    text-align: center;
  }
  .toast-img-radius {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
}
</style>
