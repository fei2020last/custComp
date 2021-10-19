import Result from './Result.vue';
const result = {
  install: function (Vue) {
    //定义一个新组件。 命名为 counter
    Vue.component(Result.name, Result);
  }
}

export default result;