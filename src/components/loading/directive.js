/* 自定义组件的封装使用 */
import Loading from './Loading.vue'
import createLoadingLikeDirective from './create-loading-like-directive'

const loadingDirective = createLoadingLikeDirective(Loading)

export default loadingDirective