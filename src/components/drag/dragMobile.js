// 绑定类
class Drag {
  constructor(el, option = {}) {
    this.el = el;
    /* 绑定的属性集合 */
    this.option = option;
    /* 需拖动的元素 */
    this.dragEle = option.value;

    /* 鼠标位置和div的左上角位置 */
    this.screenWidth = document.body.clientWidth || window.screen.width || document.documentElement.offsetWidth;
    this.screenHeight = document.body.clientHeight || window.screen.height || document.documentElement.offsetHeight;

    /* 元素开始移动时的位置信息 */
    this.startX = 0;
    this.startY = 0;

    /* 元素移动距离 */
    this.moveX = 0;
    this.moveY = 0;

    /* 元素移动之后的位置信息 */
    this.nowX = 0;
    this.nowY = 0;

    /* 判断可否进行移动 */
    this.moveStatus = false;

    this.init();
  }
  //初始化事件
  init() {
    this.el.addEventListener('touchstart', (e) => this.start(e));
    this.el.addEventListener('touchmove', (e) => this.move(e));
    this.el.addEventListener('touchend', (e) => this.end(e));
  }

  //开始触碰
  start(e) {
    //判定可进行移动
    this.moveStatus = true;

    let tar = e.target;

    //记录初始位置
    this.startX = e.touches[0].clientX - e.target.offsetLeft;
    this.startY = e.touches[0].clientY - e.target.offsetTop;
  }



  //移动
  move(e) {
    if (this.moveStatus) {
      let tar = e.target;
      //元素移动后的位置
      this.nowX = e.touches[0].clientX;
      this.nowY = e.touches[0].clientY;

      //计算目标元素需移动的距离
      this.moveX = this.nowX - this.startX;
      this.moveY = this.nowY - this.startY;

      //检测是否越界，并调整
      this.checkOver(tar);

      //进行拖动元素移动操作
      this.setMove(tar);

      e.preventDefault()
      e.stopPropagation();
    }
  }

  //结束
  end(e) {
    // console.log('end')
    this.moveStatus = false;
  }

  checkOver(tar) {
    /**
     * 检测元素是否越界
     * clientWidth = width + 左右padding
     * offsetWidth = width + 左右padding + 左右boder
     */
    // 限制滑块超出页面
    // console.log('屏幕大小', this.screenWidth, this.screenHeight)
    if (this.moveX < 0) {
      this.moveX = 0
    } else if (this.moveX > this.screenWidth - tar.clientWidth) {
      this.moveX = this.screenWidth - tar.clientWidth
    }
    if (this.moveY < 0) {
      this.moveY = 0
    } else if (this.moveY > this.screenHeight - tar.clientHeight) {
      this.moveY = this.screenHeight - tar.clientHeight
    }

  }

  setMove(tar) {
    var x = this.moveX || 0,
      y = this.moveY || 0;
    this.el.style = 'position: absolute;-webkit-transform: translate(' + x + 'px,' + y + 'px);-moz-transform: translate(' + x + 'px,' + y + 'px);-o-transform: translate(' + x + 'px,' + y + 'px);-ms-transform: translate(' + x + 'px,' + y + 'px);';
    //this.el.style.transform = `translate( ${x}px, ${y}px )`;


  }

}

//将封装好的拖拽整合在指令上
export const mdrag = {
  mounted(el, binding) {
    new Drag(el, binding || {})
  }

}