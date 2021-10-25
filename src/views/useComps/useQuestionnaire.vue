<!-- 使用问卷调查组件 -->
<template>
  <div class="useQuestionnaire">
    <el-questionnaire
      :objSource="displayObj"
      :dataSource="dataSource"
      :load="isload"
      :item="item"
      :isDisabled="isDisabled"
      :isPlaceholder="isPlaceholder"
      :btnText="btnText"
    />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'useQuestionnaire',
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      item: { name: '问卷调查', status: 'edit' }, //包含问卷名称以及是反显状态还是编辑状态
      isDisabled: false, //是否禁用
      isload: false, //初始加载的loading图
      isPlaceholder: '', //是否显示提示文字
      //题目的数据源
      dataSource: [
        {
          title: '一、基本情况',
          shortOption: [
            {
              label: '姓名',
              paramStr: 'name',
              placeholder: '请输入姓名',
              value: '',
              errorMsg: '请输入姓名'
            },
            {
              label: '电话',
              paramStr: 'mobile',
              placeholder: '请输入电话',
              value: '',
              errorMsg: '请输入电话'
            }
          ],
          isChildAnswer: '1',
          value: '1'
        },
        {
          title: '二、工作情况',
          shortOption: [],
          choiceOption: [
            {
              value: [],
              paramStr: 'gradate',
              title: '工作几年？',
              type: 'checkbox',
              list: ['1年-3年', '3年-5年', '5年以上'],
              errorMsg: '请选择工作年限，如果选择了其他,请填写'
            },
            {
              value: '',
              paramStr: 'job',
              isOther: true,
              title: '从事什么职业',
              otherValue: '',
              list: ['前端开发', '后端开发', '测试', '产品经理'],
              errorMsg: '请选择所从事的职业'
            }
          ],
          isChildAnswer: '1',
          value: '1'
        },
        {
          title: '三、其他情况',
          shortOption: [],
          choiceOption: [
            {
              value: '',
              paramStr: 'fruit',
              title: '是否喜欢吃水果',
              otherValue: '',
              isChildAnswer: '是',
              list: ['是', '否'],
              errorMsg: '请选择是否喜欢吃水果',
              shortOption: [
                {
                  label: '最喜欢的水果种类',
                  paramStr: 'fruit_kind',
                  placeholder: '请输入最喜欢的水果种类',
                  value: '',
                  errorMsg: '请输入最喜欢的水果种类'
                }
              ],
              choiceOption: [
                {
                  value: '',
                  paramStr: 'fruit_link',
                  title: '喜欢吃的水果',
                  otherValue: '',
                  list: ['苹果', '香蕉', '梨子'],
                  errorMsg: '请选择喜欢吃的水果'
                }
              ]
            },
            {
              value: [],
              type: 'checkbox',
              paramStr: 'sport',
              title: '喜欢什么运动',
              isOther: true,
              otherValue: '',
              list: ['篮球', '足球', '羽毛球'],
              errorMsg: '请选择喜欢的运动'
            }
          ],
          isChildAnswer: '1',
          value: '1'
        }
      ],
      //反显答案的数据源
      displayObj: {},
      btnText: '提交' //提交的按钮文字
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
  mounted() {},
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

.useQuestionnaire {
}
</style>
