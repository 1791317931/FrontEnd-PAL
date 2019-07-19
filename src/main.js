// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import '@/assets/less/common.less'
import '@/assets/icons/iconfont.css'

import CommonUtil from '@/libs/CommonUtil'
import ObjectUtil from '@/libs/ObjectUtil'
import DateUtil from '@/libs/DateUtil'
import PathUtil from '@/libs/PathUtil'
import TransformUtil from '@/libs/TransformUtil'
import TipUtil from '@/libs/TipUtil'
import FormRuleValidator from '@/libs/FormRuleValidator'
import * as api from '@/api'
import CodeType from '@/config/CodeType'

window.iView = iView
Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

/**
 * @description 注册admin内置插件
 */
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
ObjectUtil.install(Vue)
FormRuleValidator.install(Vue)
DateUtil.install(Vue)
Vue.prototype.util = CommonUtil
Vue.prototype.pathUtil = PathUtil
Vue.prototype.tipUtil = TipUtil
// Vue.prototype.tableUtil = TableUtil
Vue.prototype.api = api
Vue.prototype.codeType = CodeType
Vue.prototype.transformUtil = TransformUtil

/**
 * 注册指令
 */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
