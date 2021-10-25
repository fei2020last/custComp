<!-- Carousel 轮播图 -->
<template>
  <div
    class="carousel-container"
    :style="{ height: height }"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <div v-if="handleDisplay">
      <button
        class="carousel-arrow carousel-arrow-left"
        @click.stop="throttledArrowClick(controlDisabled[0].label)"
        :disabled="controlDisabled[0].disabled"
      >
        <i class="arrow-left"></i>
      </button>
      <button
        class="carousel-arrow carousel-arrow-right"
        @click.stop="throttledArrowClick(controlDisabled[1].label)"
        :disabled="controlDisabled[1].disabled"
      >
        <i class="arrow-right"></i>
      </button>
    </div>
    <div
      ref="list"
      class="carousel-list"
      @touchstart="moveStart"
      @touchmove="moving"
      @touchend="moveEnd"
    >
      <slot class="carousel-pane"></slot>
    </div>
    <ul class="carousel-indicator" v-if="isIndicator" ref="indicator">
      <li
        v-for="(item, index) in carouselLength"
        @click="setCurrentItem(index)"
        :class="[index == currentIndex - 1 ? 'is-active-item' : '', 'carousel-indicator-item']"
      ></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ElCarouselImg',
  props: {
    interval: {
      type: Number,
      default: 2000 //轮播间隔时间
    },
    transitionTime: {
      type: Number,
      default: 1000 //轮播过度时间
    },
    isIndicator: {
      type: Boolean,
      default: true //是否显示指示灯
    },
    height: String, //轮播图高度
    isHandle: {
      type: Boolean,
      default: true //是否显示左边点击按钮,默认点击图片并且图片大于1张时显示
    },
    isAutoplay: {
      type: Boolean,
      default: true //是否开启自动轮播
    }
  },
  data() {
    return {
      currentIndex: 1, //当前索引
      carouselLength: 0, //实际轮播图个数
      timer: null, //定时器
      handle: false, //是否显示左右点击按钮
      //设置点击状态
      controlDisabled: [
        { label: 'leftBtn', disabled: false },
        { label: 'rightBtn', disabled: false },
        { label: 'child', disabled: false }
      ],
      isMoving: false,
      start: {
        x: 0
      },
      time: 0, //滑动时触摸结束回弹时间。
      imgList: null, //轮播图片的父元素
      width: window.innerWidth //移动距离
    }
  },
  computed: {
    handleDisplay() {
      return this.isHandle && this.handle && this.carouselLength > 1
    }
  },
  mounted() {
    //启动轮播图
    this.prepare()
  },
  created() {},
  methods: {
    moveStart(e) {
      e.stopPropagation()
      this.start.x = e.changedTouches[0].pageX
    },
    moving(e) {
      e.stopPropagation()
      this.pauseTimer()
      var distanceX = e.changedTouches[0].pageX - this.start.x
      this.imgList.style.transform =
        'translate3d(' + (-this.currentIndex * this.width + distanceX) + 'px,0,0)'
      this.imgList.style.transition = 'transform 0s'
      this.isMoving = true
    },
    moveEnd(e) {
      if (this.isMoving) {
        e.stopPropagation()
        this.time = 300
        var distanceX = e.changedTouches[0].pageX - this.start.x
        if (distanceX < 0) {
          this.currentIndex++
          if (this.currentIndex == this.carouselLength + 1) {
            this.criticality(1, undefined, 300)
          } else {
            this.play(300)
          }
        } else {
          this.currentIndex--
          if (this.currentIndex == 0) {
            this.criticality(this.carouselLength, undefined, 300)
          } else {
            this.play(300)
          }
        }
        this.isMoving = false
        this.autoPlay() //开始自动轮播
      }
    },
    prepare() {
      this.imgList = this.$refs.list
      var children = this.imgList.children
      this.carouselLength = children.length
      if (this.carouselLength > 1) {
        this.width = this.imgList.clientWidth
        //首尾各添加一张图片，以便无缝轮播
        var firstDom =
          this.imgList.firstElementChild && this.imgList.firstElementChild.cloneNode(true)
        var lastDom = this.imgList.lastElementChild && this.imgList.lastElementChild.cloneNode(true)
        if (this.imgList.firstElementChild) {
          this.imgList.appendChild(firstDom)
          this.imgList.insertBefore(lastDom, this.imgList.firstElementChild)
          this.imgList.style.transform = 'translate3d(' + -this.width + 'px,0,0)'
        }
        //判断是否开启自动轮播
        if (this.isAutoplay) {
          this.autoPlay() //开始自动轮播
        }
      }
    },
    //停止定时器
    pauseTimer() {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
    //鼠标进入
    handleMouseEnter() {
      if (this.isHandle) {
        this.handle = true //显示左右点击按钮
        this.pauseTimer() //停止定时器
      }
    },
    //鼠标移出
    handleMouseLeave() {
      if (this.isHandle || this.handle) {
        this.handle = false //隐藏左右点击按钮
        this.autoPlay() //开始自动轮播
      }
    },
    throttledArrowClick(dir) {
      if (dir == 'leftBtn') {
        this.currentIndex--
      } else {
        this.currentIndex++
      }
      if (this.currentIndex == 0) {
        this.criticality(this.carouselLength, this.controlDisabled[0])
      } else if (this.currentIndex == this.carouselLength + 1) {
        this.criticality(1, this.controlDisabled[1])
      } else {
        this.play()
      }
    },
    //轮播处理逻辑
    play(transitionTime) {
      // console.log('轮播处理逻辑', this.transitionTime)
      this.imgList.style.transform = 'translate3d(' + -this.currentIndex * this.width + 'px,0,0)'
      if (transitionTime) {
        this.imgList.style.transition = 'transform ' + transitionTime + 'ms'
      } else {
        this.imgList.style.transition = 'transform ' + this.transitionTime + 'ms'
      }
    },
    setCurrentItem(index) {
      //点击指示灯时停止轮播。
      this.pauseTimer()
      if (this.controlDisabled[2].disabled) {
        return
      }
      //点击第一张时
      if (index == 0 && this.currentIndex == this.carouselLength) {
        this.currentIndex++
        this.criticality(1, this.controlDisabled[2])
      } else if (index == this.carouselLength - 1 && this.currentIndex == 1) {
        this.currentIndex--
        this.criticality(this.carouselLength, this.controlDisabled[2])
      } else {
        this.currentIndex = index + 1
        this.play()
      }
    },
    criticality(boundary, item, transitionTime) {
      this.play(transitionTime)
      this.currentIndex = boundary
      setTimeout(
        () => {
          this.imgList.style.transform = 'translate3d(' + -this.width * boundary + 'px,0,0)'
          this.imgList.style.transition = 'transform 0ms'
        },
        transitionTime ? transitionTime : this.transitionTime
      )
      //点击临界值时将点击状态暂停掉以便偷梁换柱
      if (item) {
        var after = new Date().getTime() + 1000 + 100
        if (new Date().getTime() <= after) {
          item.disabled = true
          setTimeout(() => {
            item.disabled = false
          }, after - new Date().getTime())
        }
      }
    },
    //开始自动轮播
    autoPlay() {
      // console.log('this.interval', this.interval)
      this.timer = setInterval(() => {
        this.currentIndex++
        if (this.currentIndex == this.carouselLength + 1) {
          clearInterval(this.timer)
          this.criticality(1)
          this.autoPlay()
        } else {
          this.play()
        }
      }, this.interval)
    }
  },
  //销毁之前调用
  beforeUnmount() {
    this.pauseTimer()
  }
}
</script>
<style lang="less">
.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: bisque;
}
.carousel-indicator {
  display: flex;
  z-index: 20;
  padding: 0;
  width: 100%;
  justify-content: center;
}
.is-active-item {
  opacity: 1 !important;
}
.carousel-indicator-item {
  margin: 0 5px;
  background: #f57070;
  width: 30px;
  height: 3px;
  list-style: none;
  border-radius: 20px;
  opacity: 0.5;
}
.carousel-list {
  display: flex;
  position: relative;
}
.arrow-left,
.arrow-right {
  font-family: element-icons;
  font-style: normal;
}
.arrow-right:before {
  content: '\e6e0';
}
.carousel-list img {
  width: 100%;
  flex-shrink: 0;
}
.carousel-list div {
  width: 100%;
  flex-shrink: 0;
  overflow: hidden;
}
.arrow-left:before {
  content: '\e6de';
}
.carousel-arrow {
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  height: 36px;
  width: 36px;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 50%;
  background-color: rgba(31, 45, 61, 0.11);
  color: #fff;
  position: absolute;
  top: 50%;
  z-index: 10;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
  font-size: 12px;
}
.carousel-arrow-left {
  left: 15px;
}
.carousel-arrow-right {
  right: 15px;
}
</style>
