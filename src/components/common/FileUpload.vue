<template>
  <div :style="getContainerStyle()" class="upload-container">
    <div v-if="showTitle" :style="getTitleStyle()" :class="required ? 'required' : ''" class="upload-title">{{ title }}</div>
    <div class="img-container clear">
      <div v-for="img in uploadArray" :key="img.id" class="img">
        <img v-if="img.path" :src="pathUtil.getOssImagePath(img.path)" :data-src="img.path" @error="onError" @click="toEdit(img)" >
        <div v-if="ablePreview" class="operation-container">
          <div>
            <div v-show="!img.uploading" @click="preview(img)">预览</div>
            <div v-show="currentMode !== 'readonly'" @click="toEdit(img)">上传</div>
          </div>
        </div>
        <div v-if="!img.uploading && mode !== 'readonly'" class="close" @click="close(img)">×</div>
        <img v-if="img.uploading" class="loading" src="@/assets/images/loading.gif">
      </div>
      <div :class="uploadArray.length >= maxCount || currentMode === 'readonly' ? 'hide' : ''" class="img">
        <div class="add" @click="toUpload"/>
      </div>
      <form :id="formId">
        <div v-if="validateType">
          <input :id="fileId" :accept="accept" type="file" class="hide" @change="onChange" >
        </div>
        <div v-else>
          <input :id="fileId" :accept="accept" type="file" class="hide" @change="onChange" >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import uuid from 'uuid'
import axios from 'axios'
import PathUtil from '@/libs/PathUtil'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    // 是否校验文件类型
    validateType: {
      type: Boolean,
      default: true
    },
    // 默认最多5张图片
    maxCount: {
      type: Number,
      default: 5
    },
    maxSize: {
      type: Number,
      default: 1 * 1024 * 1024
    },
    // 是否可以预览
    ablePreview: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    titleStyle: {
      type: Object,
      default: null
    },
    containerStyle: {
      type: Object,
      default: null
    },
    titleCount: {
      type: Number,
      default: 0
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: 'edit'
    },
    required: {
      type: Boolean,
      default: false
    },
    param: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    let that = this
    let idString = uuid()
    return {
      formId: `form-${idString}`,
      fileId: `file-${idString}`,
      // 待修改的图片id
      editIndex: null,
      file: '',
      form: '',
      uploadArray: that.getUploadArray(that.data),
      // 默认新增 edit readonly
      currentMode: this.mode,
      ossHost: process.env.VUE_APP_UPLOAD
    }
  },
  watch: {
    data: {
      deep: true,
      handler(newValue) {
        this.uploadArray = this.getUploadArray(newValue)
      }
    }
  },
  mounted() {
    this.form = window.document.getElementById(this.formId)
    this.file = window.document.getElementById(this.fileId)
  },
  methods: {
    onError(e) {
      let target = e.target
      target.src = this.ossHost + target.dataset.src
    },
    onChange(e) {
      let files = e.target.files
      let file = files[0]
      if (file) {
        if (this.validateType && !/^image/.test(file.type)) {
          this.tipUtil.warning('请上传图片格式的文件!')
          this.form.reset()
          return
        }

        let maxSize = this.maxSize
        // 当maxSize!=0时，需要校验
        if (maxSize && file.size > maxSize) {
          this.tipUtil.warning(`图片大小不能超过${maxSize / 1024 / 1024}M`)
          return
        }
        this.upload(file, this.editIndex)
      }
    },
    // 本地上传
    showUpload() {
      this.files = []
      this.form.reset()
      this.file.click()
    },
    preview(img) {
      this.$store.commit('showPreviewImg', PathUtil.getOssImagePath(img.path))
    },
    toEdit(img) {
      if (this.currentMode === 'readonly') {
        return
      }

      if (img.uploading) {
        this.tipUtil.warning('图片正在上传中，请稍后再操作')
        return
      }

      this.editIndex = img.id
      this.currentMode = 'edit'
      // 如果是指定的imageType，可以从图片库中选择图片
      this.showUpload()
    },
    close(img) {
      if (img.uploading) {
        this.tipUtil.warning('图片正在上传中，请稍后再操作')
        return
      }

      this.uploadArray.splice(this.uploadArray.indexOf(img), 1)
      this.toEmit()
    },
    toUpload() {
      if (this.currentMode === 'readonly') {
        return
      }

      if (this.uploadArray.length >= this.maxCount) {
        this.tipUtil.warning(`最多只能上传${this.maxCount}张图片`)
        return
      }

      this.editIndex = null
      this.currentMode = 'add'
      this.showUpload()
    },
    upload(file, id) {
      let _id = id
      let tipUtil = this.tipUtil
      if (!window.FormData) {
        tipUtil.warning('浏览器版本太低')
        return
      }

      if (!_id) {
        _id = uuid()
        this.uploadArray.push({
          id: _id,
          path: '',
          uploading: true
        })
      }

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      this.changeStatus(_id, true)
      // eslint-disable-next-line
      this.api.getOssParam().then(data => {
        if (this.$config.CodeType.isSuccess(data.code)) {
          let policyParam = data.data
          let form = new FormData()
          let path = `${policyParam.dir + uuid()}.${file.name.split('.')[1]}`
          // 优先使用oss地址上传,
          let host =  process.env.VUE_APP_UPLOAD || policyParam.host
          this.ossHost = host
          if (!policyParam) {
            tipUtil.ossError()
            this.changeStatus(_id, false)
            return
          }

          // host = host.replace(/^http:/, 'https:')
          form.append('OSSAccessKeyId', policyParam.accessKeyId)
          form.append('policy', policyParam.policy)
          form.append('signature', policyParam.signature)
          // form.append('x-oss-object-acl', 'public-read')
          form.append('key', path)
          form.append('success_action_status', '200')
          form.append('file', file)

          // OSSAccessKeyId:objdata.data.accesskey,//需要根据自己的bucket填写 详情请见oss api
          // policy: objdata.data.policy.policy,//policyBase64规定了请求的表单域的合法性
          // signature: objdata.data.policy.useKeyId, //根据Access Key Secret和policy计算的签名信息，OSS验证该签名信息从而验证该Post请求的合法性
          // success_action_status:’200′, // 让服务端返回200,不然，默认会返回204
          // key: objdata.data.folder, //文件名字，可设置路径
          // file:file

          axios.post(host, form, config).then(response => {
            if (response.status === 200) {
              let exist = false
              let array = this.uploadArray
              let img = {
                id: _id,
                path,
                uploading: false,
                // 本地上传
                fromLocal: true
              }
              for (let i = 0; i < array.length; i++) {
                let item = array[i]
                // 修改
                if (item.id === _id) {
                  this.uploadArray.splice(i, 1, img)
                  exist = true
                  break
                }
              }

              // 新增
              if (!exist) {
                this.uploadArray.push(img)
              }

              this.toEmit()
            } else {
              tipUtil.ossError()
              this.removeItem(_id)
            }
          })
            .catch(error => {
              if (error) {
                tipUtil.ossError()
              }
              this.removeItem(_id)
            })

        } else {
          tipUtil.errorCode(data.code)
          this.changeStatus(_id, false)
        }
      })
        .catch(error => {
          if (error) {
            tipUtil.ossError()
          }
          this.removeItem(_id)
        })
    },
    removeItem(id) {
      let arr = this.uploadArray
      for (let i = 0; i < arr.length; i++) {
        if (id === arr[i].id) {
          arr.splice(i, 1)
          break
        }
      }
    },

    /* pcStyle、mobileStyle */
    getTitleStyle() {
      let style = this.titleStyle
      if (style) {
        return style.pcStyle
      } else {
        let titleCount = this.titleCount
        if (!this.isMobile) {
          return {
            width: `${titleCount * 12}px`
          }
        } else {
          return {
            width: `${titleCount * 12}px`
          }
        }
      }
    },
    getContainerStyle() {
      let style = this.containerStyle
      if (style) {
        return style.pcStyle
      } else {
        let titleCount = this.titleCount
        if (!this.isMobile) {
          return {
            'padding-left': `${titleCount * 12}px`
          }
        } else {
          return {
            'padding-left': `${titleCount * 12}px`
          }
        }
      }
    },
    getUploadArray(list) {
      let array = []
      list.forEach(item => {
        array.push({
          id: uuid(),
          path: item.path,
          uploading: false
        })
      })
      return array
    },
    changeStatus(id, uploading) {
      let list = this.uploadArray
      for (let i = 0; i < list.length; i++) {
        let item = list[i]
        let path = item.path
        // 修改
        if (item.id === id) {
          this.uploadArray.splice(i, 1, {
            id,
            path,
            uploading
          })
          break
        }
      }
    },
    toEmit() {
      let newFiles = []
      this.uploadArray.forEach(item => {
        let path = item.path
        if (path) {
          newFiles.push({
            path,
            // 是否是本地上传
            fromLocal: item.fromLocal
          })
        }
      })

      this.$emit('on-result-change', newFiles, this.param)
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/theme.less';

.upload-container {
  position: relative;
  .upload-title {
    font-size: 12px;
    padding: 10px 12px 10px 0;
    position: absolute;
    text-align: right;
    left: 0;
    top: 0;
  }
  .img-container {
    min-height: 100px;
    .img {
      float: left;
      cursor: pointer;
      font-size: 20px;
      width: 100px;
      height: 100px;
      border: 1px solid #e1e3e6;
      position: relative;
      &:not(:last-child) {
        margin-right: 10px;
      }
      > img:first-child {
        width: 100%;
        height: 100%;
      }
      .operation-container {
        width: 100%;
        height: 100%;
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .7);
        font-size: 14px;
        font-weight: 400;
        z-index: 999;
        > div {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          div {
            text-align: center;
            line-height: 24px;
            color: #fff;
            cursor: pointer;
            &:hover {
              color: @info;
            }
          }
        }
      }
      .close {
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 20px;
        text-align: center;
        color: #fff;
        z-index: 1000;
        img {
          width: 10px;
          height: 10px;
          position: absolute;
          top: 5px;
          right: 5px;
        }
      }
      .loading {
        position: absolute;
        width: 30px !important;
        height: 30px !important;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
      }
      &:hover {
        .operation-container {
          display: block;
        }
        .close {
          // background: rgba(0, 0, 0, 1);
          &:hover {
            color: @error;
          }
        }
      }
      .add {
        width: 100%;
        height: 100%;
        position: relative;
        &:before {
          content: '+';
          font: 40px Arial;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>
