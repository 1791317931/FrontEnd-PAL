<template>
    <div class="author">
        <div class="user">
            <div class="info">
                <img class="avatar" src="@static/images/loading.gif"/>
                <div class="name">AKA-老万</div>
                <div class="desc">大家好，我是一名音乐制作人大家可以叫我…</div>
                <div class="follow-btn">关注作者</div>
            </div>
            <div class="list">
                <div class="item">
                    粉丝
                    <div>32124</div>
                </div>
                <div class="item">
                    作品
                    <div>32124</div>
                </div>
            </div>
        </div>
        <div v-if="showQrCode" class="qr-code">
            <div class="title">下载客户端</div>
            <div class="btn-group">
                <div class="iphone" @click="toggleType('ios')">
                    <img src="@static/images/ios.png"/>iPhone
                </div>
                <div class="android" @click="toggleType('android')">
                    <img src="@static/images/android.png"/>Android
                </div>
            </div>
            <div class="qr-code-container">
                <img v-show="type == 'ios'" src="@static/images/loading.gif"/>
                <img v-show="type == 'android'" src="@static/images/loading.gif"/>
            </div>
            <div class="tip">
                扫码下载APP玩更多
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            showQrCode: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                type: 'ios'
            }
        },
        methods: {
            toggleType(type) {
                this.type = type
            }
        }
    }
</script>

<style lang="less" scoped>
    .author {
        width: 290px;
        margin-left: 30px;
        .user {
            background: #fff;
            padding: 40px 22px 0;
            .info {
                .avatar {
                    display: block;
                    width: 80px;
                    height: 80px;
                    margin: 0 auto;
                }
                .name {
                    margin-top: 16px;
                    font-size:18px;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(16,16,16,1);
                    line-height:25px;
                    text-align: center;
                }
                .desc {
                    margin-top: 10px;
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(151,151,151,1);
                    line-height:20px;
                    text-align: center;
                }
                .follow-btn {
                    margin: 20px auto 0;
                    width:129px;
                    line-height:42px;
                    background:rgba(255,92,92,1);
                    border-radius:25px;
                    text-align: center;
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    cursor: pointer;
                }
            }
            .list {
                margin-top: 27px;
                display: flex;
                height: 60px;
                border-top: 1px solid rgba(239,239,239);
                .item {
                    flex: 1;
                    text-align: center;
                    padding: 9px 0 0;
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(151,151,151,1);
                    line-height:20px;
                    &:not(:first-child) {
                        border-left: 1px solid rgba(239,239,239);
                    }
                    div {
                        margin-top: 6px;
                        font-size:14px;
                        font-family:DINAlternate-Bold;
                        font-weight:bold;
                        color:rgba(30,30,30,1);
                        line-height:16px;
                    }
                }
            }
        }
        .qr-code {
            background: #fff;
            margin-top: 30px;
            height: 390px;
            padding: 20px 20px 0;
            .title {
                font-size:24px;
                font-family:PingFangSC-Semibold;
                font-weight:600;
                color:rgba(16,16,16,1);
                line-height:33px;
            }
            .btn-group {
                margin-top: 23px;
                > div {
                    width:119px;
                    line-height:40px;
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    display: inline-block;
                    position: relative;
                    padding: 0 0 0 46px;
                    cursor: pointer;
                    img {
                        position: absolute;
                        top: 50%;
                        left: 28px;
                        transform: translateY(-50%);
                    }
                    &:first-child {
                        background:rgba(103,185,235,1);
                    }
                    &:last-child {
                        float: right;
                        background:rgba(134,216,101,1);
                    }
                }
            }
            .qr-code-container {
                margin-top: 28px;
                text-align: center;
                img {
                    width: 154px;
                    height: 154px;
                }
            }
            .tip {
                margin-top: 18px;
                text-align: center;
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,76,76,1);
                line-height:20px;
            }
        }
    }
</style>