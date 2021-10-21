<!-- 结果页封装 -->
<template>
  <div class="Result">
    <el-image :src="resultMsg.status === 'success' ? successBg : failBg" style="width: 250px">
      <div slot="placeholder" class="image-slot">图片加载中<span class="dot">...</span></div>
    </el-image>
    <div :class="resultMsg.status === 'success' ? 'success-title' : 'fail-title'">
      {{ resultMsg.title }}
    </div>
    <div class="cm-flex">
      <div @click="cancel()" class="cm-btn-cancel">
        <el-button>{{ resultMsg.cancelText }}</el-button>
      </div>
      <div @click="submit()" class="cm-btn-submit">
        <el-button type="primary">{{ resultMsg.submitText }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//import引入的组件需要注入到对象中才能使用
export default {
  name: 'el-result',
  emits: ['on-cancel', 'on-submit'],
  props: {
    resultMsg: {
      type: Object,
      default: {}
    }
  },

  components: {},
  data() {
    //这里存放数据
    return {
      successBg: require('../../assets/img/success.png'),
      failBg: require('../../assets/img/fail.png')
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    cancel() {
      this.$emit('on-cancel', '')
    },
    submit() {
      this.$emit('on-submit', '')
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeUnmount() {}, //生命周期 - 销毁之前
  unmounted() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less">
//@import url(); 引入公共css类

.Result {
  .success-title {
    padding: 0.4rem;
    font-size: 0.35rem;
    color: #15bc83;
  }
  .fail-title {
    padding: 0.4rem;
    font-size: 0.35rem;
    color: #f25643;
  }
  //将父容器的display：flex，侧边栏大小固定后，将内容区flex：1，内容区则会自动放大占满剩余空间
  .cm-flex {
    display: flex;
    margin-top: 1rem;
    .cm-btn-cancel {
      flex: 1;
      .el-button {
        border: 1px solid #5b88f3;
      }
    }
    .cm-btn-submit {
      flex: 1;
    }
  }
}
</style>
