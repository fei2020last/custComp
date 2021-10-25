<!-- 用于填空题 -->
<template>
  <div class="List">
    <div class="list-bg">
      <div class="cm-flex cm-fw-bold" v-if="!item.isArea">
        <label for=""
          ><span class="cm-c-red" v-if="item.errorMsg"> * </span>
          {{ item.label }}
        </label>
        <input
          v-model="item.value"
          :placeholder="isPlaceholder != '无' ? item.placeholder : isPlaceholder"
          class="list-input"
          :disabled="disabled"
        />
      </div>

      <div class="cm-fw-bold" v-if="item.isArea">
        <div class="cm-pt-10">
          <span class="cm-c-red" v-if="item.errorMsg"> * </span>{{ item.label }}
        </div>

        <textarea
          v-model="item.value"
          maxlength="500"
          :placeholder="isPlaceholder != '无' ? item.placeholder : isPlaceholder"
          :class="
            disabled == 'disabled'
              ? 'list-textarea-disabled'
              : item.value != ''
              ? 'list-textarea-value'
              : 'list-textarea'
          "
          :disabled="disabled"
        >
        </textarea>

        <el-alert
          v-if="item.value == '' && isShow && item.errorMsg"
          :title="item.errorMsg"
          type="error"
          show-icon
          effect="light"
        >
        </el-alert>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
  data() {
    return {}
  },
  props: {
    item: {
      type: Object,
      default: {}
    },
    isShow: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isPlaceholder: {
      type: String,
      default: ''
    }
  },
  methods: {},
  created() {},
  // 在绑定元素的父组件挂载之前调用
  beforeMount() {},
  // 绑定元素的父组件被挂载时调用
  mounted() {}
}
</script>
<style lang="less">
.List {
  height: 30px;
  background: #f5f5f5;
  border-top: 1px solid #dddddd;
  .list-bg {
    padding: 0 1rem;
    font-size: 14px;
    height: 100%;
  }
  .cm-flex {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .cm-fw-bold {
    font-weight: bold;
  }
  //输入框
  .list-input {
    text-align: right;
    flex: 1;
    color: #000;
    opacity: 1;
  }
  //富文本输入框
  .list-textarea {
    color: #333;
    width: 100%;
    border: none;
    margin: 0.5rem 0;
    background: #fff;
    outline: none;
  }
  .list-textarea-value {
    color: #333;
    width: 100%;
    border: none;
    margin: 0.5rem 0;
    background: #f5f5f9;
    outline: none;
  }
  .list-textarea-disabled {
    background-color: #f5f5f5;
    color: #333;
    width: 100%;
    border: none;
    margin: 0.5rem 0;
    outline: none;
  }

  .cm-c-red {
    color: red;
  }
}
</style>
