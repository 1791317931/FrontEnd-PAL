let PathUtil = {
  // 重写path
  getPath(url) {
    return process.env.consoleBaseUrl + url
  },
  getOssImagePath(url) {
    if(!/^http/.test(url)) {
      url = sessionStorage.getItem('ossHost') + url
    }
    return url
  }
}

export default PathUtil
