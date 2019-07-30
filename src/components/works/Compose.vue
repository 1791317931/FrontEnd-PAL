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
        padding: 0 0 30px;
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
            padding: 30px 0 0 56px;
            > div {
                display: flex;
                position: relative;
                &:not(:first-child) {
                    margin-top: 40px;
                }
                &.dot {
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
                }
            }
        }
        &.dot {
            .custom-form {
                > div {
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
                }
            }
        }
        &.other-info {
            .custom-form {
                padding-top: 40px;
                > div {
                    width: 960px;
                }
            }
        }
        &.beat-container {
            .custom-form {
                > div {
                    &:not(:first-child) {
                        margin-top: 30px;
                    }
                }
            }
        }
        &.article-container {
            padding-bottom: 0;
            .custom-form {
                padding-top: 0;
                padding-left: 0;
            }
        }
    }
</style>
