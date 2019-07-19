import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    previewImgUrl: ''
  },
  mutations: {
    showPreviewImg(state, url) {
      state.previewImgUrl = url
    },
  },
  actions: {
  },
  modules: {
    user
  }
})
