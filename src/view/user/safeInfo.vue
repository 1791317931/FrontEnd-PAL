<template>
    <div class="safe-info-container">
        <div class="info-container custom-form">
            <div>
                <div>用户名</div>
                <Input v-model="form.nickname" />
            </div>
            <div>
                <div>登录密码</div>
                <div class="password-container">
                    <Input type="password" v-model="form.password" readonly />
                    <Button class="update" @click="toUpdate">修改</Button>
                </div>
            </div>
        </div>
        <div v-if="showUpdatePasswordModal" class="update-password-container">
            <div class="inner">
                <div class="modal-head">
                    设置密码<span class="close" @click="cancle"></span>
                </div>
                <div class="modal-body custom-form">
                    <div>
                        <div>
                            原密码：<span>（请先验证愿密码）</span>
                        </div>
                        <Input v-model="newForm.password" />
                    </div>
                    <div>
                        <div>
                            新密码：<span>（最小长度为6个字符）</span>
                        </div>
                        <Input type="password" v-model="newForm.newPassword" readonly />
                    </div>
                    <div>
                        <div>
                            确认密码：<span>（最小长度为6个字符）</span>
                        </div>
                        <Input type="password" v-model="newForm.confirmPassword" readonly />
                    </div>
                    <span class="sure-update" @click="update">确定密码</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    nickname: '',
                    password: ''
                },
                newForm: {
                    password: '',
                    newPassword: '',
                    confirmPassword: ''
                },
                showUpdatePasswordModal: false
            }
        },
        beforeMount() {
            this.getInfo()
        },
        methods: {
            getInfo() {
                console.log('xxxxx')
            },
            toUpdate() {
                this.showUpdatePasswordModal = true
            },
            cancle() {
                this.showUpdatePasswordModal = false
            },
            update() {

            }
        }
    }
</script>

<style lang="less" scoped>
    .safe-info-container {
        height: 400px;
        .info-container {
            background: #fff;
            width: 900px;
            margin: 0 auto;
            padding: 50px 0 0;
            > div {
                &:not(:first-child) {
                    margin-top: 20px;
                }
                > div {
                    margin-bottom: 10px;
                    &:first-child {
                        font-size:16px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(16,16,16,1);
                        line-height:22px;
                    }
                    &.password-container {
                        display: flex;
                        > div {
                            flex: 1;
                        }
                        .update {
                            margin-left: 20px;
                            width:140px;
                            height:44px;
                            background:rgba(228,233,237,1);
                            border-radius:4px;
                            font-size:14px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(60,60,60,1);
                        }
                    }
                }
            }
        }
        .update-password-container {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1000;
            background:rgba(0,0,0,.4);
            .inner {
                width: 894px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #fff;
                padding: 30px 30px 117px;
                .modal-head {
                    font-size:24px;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(16,16,16,1);
                    line-height:33px;
                    .close {
                        width: 24px;
                        height: 24px;
                        position: absolute;
                        top: 35px;
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
                }
                .modal-body {
                    width: 620px;
                    margin: 50px auto 0;
                    background: #fff;
                    > div {
                        &:not(:first-child) {
                            margin-top: 20px;
                        }
                        > div {
                            margin-bottom: 10px;
                            &:first-child {
                                font-size:16px;
                                font-family:PingFangSC-Regular;
                                font-weight:400;
                                color:rgba(16,16,16,1);
                                line-height:22px;
                                span {
                                    color: #A2A2A2;
                                }
                            }
                        }
                    }
                    .sure-update {
                        display: block;
                        margin-top: 50px;
                        line-height:50px;
                        background:rgba(42,212,156,1);
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
