<template>
  <div class="login-container">
    <div class="inner">
      <Menu mode="horizontal" :active-name="activeName" @on-select="changeMenu">
        <MenuItem name="1">账号登录</MenuItem>
        <MenuItem name="2">免密登录</MenuItem>
      </Menu>
      <div class="close" @click="close"></div>
      <Form ref="edit-form" :model="form1" :label-width="0" :rules="formRule1" class="form">
        <FormItem class="row" prop="account">
          <div class="row-title">账号</div>
          <div class="row-content account-container">
            <Input v-model="form1.account" placeholder="输入手机号" />
            <span class="account-prefix">+86</span>
          </div>
        </FormItem>
        <FormItem v-if="activeName == '1'" class="row" prop="password">
          <div class="row-title">密码</div>
          <div class="row-content">
            <Input v-model="form1.password" type="password" placeholder="输入密码" />
          </div>
        </FormItem>
        <FormItem v-if="activeName == '2'" class="row" prop="verifyCode">
          <div class="row-title">验证码</div>
          <div class="row-content">
            <Input v-model="form1.verifyCode" placeholder="输入验证码" />
            <Button type="primary" class="verify-code-btn" @click="getVerifyCode">获取验证码</Button>
          </div>
        </FormItem>
        <div class="operation-container">
          <Button type="primary" class="login" @click="login">登录</Button>
        </div>
        <div class="row mt20">
          <Checkbox v-model="autoLogin" class="auto-login">下次自动登录</Checkbox>
          <div class="more-operation">
            <span @click="forgetPassword">忘记密码 |</span><span @click="regist">注册</span>
          </div>
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
        form1: {
          account: '',
          password: '',
          verifyCode: ''
        },
        formRule1: {
          account: Validator.getMobileRule(true),
          password: Validator.getRequiredRule()
        },
        activeName: '1',
        autoLogin: false
      }
    },
    methods: {
      changeMenu(name) {
        let Validator = this.formRuleValidator.Validator
        if (name == '1') {
          this.formRule1 = {
            account: Validator.getMobileRule(true),
            password: Validator.getRequiredRule()
          }
        } else if (name == '2') {
          this.formRule1 = {
            account: Validator.getMobileRule(true),
            verifyCode: Validator.getRequiredRule()
          }
        }
        this.activeName = name
        this.$refs['edit-form'].resetFields()
      },
      login() {

      },
      forgetPassword() {

      },
      getVerifyCode() {

      },
      close() {

      },
      login() {
        this.$refs['edit-form'].validate(valid => {
          console.log(valid)
        })
      },
      regist() {
        
      }
    }
  }
</script>

<style lang="less" scoped>
  .mt20 {margin-top: 20px !important;}
  .pointer {cursor: pointer;}
  .login-container {
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
      .close {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 18px;
        right: 30px;
        cursor: pointer;
        z-index: 1000;
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
        padding: 40px 142px 50px;
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
            display: flex;
            position: relative;
            > div {
              flex: 1;
            }
            .verify-code-btn {
              width: 145px;
              height: 44px;
              margin-left: 10px;
            }
            &.account-container /deep/ input {
              padding-left: 75px;
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
          .login {
            width: 100%;
            height: 50px;
            font-size: 14px;
          }
        }
        .auto-login {
          margin-top: 4px;
          float: left;
        }
        .more-operation {
          float: right;
          span {
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(180,180,180,1);
            line-height:20px;
            cursor: pointer;
            &:last-child {
              margin-left: 10px;
              color: #2AD49C;
            }
          }
        }
      }
    }
  }
</style>