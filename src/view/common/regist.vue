<template>
    <div class="regist-container">
        <div class="inner">
          <div class="title">账号注册</div>
          <div class="close"></div>
          <Form ref="edit-form" :model="form" :label-width="0" :rules="formRule" class="form">
            <FormItem class="row" prop="account">
              <div class="row-title">账号</div>
              <div class="row-content account-container">
                <Input v-model="form.account" placeholder="请输入手机号" />
                <span class="account-prefix">+86</span>
              </div>
            </FormItem>
            <FormItem class="row" prop="imgCode">
              <div class="row-title">图形验证码</div>
              <div class="row-content verify-container">
                <Input v-model="form.imgCode" placeholder="输入图形验证码" />
                <img class="verify-code-btn" src="@static/images/banner.png" title="点击刷新" @click="getImgCode"/>
              </div>
            </FormItem>
            <FormItem class="row" prop="verifyCode">
              <div class="row-title">手机验证码</div>
              <div class="row-content verify-container">
                <Input v-model="form.verifyCode" placeholder="输入手机验证码" />
                <Button type="primary" class="verify-code-btn" @click="getVerifyCode">获取验证码</Button>
              </div>
            </FormItem>
            <FormItem class="row" prop="password">
              <div class="row-title">密码</div>
              <div class="row-content">
                <Input v-model="form.password" type="password" placeholder="请输入密码" />
              </div>
            </FormItem>
            <FormItem class="row" prop="confirmPassword">
              <div class="row-title">确认密码</div>
              <div class="row-content">
                <Input v-model="form.confirmPassword" type="password" placeholder="请再次确认密码" />
              </div>
            </FormItem>
            <FormItem class="row">
              <div class="row-content">
                <Checkbox v-model="agree" class="mr0">我已阅读并接受</Checkbox>
                <span class="pointer mr0">《版权声明》</span>和<span class="pointer mr0">《隐私保护》</span>
              </div>
            </FormItem>
            <div class="operation-container">
              <Button type="primary" class="regist" @click="regist">注册</Button>
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
              account: '',
              imgCode: '',
              verifyCode: '',
              password: '',
              confirmPassword: ''
            },
            formRule: {
              account: Validator.getMobileRule(true),
              imgCode: Validator.getRequiredRule(),
              verifyCode: Validator.getRequiredRule(),
              password: Validator.getRequiredRule(),
              confirmPassword: Validator.getRequiredRule()
            },
            agree: true
          }
        },
        methods: {
          getImgCode() {

          },
          getVerifyCode() {

          },
          regist() {

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
            &.account-container /deep/ input {
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
            .account-prefix {
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