import Vue from 'vue'
import 'es6-promise/auto'
import VueRouter from 'vue-router'
import http from './http'
import routes from './route'
import store from './store'
import App from './view/app'
import './static/less/'

Vue.use(VueRouter)

Vue.prototype.$axios = http
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