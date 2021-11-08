<template>
  <div class="Father">
    <h5>这里是父组件</h5>
    <el-button @click="runChildMet">使用$refs</el-button>
    <el-button @click="useChildren">使用$children</el-button>
    <!-- 子组件1 -->
    <first-child
      :fatherMethod="fatherMethod"
      :sendNumber="number"
      :sendObj="obj"
      @isUseFatherMet="isUseFatherMet"
      ref="child1"
    ></first-child>
    <!-- 子组件2 -->
    <second-child></second-child>
  </div>
</template>
<script>
import child1 from './Child1'
import child2 from './Child2'
export default {
  name: 'Father',
  props: {},
  components: {
    'first-child': child1,
    'second-child': child2
  },
  // 父组件通过provide将自己的数据以对象形式传出去
  provide() {
    return {
      parentValue: '我是儿他爹，也是孙他爷'
    }
  },
  data() {
    //这里存放数据
    return {
      number: 12,
      obj: { name: '小明' }
    }
  },
  methods: {
    fatherMethod() {
      alert('这里是父组件')
    },
    //子组件调用父组件的方法
    isUseFatherMet(val) {
      alert('子组件传值过来了？' + val)
    },
    //调用子组件里的方法
    runChildMet() {
      this.$refs.child1.showIsUse('Father')
    },
    useChildren() {
      console.log('dsdsd', this.$children)
      //返回的是一个组件集合，如果你能清楚的知道子组件的顺序，你也可以使用下标来操作
      for (let i = 0; i < this.$children.length; i++) {
        this.$children[i].showIsUse()
      }
    }
  }
}
</script>
<style lang="less">
.Father {
  font-size: 18px;
  .el-divider--horizontal {
    margin: 10px 0;
  }
}
</style>
