<template>
  <div class="dropdown-item" @click="itemClick(value)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DropdownItem',
  props: ['value'],
  data() {
    return {}
  },
  methods: {
    itemClick(value) {
      //调用组件父级的方法，然后父级调爷爷级
      this.$emit('getClkItem', value)
    }
  }
}
</script>

<style lang="less">
.dropdown-item {
  line-height: 40px; /* 行高40px */
  white-space: nowrap; /* 不换行 */
  padding: 0 20px; /* 内边距上下为0 左右为20px */
  color: #606266; /* 字体颜色为灰色 */
  cursor: pointer; /* 鼠标移入为点击样子 */
  &:hover {
    color: #409eff; /* 字体颜色为蓝色 */
    background-color: #ecf5ff; /* 背景颜色为 浅~~蓝色 非常浅就对了 */
  }
}
</style>
