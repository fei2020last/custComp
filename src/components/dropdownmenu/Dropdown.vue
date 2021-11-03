<template>
  <div class="dropdown">
    <div @click="showM">
      <el-button type="primary">点我选择</el-button>
    </div>

    <!-- 可选菜单项（淡入淡出效果） -->
    <el-collapse-transition>
      <div class="showMenu" v-if="show">
        <!-- 具名插槽 -->
        <drop-down-menu @commitClick="commitClick"></drop-down-menu>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
import dropdownMenu from '@/components/dropdownmenu/DropdownMenu.vue'
export default {
  name: 'Dropdown',
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    'drop-down-menu': dropdownMenu
  },
  data() {
    return {
      // 默认二级盒子关闭
      show: false
    }
  },
  methods: {
    showM(val) {
      this.show = !this.show
    },
    commitClick(value) {
      // 向父级暴露dropdown事件，并把值传入
      this.$emit('change-item', value)
      if (this.show) this.show = false
    }
  }
}
</script>

<style lang="less">
.dropdown {
  height: 200px;
  display: inline-block; /* 行内块 */
}
</style>
