import * as types from './mutations_types'

module.exports = {
	[types.UPDATE_USERINFO](state, user) {
		state.userInfo = user.userInfo || {}
		state.token = user.token || ''
	},

	[types.REMOVE_USERINFO](state) {
		state.userInfo = {}
		state.token = ''
	}
}
