<template>
  <div class="Child2">
    <el-divider></el-divider>
    <h5>这里是Child2</h5>
    <h5 v-html="'我是Child2,我爹传来的值：' + parentValue"></h5>
    <grond-son></grond-son>
    <div>----------------------------</div>
    <h5 v-html="brotherVal"></h5>
    <div style="font-size:15px;padding:5px;margin-bottom:20px">
      很显然，上面兄弟组件使用 provide/inject
      传值没有传过来，因为官方说的是在组件之间存在上下有关系才会生效
    </div>
  </div>
</template>
<script>
import Bus from '@/utils/Bus.js'
import grondSon from './GrandSon.vue'
export default {
  name: 'Child2',
  props: {},
  components: {
    'grond-son': grondSon
  },
  data() {
    //这里存放数据
    return {}
  },
  inject: {
    // 使用一个默认值使其变成可选项
    parentValue: {
      // 健名
      from: 'parentValue', // 来源
      default: '000' // 默认值( vue2.5.0++ )
    },
    brotherVal: {
      from: 'brotherVal',
      default: 'Child222'
    }
  },
  methods: {},
  mounted() {
    Bus.on('toBrotherVal', (val) => {
      alert('这里是Child2，传来的值：' + val)
    })
  },

  unmounted() {
    //移除toBrotherVal
    Bus.off('toBrotherVal')
  }
}
</script>
