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
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

import * as api from '@src/api/'

import tipUtil from '@src/utils/tipUtil'
import objectUtil from '@src/utils/objectUtil'
import formRuleValidator from '@src/utils/formRuleValidator'

window.api = api
Vue.use(VueRouter)

Vue.prototype.objectUtil = objectUtil
Vue.prototype.tipUtil = tipUtil
Vue.prototype.formRuleValidator = formRuleValidator

Vue.prototype.$axios = http
Vue.prototype.$event = new Vue()
Vue.use(iview)
Vue.use(vuescroll);
Vue.use(VueQuillEditor)
Vue.use(VideoPlayer)
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