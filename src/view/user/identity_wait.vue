<template>
    <div class="content-container">
        <div class="title">PAL Music开放平台</div>
        <div class="tip-identity-container">
            <div class="inner">
                <div>信息提交成功客服人员会在24小时内审核反馈请耐心等待</div>
                <div>审核通过后会给与短信通知</div>
                <Button type="primary" class="to-wait" @click="waitAudient">等待审核</Button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            waitAudient() {
                this.$router.push({
                    name: 'Home'
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .content-container {
        background: #fff;
        .title {
            padding: 0 30px;
            font-size:14px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(16,16,16,1);
            line-height: 60px;
            border-bottom: 1px solid #eee;
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
                    font-size:34px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(16,16,16,1);
                    line-height:56px;
                }
                .to-wait {
                    margin-top: 30px;
                    width: 190px;
                    height: 44px;
                    font-size: 18px;
                }
            }
        }
    }
</style>