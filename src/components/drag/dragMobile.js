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