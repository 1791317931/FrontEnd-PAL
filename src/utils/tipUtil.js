import iView from 'iview'

export default {
  success(msg = '操作成功', duration = 3) {
    iView.Message.success({
      content: msg,
      duration
    })
  },
  warning(desc = '', duration = 3) {
    iView.Notice.warning({
      title: '系统提示',
      desc,
      duration
    })
  },
  error(msg = '', title = '系统提示', duration = 5) {
    iView.Notice.error({
      title: title,
      desc: msg,
      duration
    })
  }
}