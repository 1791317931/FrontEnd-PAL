import axios from 'axios'
import store from '../store'
import { getToken } from '../utils/auth'
import tipUtil from '@src/utils/tipUtil'

const BASE_URL = 'http://localhost:8081'
axios.defaults.timeout = 5000 * 4
axios.interceptors.request.use(
    config => {
        config.headers['rapper-device-type'] = 'pc'
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
        if (response.status == 200) {
            let data = response.data;
            let code = data.code

            if (!code) {
                return Promise.resolve(data)
            }
            
            if (code == 401) {
              // util.toLogin();
            } else {
              tipUtil.error(data.message)
              return Promise.reject(response);
            }
        } else {
            tipUtil.error(response.data.message)
            return Promise.reject(response);
        }
    },
    error => {
        if (error.code == 'ECONNABORTED') {
            tipUtil.error('连接超时');
        } else if (error.response && error.response.status == 504) {
            tipUtil.error('连接超时');
        } else if (util.isOnLine()) {
            tipUtil.error('请检测网络连接');
        }
    }
)

export default axios