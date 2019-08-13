<template>
    <div class="regist-container">
        <div class="inner">
          <div class="title">账号注册</div>
          <div class="close"></div>
          <Form ref="edit-form" :model="form" @submit.prevent="onSubmit" :label-width="0" :rules="formRule" class="form">
            <FormItem class="row" prop="mobile">
              <div class="row-title">账号</div>
              <div class="row-content mobile-container">
                <Input v-model="form.mobile" placeholder="请输入手机号" />
                <span class="mobile-prefix">+86</span>
              </div>
            </FormItem>
            <FormItem class="row" prop="imgCode">
              <div class="row-title">图形验证码</div>
              <div class="row-content verify-container">
                <Input v-model="imgCode" placeholder="输入图形验证码" :maxlength="5" />
                <img class="verify-code-btn" :src="imgUrl" title="点击刷新" @click="getImgCode"/>
              </div>
            </FormItem>
            <FormItem class="row" prop="code">
              <div class="row-title">手机验证码</div>
              <div class="row-content verify-container">
                <Input v-model="form.code" placeholder="输入手机验证码" :maxlength="4" />
                <Button type="primary" class="verify-code-btn" @click="getVerifyCode">{{loadingSmsCode ? smsCodeWaitTime + '秒后获取' : '获取验证码'}}</Button>
              </div>
            </FormItem>
            <FormItem class="row" prop="password">
              <div class="row-title">密码</div>
              <div class="row-content">
                <Input v-model="form.password" type="password" placeholder="请输入密码" />
              </div>
            </FormItem>
            <FormItem class="row" prop="password_confirmation">
              <div class="row-title">确认密码</div>
              <div class="row-content">
                <Input v-model="form.password_confirmation" type="password" placeholder="请再次确认密码" />
              </div>
            </FormItem>
            <FormItem class="row">
              <div class="row-content">
                <Checkbox v-model="agree" class="mr0">我已阅读并接受</Checkbox>
                <span class="pointer mr0">《版权声明》</span>和<span class="pointer mr0">《隐私保护》</span>
              </div>
            </FormItem>
            <div class="operation-container">
              <Button :loading="submitting" type="primary" class="regist" @click="regist">注册</Button>
            </div>
            <div class="more-operation">
              <span>已有账号 |</span><span>马上登录</span>
            </div>
          </Form>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      let Validator = this.formRuleValidator.Validator
      return {
        form: {
          mobile: '',
          code: '',
          password: '',
          password_confirmation: ''
        },
        formRule: {
          mobile: Validator.getMobileRule(true),
          code: Validator.getRequiredRule(),
          password: Validator.getRequiredRule(),
          password_confirmation: Validator.getRequiredRule()
        },
        captchaUuid: '',
        imgUrl: '',
        imgCode: '',
        loadingSmsCode: false,
        // 短信获取间隔（秒）
        SMSCODE_MAX_WAIT_TIME: 120,
        smsCodeWaitTime: 0,
        submitting: false,
        agree: true
      }
    },
    beforeMount() {
      this.getImgCode()
    },
    methods: {
      getImgCode() {
        api.getCaptcha({
          scene: 'default'
        }).then(res => {
          this.imgUrl = res.captchaUrl
          this.captchaUuid = res.captchaUuid
        })
      },
      onSubmit() {
        return false
      },
      getVerifyCode() {
        if (this.loadingSmsCode) {
          return
        }

        let mobile = this.form.mobile.trim()
        if (!mobile) {
          this.tipUtil.warning('请输入手机号')
          return
        } else if (!this.formRuleValidator.isMobile(mobile)) {
          this.tipUtil.warning('请输入正确格式的手机号')
          return
        }

        let imgCode = this.imgCode.trim()
        if (!imgCode) {
          this.tipUtil.warning('请输入图形验证码')
          return
        }

        this.loadingSmsCode = true
        this.smsCodeWaitTime = this.SMSCODE_MAX_WAIT_TIME

        let fn = () => {
          if (this.loadingSmsCode && this.smsCodeWaitTime > 1) {
            --this.smsCodeWaitTime
            setTimeout(() => {
              fn()
            }, 1000)
          } else {
            this.loadingSmsCode = false
          }
        }
        fn()

        api.getSmscode({
          phoneNumber: mobile,
          captchaUuid: this.captchaUuid,
          captcha: imgCode,
          scene: 'register'
        }).then(res => {
          this.form.code = res.codeUuid
          this.loadingSmsCode = false
        }).catch(() => {
          this.loadingSmsCode = false
        })
      },
      regist() {
        this.$refs['edit-form'].validate(valid => {
          if (valid) {
            debugger
            let form = this.objectUtil.copyObject(this.form)
            let tipUtil = this.tipUtil

            if (form.password.length < 8) {
              tipUtil.warning('密码长度至少8位')
              return
            }

            if (form.password != form.password_confirmation) {
              tipUtil.warning('密码与确认密码不一致，请重新输入')
              return
            }

            form.captchaUuid = this.captchaUuid
            this.submitting = true
            api.regist(form).then(res => {
              this.submitting = false
              tipUtil.success('注册成功')
            }).catch(() => {
              this.submitting = false
            })
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .mr0 {margin-right: 0 !important;}
  .pointer {cursor: pointer;}
  .regist-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .4);
    z-index: 1000;
    .inner {
      width: 684px;
      max-height: 80%;
      overflow-y: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      padding: 30px 0;
      .title {
        padding: 0 30px;
        font-size:24px;
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(16,16,16,1);
        position: relative;
      }
      .close {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
        &:before {
          content: '';
          width: 27px;
          height: 2px;
          border-radius: 1px;
          background: #000;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotateZ(45deg);
        }
        &:after {
          content: '';
          width: 27px;
          height: 2px;
          border-radius: 1px;
          background: #000;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotateZ(-45deg);
        }
      }
      .form {
        padding: 50px 142px 74px;
        .row {
          margin-bottom: 20px !important;
          .row-title {
            margin-bottom: 10px;
            font-size:16px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(16,16,16,1);
            line-height:22px;
          }
          .row-content {
            position: relative;
            > div {
              flex: 1;
            }
            &.mobile-container /deep/ input {
              padding-left: 75px;
            }
            &.verify-container {
              display: flex;
              .verify-code-btn {
                width: 145px;
                height: 44px;
                margin-left: 10px;
                cursor: pointer;
              }
            }
            & /deep/ input {
              padding-left: 20px;
              height: 44px;
              line-height: 44px;
              background:rgba(244,244,244,1);
              border-radius:4px;
            }
            .mobile-prefix {
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 57px;
              font-size:14px;
              font-family:PingFangSC-Regular;
              font-weight:400;
              color:rgba(60,60,60,1);
              text-align: center;
              &:after {
                content: '|';
                color: #979797;
                position: absolute;
                right: 0;
              }
            }
          }
        }
        .operation-container {
          margin-top: 10px;
          .regist {
            width: 100%;
            height: 50px;
            font-size: 14px;
          }
        }
        .more-operation {
          margin-top: 20px;
          text-align: center;
          span {
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(180,180,180,1);
            line-height:20px;
            &:last-child {
              cursor: pointer;
              margin-left: 5px;
              color: #2AD49C;
            }
          }
        }
      }
    }
  }
</style>