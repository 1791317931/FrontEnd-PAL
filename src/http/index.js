import axios from 'axios'
import store from '../store'
import { getToken } from '../utils/auth'

const BASE_URL = 'http://localhost:8081'
axios.defaults.timeout = 5000 * 4
axios.interceptors.request.use(
    config => {
        config.withCredentials = true
        let url = config.url

        if (!/[http|https]:\/\//gi.test(url)) {
            if (__ENV__ === 'development') {
                config.url = BASE_URL + url
            } else {
                config.url = `${window.location.protocol}//${window.location.host}/${url}`
            }
        }
        
        // 如果token存在自动加入在url后面
        if (store.getters.getToken) {
            config.url += `${config.url.indexOf('?') != -1 ? "?" : '&'}token=${getToken()}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default axios
