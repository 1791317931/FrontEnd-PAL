import axios from 'axios'
import store from '@/store/'
import TipUtil from '@/libs/TipUtil'
import CommonUtil from '@/libs/CommonUtil'
// import store from '@/store'
// import { Spin } from 'iview'

// const addErrorLog = errorInfo => {
//   const { statusText, status, request: { responseURL } } = errorInfo
//   let info = {
//     type: 'ajax',
//     code: status,
//     mes: statusText,
//     url: responseURL
//   }
//   if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
// }

/**
 * JSDoc 待补充
 */
class HttpRequest {
  // eslint-disable-next-line
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl || '',
      timeout: 10 * 1000,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return config
  }
  destroy(url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true
      // TODO: 补完 token 携带机制
      let token = CommonUtil.getToken()
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    }, error => {
      console.warn(error)
      // TODO: 消息提示？ msg.toast(error.code)
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(response => {
      this.destroy(url)
      const { data, status } = response
      if (status === 200) {
        let code = parseInt(data.code)
        if (code === 401) {
          // TODO: 权限错误处理
          store._actions.handleLogOut[0]()
        } else if (code === 1111 || code === 11001) {
          // TODO: 登录失效处理，注销？
          store._actions.handleLogOut[0]()
        } else if (code === 1000 && /account/i.test(data.description)) {
          TipUtil.accountError()
          return Promise.reject()
        } else if (code !== 200) {
          // TODO: 消息提示？ msg.toast(data.code)
        }
        return data
      } else {
        return Promise.reject(response)
      }
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      // if (!errorInfo) {
      //   const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
      //   errorInfo = {
      //     statusText,
      //     status,
      //     request: { responseURL: config.url }
      //   }
      // }
      // addErrorLog(errorInfo)

      if (errorInfo) {
        if (errorInfo.status === 401) {
          // TODO: 权限错误处理
          store._actions.handleLogOut[0]()
        } else if (errorInfo.data.hasOwnProperty('code')) {
          // TODO: 消息提示？ msg.toast(errorInfo.data.code)
          if (errorInfo.data.code === 1111) {
            // TODO: 登录失效处理，注销？
            store._actions.handleLogOut[0]()
          }
        } else {
          // TODO: 消息提示？ msg.toast(errorInfo.status)
        }
      } else if (error.code === 'ECONNABORTED') {
        // TODO: 消息提示？ msg.toast('0408')
        if (/timeout/.test(error.message)) {
          TipUtil.error('请求超时')
          return Promise.reject()
        }
      } else if (error.message === 'Network Error') {
        TipUtil.networkError()
        return Promise.reject()
      } else {
        // TODO: 消息提示？ msg.toast(error.code)
      }
      console.error(error)
      return Promise.reject(error)
    })
  }
  request(options) {
    const instance = axios.create()
    let _options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, _options.url)
    return instance(_options)
  }
}
export default HttpRequest
