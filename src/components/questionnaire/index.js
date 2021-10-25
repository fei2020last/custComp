import Questionnaire from './Questionnaire.vue';
const questionnaire = {
  install: function (Vue) {
    //定义一个新组件。 命名为 counter
    console.log(Questionnaire.name)
    Vue.component(Questionnaire.name, Questionnaire);
  }
}

export default questionnaire;