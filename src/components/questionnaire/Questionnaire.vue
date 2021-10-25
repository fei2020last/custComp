<!-- 问卷调查组件 -->
<template>
  <div class="Questionnaire">
    <div
      v-loading="load"
      element-loading-text="提交中,请稍候..."
      element-loading-spinner="el-icon-loading"
      v-loading.fullscreen.lock="load"
    >
      <!-- 标题 -->
      <div class="quesTitle">{{ item.name }}</div>
      <!-- 主体部分 -->
      <el-form>
        <div v-for="(itemOption, index) in dataSource" :key="index" style="margin-bottom: 12px">
          <div class="quesItemTitle">{{ itemOption.title }}</div>
          <el-divider :style="index == 0 ? 'margin: 5px 0;visibility: hidden' : ''"></el-divider>
          <el-list
            :isPlaceholder="isPlaceholder"
            :item="item"
            :disabled="isDisabled"
            :isShow="isShow"
            v-for="(item, index) in itemOption.shortOption"
            :key="item.label"
          ></el-list>

          <el-select
            :items="list"
            :disabled="isDisabled"
            :isShow="isShow"
            :key="index"
            v-for="(list, index) in itemOption.choiceOption"
          >
            <div class="expand-style">
              <el-list
                :item="item"
                :disabled="isDisabled"
                :isPlaceholder="isPlaceholder"
                :isShow="isShow"
                v-for="(item, index) in list.shortOption"
                :key="item.label"
              ></el-list>
              <el-select
                :items="list"
                :disabled="isDisabled"
                :isPlaceholder="isPlaceholder"
                :isShow="isShow"
                :key="index"
                v-for="(list, index) in list.choiceOption"
              ></el-select>
            </div>
          </el-select>
        </div>

        <el-form-item class="cm-fw-bold">
          <label class="cm-ml-10">其他建议 </label>
          <div class="cm-flex flex-fill">
            <textarea
              ref="textarea"
              maxlength="500"
              name=""
              id=""
              :placeholder="isPlaceholder != '无' ? '请输入您的建议' : isPlaceholder"
              v-model="other_advice"
              class="hos-textarea"
              :disabled="isDisabled"
            ></textarea>
          </div>
        </el-form-item>
        <div class="hot-btns">
          <div @click="submitForm()" class="cm-btn-cancel" v-if="item.status == 'edit'">
            <el-button>{{ btnText }}</el-button>
          </div>
          <div @click="goBack()" class="cm-btn-submit">
            <el-button type="primary">退出</el-button>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import select from './Select.vue'
import list from './List.vue'
export default {
  name: 'el-questionnaire',
  props: {
    //题目的数据源
    dataSource: {
      type: Array,
      default: []
    },
    //反显答案的数据源
    objSource: {
      type: Object,
      default: {}
    },
    //初始加载的loading图
    load: {
      type: Boolean,
      default: true
    },
    //包含问卷名称以及是反显状态还是编辑状态
    item: {
      type: Object,
      default: {}
    },
    //是否禁用
    isDisabled: {
      type: Boolean,
      default: false
    },
    //是否显示提示文字
    isPlaceholder: {
      type: String,
      default: ''
    },
    //提交的按钮文字
    btnText: {
      type: String,
      default: ''
    }
  },
  //import引入的组件需要注入到对象中才能使用
  components: {
    'el-select': select,
    'el-list': list
  },
  data() {
    //这里存放数据
    return {
      other_advice: '',
      isShow: false
    }
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //提交
    submitForm() {
      this.isShow = true
      var arr = []
      var obj = {}
      this.generate(this.dataSource, {}, arr, obj)
      obj = Object.assign(obj, { other_advice: this.other_advice })
      console.log(obj)
      this.$parent.submit(arr, obj)
    },
    goBack() {
      // history.go(-1)
      this.$router.push({ name: 'index' })
    },
    //将数据源轮循
    generate: (list, displayObj, arr, obj) => {
      list.map((item) => {
        if (arr && obj) {
          if (item && item.value !== undefined && item && item.paramStr !== undefined) {
            //多选如果有其他，将其他数值添加进去
            let value
            //其他值不等于空并且不是填空
            if (item.otherValue != '' && item.otherValue != undefined && !item.label) {
              if (item.type == 'checkbox') {
                if (!item.value.includes(item.otherValue)) {
                  item.value.push(item.otherValue)
                }
                //有其他值反选值，但是其他label没有勾选，就将其他值去掉
                if (item.value.includes(item.otherValue) && !item.value.includes('其他')) {
                  item.value = item.value.filter((item1) => {
                    return item1 != item.otherValue
                  })
                }
                value = item.value
              } else {
                if (item.otherValue && item.value == '其他') {
                  value = item.otherValue
                }
              }
            } else {
              console.log(item)
              value = item.value
              //如果其他值为空，但是选择了“其他”，则需要校验
              if (item.value.indexOf('其他') > -1 || item.value == '其他') {
                arr.push({ value: item.otherValue })
              }
            }
            obj = Object.assign(obj, { [item.paramStr]: value })
            if (item.errorMsg) {
              arr.push({ value: item.value })
            }
          }
          if (item.isChildAnswer && item.value == item.isChildAnswer) {
            if (item.shortOption && item.shortOption.length > 0) {
              this.generate(item.shortOption, {}, arr, obj)
            }
            if (item.choiceOption && item.choiceOption.length > 0) {
              this.generate(item.choiceOption, {}, arr, obj)
            }
          }
        } else {
          if (item && item.value !== undefined && item && item.paramStr !== undefined) {
            if (displayObj[item.paramStr]) {
              if (
                item.type == 'checkbox' &&
                displayObj[item.paramStr] &&
                displayObj[item.paramStr].length > 0
              ) {
                item.value = displayObj[item.paramStr]
                let allList = item.list.concat(displayObj[item.paramStr])
                item.value.map((res) => {
                  if (item.list.indexOf(res) < 0) {
                    item.isOther = true
                    if (item.otherValue != res) {
                      item.otherValue = res
                    }
                  }
                })
                //value去重
                item.value = item.value.filter((item1, index) => {
                  return item.value && item1 && item.value.indexOf(item1) == index
                })
                //如果返回的值中有与页面值不同的则添加到页面值中
                item.list = allList.filter((item1, index) => {
                  return (
                    allList.indexOf(item1) == index &&
                    item1 &&
                    item1 != item.otherValue &&
                    item1 != '其他'
                  )
                })
              } else if (item.list && item.type != 'checkbox') {
                if (item.list.indexOf(displayObj[item.paramStr]) < 0 && displayObj[item.paramStr]) {
                  item.isOther = true
                  item.value = '其他'
                  item.otherValue = displayObj[item.paramStr]
                } else {
                  item.value = displayObj[item.paramStr]
                }
              } else {
                item.value = displayObj[item.paramStr]
              }
            }
          }
          if (item.isChildAnswer && item.value == item.isChildAnswer) {
            if (item.shortOption && item.shortOption.length > 0) {
              this.generate(item.shortOption, displayObj)
            }
            if (item.choiceOption && item.choiceOption.length > 0) {
              this.generate(item.choiceOption, displayObj)
            }
          }
          if (displayObj.other_advice) {
            this.other_advice = displayObj.other_advice
          }
        }
      })
      return { obj, arr }
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
    var textarea = document.getElementsByTagName('textarea')
    //多行输入框高度自适应
    setTimeout(function() {
      for (var i = 0; i < textarea.length; i++) {
        textarea[i].style.height = textarea[i].scrollHeight + 'px'
        textarea[i].addEventListener('input', function(e) {
          e.target.style.height = 'auto'
          e.target.scrollTop = 0 //防抖动
          e.target.style.height = e.target.scrollHeight + 'px'
        })
      }
    }, 200)
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
.Questionnaire {
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  .quesTitle {
    text-align: center;
    color: #48a2ff;
  }
  //一级标题
  .quesItemTitle {
    padding: 0 15px;
  }
  .el-divider--horizontal {
    margin: 10px 0;
  }

  .expand-style {
    font-size: 0.875rem;
  }

  //将父容器的display：flex，侧边栏大小固定后，将内容区flex：1，内容区则会自动放大占满剩余空间
  .hot-btns {
    display: flex;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
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

  .hos-textarea {
    word-break: break-all;
    resize: none;
    border-radius: 0.3rem;
    outline: none;
    border: 1px solid #ddd;
    font-size: 0.8rem;
    color: #333;
  }
  .cm-fw-bold {
    padding: 0 1rem;
  }
}
</style>
