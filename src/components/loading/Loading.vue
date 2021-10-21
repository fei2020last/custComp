<!-- loading加载框 -->
<template>
  <div class="Loading">
    <div class="loading-content">
      <img src="../../assets/img/loading.gif" alt="" />
      <p class="desc">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      title: '正在载入...'
    }
  },
  methods: {
    setTitle(title) {
      this.title = title
    }
  }
}
</script>

<style lang="less">
.Loading {
  width: 100%;
  height: 100%;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  .loading-content {
    background-color: #333;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    text-align: center;
    img {
      width: 50px;
      height: 50px;
      padding-top: 8px;
    }
    .desc {
      font-size: 16px;
      color: #fff;
      margin: auto;
    }
  }
}
</style>
