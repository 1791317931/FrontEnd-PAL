<!-- 上传作品信息-组成部分 -->
<template>
    <div class="info-row">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="custom-form">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            
        }
    }
</script>

<style lang="less" scoped>
    .info-row {
        margin-top: 30px;
        background: #fff;
        .title {
            padding: 0 0 0 30px;
            line-height: 60px;
            border-bottom: 1px solid #EEEEEE;
            font-size:14px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(16,16,16,1);
        }
        .custom-form {
            padding: 30px 0 80px 56px;
            > div {
                position: relative;
                &:before {
                    content: '';
                    width:6px;
                    height:6px;
                    background:rgba(194,43,35,1);
                    border-radius: 50%;
                    position: absolute;
                    top: 0;
                    left: -20px;
                }
                &:not(:first-child) {
                    margin-top: 40px;
                }
            }
        }
    }
</style>
