let ObjectUtil = {
  install(vue) {
    vue.prototype.objectUtil = ObjectUtil
  },
  // 深度拷贝
  copyObject(obj) {
    if (!obj) {
      return null
    }

    return JSON.parse(JSON.stringify(obj))
  },
}

export default ObjectUtil
