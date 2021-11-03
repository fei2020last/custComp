import contentForm from "./HalfScreen.vue";
const context = {
  install: function (Vue) {
    Vue.component(contentForm.name, contentForm);
  }
}

export default context;