import { Modal } from 'iview'

const beforeClose = {
  beforeCloseNormal: resolve => {
    Modal.confirm({
      title: '确定要关闭这一页吗',
      onOk: () => {
        resolve(true)
      },
      onCancel: () => {
        resolve(false)
      }
    })
  }
}

export default beforeClose
