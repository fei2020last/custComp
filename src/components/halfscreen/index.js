import contentForm from "./HalfScreen.vue";
const context = {
  install: function (Vue) {
    //定义一个纵向表单组件。
    Vue.component(contentForm.name, contentForm);
  }
}

export default context;