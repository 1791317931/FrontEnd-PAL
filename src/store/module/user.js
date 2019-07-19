import {
  login,
  logout
} from '@/api'
import TipUtil from '@/libs/TipUtil'
import CodeType from '@/config/CodeType'
import router from '@/router/'

const setUserInfo = (commit, user) => {
  commit('setUserId', user.userSn)
  commit('setUserName', user.userName)
  commit('isSuper', user.isSuper)
  commit('setToken', user.bearer)
  commit('setHasGetInfo', true)
}

export default {
  state: {
    userName: '',
    userId: '',
    isSuper: 0,
    avatorImgPath: '',
    token: '',
    access: '',
    hasGetInfo: false
  },
  mutations: {
    setAvator(state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setUserId(state, id) {
      state.userId = id
    },
    setUserName(state, name) {
      state.userName = name
    },
    isSuper(state, isSuper) {
      state.isSuper = isSuper
    },
    setAccess(state, access) {
      state.access = access
    },
    setToken(state, token) {
      state.token = token
    },
    removeToken(state) {
      state.token = null
    },
    setHasGetInfo(state, status) {
      state.hasGetInfo = status
    }
  },
  actions: {
    // 登录
    handleLogin({ commit }, { userName, password, isSuper }) {
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        login({
          userName,
          password,
          isSuper
        }).then(res => {
          let code = res.code
          if (CodeType.isSuccess(code)) {
            setUserInfo(commit, res.data)
            setOssCdn()
            resolve(res)
          } else {
            if (code === '30001') {
              TipUtil.error('用户名或密码错误')
            } else {
              TipUtil.errorCode(code)
            }
            reject()
          }
        })
          .catch(err => {
            reject(err)
          })
      })
    },
    // 退出登录
    handleLogOut({ state, commit }) {
      commit('setUserId', '')
      commit('setUserName', '')
      commit('isSuper', '')
      commit('removeToken')
      commit('setHasGetInfo', false)

      router.push({
        name: 'login'
      })
      logout(state.token)
    }
  }
}
