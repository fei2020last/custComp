//查看vue的版本号:npm list vue 
//@vue/cli脚手架查看版本:vue -V 
//vuex版本4.0.0
import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import {
  global
} from './utils/global'
import * as echarts from 'echarts'

//element-plus（版本：1.0.1-beta.17，不同版本引入的css也不一样，详见官方文档--快速开始）
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
//版本：1.2.0-beta.3
// import 'element-plus/dist/index.css'



//View UI
// vue3 + @vue/cli（4.5.13）+ ViewUI引入报错，百度了，暂时没有解决的办法
// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';

import 'amfe-flexible' //引入px自动转化rem工具

import lazyPlugin from 'vue3-lazy' //vue3-lazy的使用(npm install vue3-lazy -S)

//全局组件
import helloworld from '@/components/HelloWorld.vue'
import result from '@/components/result/index.js'
import contentForm from "@/components/contentForm/index.js"
import loadingDirective from '@/components/loading/directive.js'
import carousel from "@/components/carouselImg/index.js"
import questionnaire from "@/components/questionnaire/index.js"
import toast from "@/components/toast/index.js"
import tabBottom from '@/components/tabbuttom/index.js'
import halfScreen from '@/components/halfscreen/index.js'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
// app.use(ViewUI)

app.component('helloworld', {
  helloworld
})
app.use(result)
app.use(contentForm)
app.use(carousel)
app.use(questionnaire)
app.use(tabBottom)
app.use(halfScreen)



//使用图片懒加载插件
app.use(lazyPlugin, {
  loading: require('@/assets/img/fail.png'), //图片加载中时显示的默认图片
  error: require('@/assets/img/fail.png') //图片加载失败后显示的图片
})
app.directive('loading', loadingDirective)
app.mount('#app')

//使用global内的全局变量
app.config.globalProperties.$datas = global
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.$toast = toast;


//路由的前置守卫
router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  // console.log("to,from", to, from);

  // setTimeout(() => {
  //   Loading.show();
  // }, 1000)

  // Loading.hide();
  next()

})