import contentForm from './contentForm.vue';
const context = {
  install: function (Vue) {
    //定义一个纵向表单组件。
    Vue.component('el-context', contentForm);
  }
}

export default context;