// 基于面向对象写的拖拽
class Drap {
  static zIndex = 1;
  constructor(el, option = {}) {
    this.el = el;
    this.x = 0;
    this.y = 0;
    this.option = option;
    this.init();
  }
  init() {
    this.setEleStyle(this.option || {});
    this.el.onmousedown = (e) => {
      this.onMouseDown(e)
      this.el.setCapture && this.el.setCapture() //全局捕获
      return false
    }

  }
  //样式设置
  setEleStyle(option) {
    for (const key in option) {
      this.el.style[key] = option[key]
    }
  }

  //按下ele
  onMouseDown(e) {
    let zIndex = getComputedStyle(this.el).getPropertyValue('z-index');
    zIndex = isNaN(zIndex) ? 1 : zIndex
    Drap.zIndex = Drap.zIndex > zIndex ? Number(Drap.zIndex) + 1 : Number(zIndex) + 1
    this.setEleStyle({
      "zIndex": Drap.zIndex,
      position: 'fixed',
      'cursor': 'move'
    })
    this.x = e.clientX - this.el.offsetLeft;
    this.y = e.clientY - this.el.offsetTop;
    document.onmousemove = (e) => this.onMouseMove(e);
    document.onmouseup = (e) => this.onMouseUp(e)
  }
  //移动move
  onMouseMove(e) {
    let X = e.clientX - this.x
    let Y = e.clientY - this.y;
    if (X < 10 - this.el.offsetWidth) {
      X = 10 - this.el.offsetWidth
    } else if (X > document.documentElement.clientWidth - 10) {
      X = document.documentElement.clientWidth - 10
    }
    if (Y < 10 - this.el.clientHeight) {
      Y = 10 - this.el.clientHeight
    } else if (Y > document.documentElement.clientHeight - 10) {
      Y = document.documentElement.clientHeight - 10
    }
    this.el.style.left = X + 'px'
    this.el.style.top = Y + 'px'
  }
  //释放
  onMouseUp(e) {
    document.onmousemove = null
    document.onmouseup = null
    this.setEleStyle({
      'cursor': 'pointer'
    })
    this.el.setCapture && this.el.setCapture() //释放全局捕获

  }
}

//将封装好的拖拽整合在指令上
export const wdrag = {
  mounted(el, binding) {
    new Drap(el, binding.value || {})
  }
}