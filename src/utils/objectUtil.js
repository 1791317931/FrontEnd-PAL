export default {
  // 深度拷贝
  copyObject(obj) {
    if (!obj) {
      return null
    }

    return JSON.parse(JSON.stringify(obj))
  },

  /**
   * @description 深拷贝数组、对象、对象数组
   * @param {Object} obj 被拷贝的
   * @returns {Object}
   */
  deepCopy(obj) {
    let objType = Object.prototype.toString.call(obj)
    if (objType === '[object Array]' || objType === '[object Object]') {
      let temp = objType === '[object Array]' ? [] : {}
      for (let k in obj) {
        temp[k] = this.deepCopy(obj[k])
      }
      return temp
    }
    return obj
  }
}