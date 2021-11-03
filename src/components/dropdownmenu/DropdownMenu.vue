<!-- 下拉菜单组件 -->
<template>
  <div class="dropdown-menu">
    <drop-down-item
      :value="item.itemTitle"
      v-for="(item, index) in menuItems"
      :key="index"
      @getClkItem="getClkItem"
      >{{ item.itemTitle }}</drop-down-item
    >
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import dropdownItem from '@/components/dropdownmenu/DropdownItem.vue'
export default {
  name: 'DropdownMenu',
  props: {
    list: {
      type: Array,
      defalut: []
    }
  },
  //import引入的组件需要注入到对象中才能使用
  components: {
    'drop-down-item': dropdownItem
  },
  data() {
    //这里存放数据
    return {
      menuItems: [{ itemTitle: '新建文章' }, { itemTitle: '编辑文章' }, { itemTitle: '个人信息' }]
    }
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getClkItem(val) {
      //父组件使用了淡入淡出的效果，this.$parent.showM/commitClick使用无效
      this.$emit('commitClick', val)
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
.dropdown-menu {
  margin-top: 10px;
  padding: 8px 8px; /* 盒子内边距上下为8px 左右为0 */
  border-radius: 4px; /* 盒子圆角 */
  border: 1px solid #f2f6fc; /* 边框为1px 灰色 */
  background-color: #fff; /* 背景颜色为白色 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  /* 为盒子添加阴影 */
}
</style>
