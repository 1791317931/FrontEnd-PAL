let CodeMap = {
  1006: '文件尺寸过大',
  10104: '用户名或密码错误',
  1003: '搜索条件-用户Id不能为空',
  1104: '数据不存在',
  1111: '您没有登录或登录已失效，请重新登录',
  20101: '权重值错误',
  20102: '查询文章关键字错误',
  20201: '修改的限制人数小于当前已参与人数',
  30001: '用户不存在',
  30003: '用户被冻结或未启用',
  30004: '用户的角色不匹配',
}

let TipUtil = {
  success(msg = '操作成功', duration = 2) {
    iView.Message.success({
      content: msg,
      duration
    })
  },
  warning(msg = '服务器异常', duration = 3) {
    iView.Notice.warning({
      title: '错误提示',
      desc: msg,
      duration
    })
  },
  ossError(duration = 3) {
    iView.Notice.error({
      title: 'OSS 服务异常',
      desc: '',
      duration
    })
  },
  accountError(duration = 3) {
    iView.Notice.error({
      title: 'Account 服务异常',
      desc: '',
      duration
    })
  },
  networkError(duration = 3) {
    iView.Notice.error({
      title: '网络异常',
      desc: '',
      duration
    })
  },
  error(msg = '',title = '服务器异常', duration = 5) {
    iView.Notice.error({
      title: title,
      desc: msg,
      duration
    })
  },
  errorCode(code, duration = 5) {
    let desc = CodeMap[code] || `错误码：${code}`
    iView.Notice.error({
      title: '服务器异常',
      desc,
      duration
    })
  }
}

export default TipUtil
