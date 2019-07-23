module.exports = {
	getUserInfo(state) {
		return state.userInfo
	},
	getToken(state) {
		return state.token || ''
	}
}
