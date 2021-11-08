<template>
  <div class="Child1">
    <el-divider></el-divider>
    <h5>这里是Child1</h5>

    <el-button @click="runProps">使用Props</el-button>
    <el-button @click="runFather">使用this.$emit方法</el-button>

    <div style="margin:12px 0 ">
      <span>Props传的值：</span>
      <div v-if="showProps">
        <span v-html="sendObj.name"></span>
        <span v-html="sendNumber"></span>
      </div>
    </div>
    <el-button @click="useParent">使用 $parent </el-button>
    <el-button @click="sendToBrother">使用Bus给兄弟组件传值</el-button>
    <h5 v-html="'我是Child1，我爹传来的值：' + parentValue"></h5>
  </div>
</template>
<script>
import Bus from '@/utils/Bus.js'
export default {
  name: 'Child1',
  props: {
    /* 函数 */
    fatherMethod: {
      type: Function, //String、Object、Array等原生构造函数中的一种 、 自定义构造函数 、 这些组成数组
      default: null, //默认值，如果 prop 没有被传入，则换做用这个值
      required: false //定义该 prop 是否是必填项（如果是true，但没有传，控制台会报警告）
    },
    /* 数字 */
    sendNumber: {
      type: Number,
      default: 0
    },
    /* 字符串 */
    sendObj: {
      type: Object,
      default: {}
    }
  },
  components: {},
  provide() {
    return {
      brotherVal: '我是Child1'
    }
  },

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
    return {
      showProps: false //是否显示父组件传的值
    }
  },
  methods: {
    //使用props传值
    runProps() {
      this.showProps = true
      this.fatherMethod()
    },

    //运行父组件的方法
    runFather() {
      this.$emit('isUseFatherMet', true)
    },

    //父组件会调用这个方法
    showIsUse(val) {
      alert('这里是Child1，是' + val + '调用的这个方法')
    },
    useParent() {
      this.$parent.isUseFatherMet('是的，传过来了，而且我用了$parent')
    },

    //给兄弟组件传值
    sendToBrother() {
      Bus.emit('toBrotherVal', '我是传向兄弟组件的值')
    }
  }
}
</script>
