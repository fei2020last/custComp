<!-- 孙子组件 -->
<template>
  <div class="GrandSon">
    <div style="text-align:center">这里是孙子的地界，我在Child2里</div>
    <h5 v-html="'我爷爷传来的值：' + parentValue"></h5>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'GrandSon',
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  inject: {
    // 使用一个默认值使其变成可选项
    parentValue: {
      // 健名
      from: 'parentValue', // 来源
      default: '000' // 默认值( vue2.5.0++ )
    }
  },
  data() {
    //这里存放数据
    return {}
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {},
  mounted() {}
}
</script>
