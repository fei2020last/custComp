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
const contentForm = () => import('@/views/useComps/useContentForm.vue') //表单纵向排版布局

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
    name: 'contentForm',
    path: '/contentForm',
    component: contentForm,
  },

]
const routerHistory = createWebHistory()
const router = createRouter({
  mode: 'history',
  history: routerHistory,
  routes
})

export default router