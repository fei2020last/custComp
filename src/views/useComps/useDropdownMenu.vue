<!-- 使用下拉菜单 -->
<template>
  <div class="useDropdownMenu">
    <h3>下拉菜单</h3>
    <el-button @click="goBack">返回</el-button>
    <el-divider></el-divider>
    <drop-down @change-item="changeItem"></drop-down>
    <div>
      选中的值：
      <h4 v-html="checkVal"></h4>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import dropdown from '@/components/dropdownmenu/Dropdown.vue'

export default {
  name: 'useDropdownMenu',
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {
    'drop-down': dropdown
  },
  data() {
    //这里存放数据
    return {
      menuLists: [{ itemTitle: '新建文章' }, { itemTitle: '编辑文章' }, { itemTitle: '个人信息' }],
      checkVal: ''
    }
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goBack() {
      this.$router.push({ name: 'index' })
    },
    changeItem(val) {
      this.checkVal = val
    }
  },
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 在绑定元素的 attribute 或事件监听器被应用之前调用（可以访问当前this实例）
  created() {},
  // 在绑定元素的父组件挂载之前调用
  beforeMount() {},
  // 绑定元素的父组件被挂载时调用
  mounted() {},
  // 在包含组件的 VNode 更新之前调用
  beforeUpdate() {},
  // 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
  updated() {},
  // 在绑定元素的父组件卸载之前调用
  beforeUnmount() {},
  // 卸载绑定元素的父组件时调用
  unmounted() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
}
</script>
<style lang="less">
//@import url(); 引入公共css类

.useDropdownMenu {
  h4 {
    display: inline-block;
  }
}
</style>
