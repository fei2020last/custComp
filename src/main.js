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
import * as echarts from 'echarts';

//element+
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
//View UI
// vue3 + @vue/cli（4.5.13）+ ViewUI引入报错，百度了，暂时没有解决的办法
// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';

// import helloworld from '@/components/HelloWorld.vue'
// import result from '@/components/result/Result.js'



const app = createApp(App)
app.use(router)
app.use(ElementPlus)
// app.use(ViewUI)

// app.component('helloworld', {
//   helloworld
// })
// app.use(result);

app.mount('#app')

//使用global内的全局变量
app.config.globalProperties.$datas = global
app.config.globalProperties.$echarts = echarts
router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  console.log("to,from", to, from);
  next()

})