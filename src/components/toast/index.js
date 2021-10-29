// 1. 导入组件
// ----- 显示 ------
// 2. 根据组件创建虚拟节点. const vnode = createVNode(XtxMessage, { type, text })
// 3. 准备一个DOM容器
// 4. 把虚拟节点渲染DOM容器中. render(vnode, div)
// -----隐藏DOM-----
// 5. 开启定时器，移出DOM容器内容 render(null, div)
import {
  createVNode,
  render
} from 'vue'
import XtxMessage from './Toast.vue'

// 2. 准备一个DOM容器
const div = document.createElement('div')
div.setAttribute('class', 'xtx-message-wrapper')
document.body.appendChild(div)

let time = null
export default ({
  text,
  type
}) => {
  // 3. 创建虚拟dom(组件对象， props)
  const vnode = createVNode(XtxMessage, {
    text,
    type
  })
  // 4. 把虚拟dom渲染到div
  render(vnode, div)

  // 5. 设置定时器清空(toast弹窗显示时间)
  clearTimeout(time)
  time = setTimeout(() => {
    render(null, div)
  }, 2000)

  console.log('message.js')
}