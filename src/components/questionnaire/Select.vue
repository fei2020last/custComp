<!-- 用于单选和多选 -->
<template>
  <div class="Select">
    <el-form-item class="sel-mar-10">
      <div><span class="cm-c-red" v-if="items.errorMsg">* </span>{{ items.title }}</div>
      <el-radio-group v-model="items.value" v-if="items.type != 'checkbox'" class="cm-width-full">
        <el-radio
          :label="item"
          v-for="(item, index) in items.list"
          :disabled="disabled"
          :key="index"
          class="sel-width-35"
        ></el-radio>
        <div class="cm-mb-10 cm-flex" v-if="items.isOther">
          <el-radio label="其他" class="sel-width-35" :disabled="disabled"></el-radio>
          <input
            class="sel-input"
            v-model="items.otherValue"
            :disabled="disabled"
            placeholder="请输入"
            v-if="items.value == '其他'"
          />
        </div>
        <el-alert
          v-if="
            (items.value == '' || (items.value == '其他' && !items.otherValue)) &&
              isShow &&
              items.errorMsg
          "
          :title="items.errorMsg"
          type="error"
          show-icon
          effect="light"
        >
        </el-alert>
      </el-radio-group>
      <el-checkbox-group
        v-model="items.value"
        v-if="items.type == 'checkbox'"
        class="cm-width-full sel-line-height"
      >
        <el-checkbox
          name="type"
          :disabled="disabled"
          :label="item"
          v-for="(item, index) in items.list"
          :key="index"
          class="sel-width-35"
        ></el-checkbox>
        <div class="cm-mb-10 cm-flex" v-if="items.isOther">
          <el-checkbox
            label="其他"
            :disabled="disabled"
            class="sel-width-35 sel-checkbox-mr"
          ></el-checkbox>
          <input
            class="sel-input"
            maxlength="20"
            v-model="items.otherValue"
            :disabled="disabled"
            placeholder="请输入"
            v-if="items.value && items.value != null && items.value.indexOf('其他') > -1"
          />
        </div>
        <el-alert
          v-if="
            ((items.value && items.value.length == 0) ||
              (items.value.indexOf('其他') > -1 && !items.otherValue)) &&
              isShow &&
              items.errorMsg
          "
          :title="items.errorMsg"
          type="error"
          show-icon
          effect="light"
        >
        </el-alert>
      </el-checkbox-group>
    </el-form-item>
    <slot v-if="items.value == items.isChildAnswer"></slot>
  </div>
</template>
<script>
export default {
  name: 'Select',
  data() {
    return {}
  },
  props: {
    items: {
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
    type: {
      type: String,
      default: ''
    }
  },

  created() {},
  methods: {}
}
</script>
<style lang="less">
.Select {
  .cm-flex {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .sel-width-35 {
    width: 40%;
    line-height: 40px;
  }
  .sel-checkbox-mr {
    margin-right: 30px !important;
  }
  .sel-mar-10 {
    padding: 0 1rem;
    margin-bottom: 0;
  }

  .sel-input {
    -webkit-appearance: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 1;
    outline: 0;
    height: 2rem;
    padding: 0 0.3rem;
    width: 150px;
  }
  input:disabled,
  input[disabled] {
    color: #606266;
    font-weight: 500;
    opacity: 1;
  }
  textarea:disabled,
  textarea[disabled] {
    color: #606266;
    font-weight: 500;
    opacity: 1;
  }
  .sel-line-height {
    line-height: 1;
  }
  .el-checkbox__input.is-disabled + span.el-checkbox__label {
    color: #606266 !important;
    opacity: 1;
  }
  .el-radio__input.is-disabled + span.el-radio__label {
    color: #606266 !important;
    opacity: 1;
  }
  .cm-c-red {
    color: red;
  }
}
</style>
