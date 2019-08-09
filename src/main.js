import Vue from 'vue'
import 'es6-promise/auto'
import VueRouter from 'vue-router'
import http from './http'
import routes from './route'
import store from './store'
import App from './view/app'
import './static/less/'
import iview from 'iview'
import VueQuillEditor from 'vue-quill-editor'
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';

import tipUtil from '@src/utils/tipUtil'
import formRuleValidator from '@src/utils/formRuleValidator'

Vue.use(VueRouter)

Vue.prototype.tipUtil = tipUtil
Vue.prototype.formRuleValidator = formRuleValidator

Vue.prototype.$axios = http
Vue.prototype.$event = new Vue()
Vue.use(iview)
Vue.use(vuescroll);
Vue.use(VueQuillEditor)
const router = new VueRouter({ // 创建路由
    mode: 'hash',
    routes
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})