<template>
    <div class="identity-container">
        <div v-if="hasIdentitied" class="info-container custom-form">
            <div>
                <div>审核状态</div>
                <Input v-model="form.status" readonly />
            </div>
            <div>
                <div>姓名</div>
                <Input v-model="form.name" readonly />
            </div>
            <div>
                <div>身份证号码</div>
                <Input v-model="form.identityNumber" readonly />
            </div>
            <div>
                <div>身份证照片</div>
                <Input v-model="form.idCardImage" readonly />
            </div>
            <div>
                <div>技能验证</div>
                <Input v-model="form.skill" readonly />
            </div>
        </div>
        <div v-else class="tip-identity-container">
            <div class="inner">
                <div>快去认证，认证后可上传个人音乐，开通Beat商城去赚钱！</div>
                <Button type="primary" class="to-identity" @click="toIdentity">去认证</Button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeName: '3',
                hasIdentitied: true,
                form: {
                    status: '审核已通过',
                    name: '鸡光旭',
                    identityNumber: '4546464465465465465465465',
                    idCardImage: '已上传',
                    skill: '已上传'
                }
            }
        },
        beforeMount() {
            this.getInfo()
        },
        methods: {
            getInfo() {
                // console.log('xxxxx')
                this.hasIdentitied = false
            },
            toIdentity() {
                this.$router.push({
                    name: 'residence-agreement'
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .identity-container {
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
                }
            }
        }
        .tip-identity-container {
            height: 400px;
            position: relative;
            .inner {
                text-align: center;
                position: absolute;
                top: 50%;
                left: 0;
                right: 0;
                transform: translateY(-50%);
                div {
                    font-size:24px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(18,18,18,1);
                    line-height:33px;
                }
                .to-identity {
                    margin-top: 100px;
                    width: 310px;
                    height: 50px;
                    font-size: 18px;
                }
            }
        }
    }
</style>
