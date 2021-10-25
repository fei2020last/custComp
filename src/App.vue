<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      curTagName: ''
    }
  },
  watch: {}
}
</script>

<style>
/* 引入公共样式 */
@import url('./common/index.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
