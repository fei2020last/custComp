import CarouselImg from './CarouselImg.vue';
const carousel = {
  install: function (Vue) {
    //定义一个新组件。 命名为 counter
    Vue.component(CarouselImg.name, CarouselImg);
  }
}

export default carousel;