// 绑定类
class MoveBuuild {
  constructor(ele) {
    this.ele = ele;
    this.init();
  }

  domPosition = {
    x: 0,
    y: 0
  }

  startPosition = {
    x: 0,
    y: 0
  }

  openMove = false
  transitionMove = {
    transform: `translate( 0px, 0px )`,
    background: 'red'
  }

  setMove(x = 0, y = 0) {
    this.ele.style.transform = `translate( ${x}px, ${y}px )`;
    this.ele.style.background = 'red';
  }

  init() {
    this.ele.addEventListener('touchstart', (e) => this.start(e));
    this.ele.addEventListener('touchmove', (e) => this.move(e));
    this.ele.addEventListener('touchend', (e) => this.end(e));
    this.setMove();
  }

  start(e) {
    const el = e.target;
    const {
      pageX,
      pageY
    } = e.changedTouches[0];
    this.startPosition = {
      x: pageX,
      y: pageY
    }
    const domPosition = el.style.transform.match(/[\d]+.?[\d]*px/igm);
    console.log("e---->", e);
    console.log("domPosition", domPosition);
    this.domPosition = {
      x: parseInt(domPosition[0].replace('px', '0')),
      y: parseInt(domPosition[1].replace('px', '0')),
    }
    this.openMove = true;
  }

  move(e) {
    if (!this.openMove) {
      return
    };
    const {
      pageX,
      pageY
    } = e.changedTouches[0];
    const movePoisition = {
      x: pageX,
      y: pageY
    }
    const x = movePoisition.x - this.startPosition.x + this.domPosition.x;
    const y = movePoisition.y - this.startPosition.y + this.domPosition.y;
    const moveStyle = {
      transform: `translate( ${x}px, ${y}px )`,
      background: 'red'
    }

    this.setMove(x, y);
    this.transitionMove = moveStyle;
  }

  end(e) {
    this.openMove = false;
  }

}

//将封装好的拖拽整合在指令上
export const mdrag = {
  mounted(el, binding) {
    new MoveBuuild(el, binding.value || {})
  }

}



/**
 *   style.width 获取的元素宽度只是div的宽度， 不包括border、 和padding所占的宽度， 
 * 且宽度值是带单位px的
 *   offsetWidth 获取的元素宽度为width + border + padding的值（ 不包括margin）， 
 * 且返回值只为一个数值， 不带单位
 * 
 * 解： ele.offsetWidth：获取拖拽元素的宽度
 *      document.documentElement.offsetWidth：DOM文档的根节点html元素对象的宽度（375 X 667）
 */
// console.log("doc.body", document.body.clientWidth, window.screen.width, document.documentElement.offsetWidth)
// console.log("document", document)
// console.log("document.documentElement.offsetHeight", document.documentElement.offsetWidth, document.documentElement.offsetHeight);
// if (x + ele.offsetWidth > document.documentElement.offsetWidth) {
//   x = document.documentElement.offsetWidth - ele.offsetWidth
// }
// //想在全屏里拖拽，document.documentElement.offsetHeight需要占比100%屏幕高
// if (y + ele.offsetHeight > document.documentElement.offsetHeight) {
//   y = document.documentElement.offsetHeight - ele.offsetHeight
// }

// console.log('xxxx', x)
// if (x < 0) {
//   x = 0
// }
// if (y < 0) {
//   y = 0
// }
// ele.style.right = x + 'px'
// ele.style.bottom = y + 'px'
// this.endX = x
// this.endY = y