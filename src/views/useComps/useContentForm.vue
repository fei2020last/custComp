<!-- 使用 Content 表单纵向排版布局 -->
<template>
  <div class="useContentForm">
    <el-context :list="contentList" :result="contentItem" />
  </div>
</template>
<script>
export default {
  name: 'useContentForm',
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      contentList: [
        {
          title: '工作内容',
          require: true,
          field: 'content',
          placeholder: '请输入工作内容。如休假请填休假（240字以内）',
          renderType: 'textarea',
          maxLength: '240'
        },
        {
          title: '时长',
          require: true,
          field: 'time',
          placeholder: '请输入小时数，保留一位小数。如休假请填0',
          renderType: 'number'
        },
        {
          title: '备注',
          require: false,
          field: 'remark',
          placeholder: '请输入备注（240字以内）',
          renderType: 'textarea',
          maxLength: '240',
          dealWithKeyboard: true
        }
      ],
      contentItem: {
        content: '',
        time: '',
        remark: ''
      }
    }
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 在绑定元素的 attribute 或事件监听器被应用之前调用（可以访问当前this实例）
  created() {},
  // 在绑定元素的父组件挂载之前调用
  beforeMount() {},
  // 绑定元素的父组件被挂载时调用
  mounted() {
    let test = this.$datas.formatMinute('2004/09/16 20:08:00')
    console.log('hduadugsiud-------->', test)
    console.log(Object.prototype.toString.call(test))
  },
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

.useContentForm {
}
</style>
