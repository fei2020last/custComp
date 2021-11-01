/**
 * 路由配置文件
 * 使用 createRouter() 函数来进行 Vue Router 的实例化
 * 使用 createWebHashHistory() 函数来创建Hash模式的路由模式对象
 */
import {
  createRouter,
  createWebHistory
} from 'vue-router'
const index = () => import('@/views/home/index.vue') //主页
const useResult = () => import('@/views/useComps/useResult.vue') //结果页
const useContentForm = () => import('@/views/useComps/useContentForm.vue') //表单纵向排版布局
const useToast = () => import('@/views/useComps/useToast.vue') //Toast弹窗
const useLoading = () => import('@/views/useComps/useLoading.vue') //Loading自定义指令
const useCarousel = () => import('@/views/useComps/useCarousel.vue') //Carousel 轮播图
const useQuestionnaire = () => import('@/views/useComps/useQuestionnaire.vue') //问卷调查组件

const mine = () => import('@/views/useComps/useTabBottom/mine.vue') //TabBottom 底部导航--'我的'
const add = () => import('@/views/useComps/useTabBottom/add.vue') //TabBottom 底部导航--'添加'
const team = () => import('@/views/useComps/useTabBottom/team.vue') //TabBottom 底部导航--'团队'

const useHalfScreen = () => import('@/views/useComps/useHalfScreen.vue') //半屏弹窗组件


const routes = [{
    path: '/',
    redirect: '/index'
  },
  {
    name: 'index',
    path: '/index',
    component: index,
  },
  {
    name: 'useResult',
    path: '/useResult',
    component: useResult,
  },
  {
    name: 'useContentForm',
    path: '/useContentForm',
    component: useContentForm,
  },
  {
    name: 'useToast',
    path: '/useToast',
    component: useToast,
  },
  {
    name: 'useLoading',
    path: '/useLoading',
    component: useLoading,
  },
  {
    name: 'useCarousel',
    path: '/useCarousel',
    component: useCarousel,
  },
  {
    name: 'useQuestionnaire',
    path: '/useQuestionnaire',
    component: useQuestionnaire,
  },

  {
    name: 'mine',
    path: '/mine',
    component: mine,
  },

  {
    name: 'add',
    path: '/add',
    component: add,
  },

  {
    name: 'team',
    path: '/team',
    component: team,
  },
  {
    name: 'useHalfScreen',
    path: '/useHalfScreen',
    component: useHalfScreen,
  },



]
const routerHistory = createWebHistory()
const router = createRouter({
  mode: 'history',
  history: routerHistory,
  routes
})

export default router