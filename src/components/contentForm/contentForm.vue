<!--  Content 表单纵向排版布局 -->
<template>
  <div class="contentForm">
    <div class="conItem" v-for="item in list">
      <div class="cm-title">
        <span class="cm-red" v-if="item.require">*</span>
        <span
          :class="[
            'fontTitle',
            // 聚焦时的样式
            focusText == item.field ? 'edit-focus-text' : '',
            !item.require ? 'cm-ml-02' : ''
          ]"
          >{{ item.title }}</span
        >
      </div>

      <!-- 数字类型的输入框 -->
      <el-input
        v-if="item.renderType === 'number'"
        @focus="changeStyle(item)"
        type="text"
        @input.native="changeNumber"
        :placeholder="item.placeholder"
        class="edit-input"
        v-model="result[item.field]"
      ></el-input>

      <!-- 其他输入框 -->
      <el-input
        :type="item.renderType"
        v-else
        @focus="changeStyle(item)"
        :autosize="{ minRows: 2, maxRows: 4 }"
        :maxlength="item.maxLength"
        class="edit-input"
        :placeholder="item.placeholder"
        rows="2"
        v-model="result[item.field]"
      >
      </el-input>

      <el-divider></el-divider>
    </div>
    <div class="cm-flex">
      <div @click="goBack()" class="cm-btn-back">
        <el-button type="primary">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'contentForm',
  props: {
    list: {
      type: Array,
      default: function() {
        return []
      }
    },
    result: {
      type: Object,
      default: {}
    }
  },

  components: {},
  data() {
    //这里存放数据
    return {
      focusText: ''
    }
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changeNumber({ target }) {
      //此为数字输入框，控制非数字输入
      target.value = target.value.match(/^\d*(\.?\d{0,1})/g)[0] || null
    },
    changeStyle(item) {
      //聚焦时改变label样式
      this.focusText = item.field
      let isAndroid = this.$datas.isAndroid()
      //避免安卓手机输入法弹出框挡住输入框
      if (item.dealWithKeyboard && isAndroid) {
        document.body.style.height = document.body.clientHeight + 100 + 'px'
      }
    },
    goBack() {
      this.$emit('on-back', '')
    }
  },
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 在绑定元素的 attribute 或事件监听器被应用之前调用（可以访问当前this实例）
  created() {},
  // 在绑定元素的父组件挂载之前调用
  beforeMount() {},
  // 绑定元素的父组件被挂载时调用
  mounted() {
    //为了适应苹果浏览器初始时展现多行状态。
    setTimeout(() => {
      console.log(111)
      this.$datas.autoTextarea()
    }, 100)
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
.contentForm {
  .conItem {
    text-align: left;
    .cm-title {
    }
    .cm-red {
      color: red;
    }
    .fontTitle {
      font-size: 16px;
    }
    .edit-focus-text {
      color: #3296fa;
      font-size: 16px;
    }
    .el-input {
      font-size: 16px;
    }

    //隐藏边框
    .el-input__inner,
    .el-textarea__inner {
      border: none;
      line-height: 2.5;
    }
    .el-divider--horizontal {
      margin: 10px 0;
    }
  }
  .cm-flex {
    display: flex;
    margin-top: 1rem;
    .cm-btn-back {
      flex: 1;
    }
  }
}
</style>
