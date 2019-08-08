<template>
    <div class="beat-detail">
        <img class="cover" src="@static/images/banner.png"/>
        <div class="content">
            <div class="collection" @click="toggleCollection">
                <img v-show="!detail.isCollect" src="@static/images/collection.png" /><img v-show="detail.isCollect" src="@static/images/collection-active.png" />喜欢
            </div>
            <div class="name">{{detail.name}}</div>
            <div class="info">
                <span>作曲：{{detail.composer}}</span>
                <span>租用人数：{{detail.rentCount}}</span>
            </div>
            <div class="listen">
                <div>
                    <img src="@static/images/listen.png"/>{{detail.listenCount}}
                </div>
                <div class="category-list">
                    <div v-for="(item, index) in detail.categories" :key="index" class="item">{{item}}</div>
                </div>
            </div>
            <div class="choose">
                <div>购买格式</div>
                <div class="list">
                    <div v-for="(item, index) in detail.formats" :key="index" class="item" :class="formatIndex == index ? 'active' : ''" @click="clickFormatItem(index)">{{item.text}}</div>
                </div>
            </div>
            <Tip class="mt10"/>
            <div class="buy-container">
                <div v-if="detail.isBuy" class="is-buy">
                    <div class="price">已购买</div>
                    <div class="receive">
                        获取方式：
                        <div class="download">
                            <img src="@static/images/download.png"/>立即下载
                        </div>
                    </div>
                </div>
                <div v-if="!detail.isBuy" class="need-buy">
                    <div class="price">￥{{detail.formats[formatIndex].price}}</div>
                    <div class="receive">
                        支付方式：
                        <div class="pay-list">
                            <div class="item ali-pay pay-source" :class="paymentType == 'aliPay' ? 'active' : ''" @click="togglePayment('aliPay')">
                                <img src="@static/images/ali-pay.png"/>支付宝
                                <div class="qr-code" :class="paymentType == 'aliPay' ? '' : 'hide'">
                                    <div>扫码支付</div>
                                    <img src="@static/images/loading.gif"/>
                                    <div>使用<span>支付宝</span>APP扫码完成支付</div>
                                </div>
                            </div>
                            <div class="item wechat pay-source" :class="paymentType == 'wechatPay' ? 'active' : ''" @click="togglePayment('wechatPay')">
                                <img src="@static/images/wechat.png"/>微信支付
                                <div class="qr-code" :class="paymentType == 'wechatPay' ? '' : 'hide'">
                                    <div>扫码支付</div>
                                    <img src="@static/images/loading.gif"/>
                                    <div>使用<span>微信</span>APP扫码完成支付</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Tip from '@src/components/works/tip'

    export default {
        components: {
            Tip
        },
        props: {
            detail: {
                type: Object,
                default: () => {
                    return {
                        id: 1,
                        name: '打虎上山',
                        composer: '丽霞龙',
                        rentCount: 8,
                        listenCount: 340000,
                        categories: ['Old school', 'Logic Pro'],
                        formats: [
                            {
                                text: 'MP3租用',
                                price: 100
                            },
                            {
                                text: 'WAV租用',
                                price: 100
                            },
                            {
                                text: '分轨租用',
                                price: 100
                            },
                            {
                                text: '独家买断',
                                price: 100
                            }
                        ],
                        isCollect: true,
                        isBuy: false
                    }
                }
            }
        },
        data() {
            return {
                formatIndex: 1,
                paymentType: null
            }
        },
        mounted() {
            document.body.onclick = (e) => {
                let path = e.path
                let elements = document.getElementsByClassName('pay-source')
                let exit = false
                for (let i = 0; i < path.length; i++) {
                    for (let m = 0; m < elements.length; m++) {
                        if (path[i] == elements[m]) {
                            exit = true
                            break
                        }
                    }
                    if (exit) {
                        break
                    }
                }

                // 如果不是关键的几个元素，就隐藏二维码
                if (!exit) {
                    this.paymentType = null
                }
            }
        },
        beforeDestroy() {
            document.body.onclick = null
        },
        methods: {
            toggleCollection() {
                let detail = this.detail
                let isCollect = detail.isCollect
                detail.isCollect = !isCollect
            },
            clickFormatItem(index) {
                this.formatIndex = index
            },
            togglePayment(type) {
                this.paymentType = type
            }
        }
    }
</script>
<style lang="less" scoped>
    .mt10 {margin-top: 10px;}
    .beat-detail {
        display: flex;
        flex: 1;
        background: #fff;
        padding: 30px 30px 50px;
        .cover {
            width: 230px;
            height: 230px;
            margin-right: 30px;
        }
        .content {
            flex: 1;
            position: relative;
            .collection {
                position: absolute;
                top: 0;
                right: 0;
                width:100px;
                line-height:40px;
                background:rgba(255,255,255,1);
                border:1px solid rgba(226,226,226,1);
                cursor: pointer;
                padding: 0 0 0 47px;
                img {
                    position: absolute;
                    top: 50%;
                    left: 15px;
                    transform: translateY(-50%);
                }
            }
            .name {
                width: 500px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size:18px;
                font-family:PingFangSC-Semibold;
                font-weight:600;
                color:rgba(16,16,16,1);
                line-height:25px;
            }
            .info {
                margin-top: 10px;
                font-size:14px;
                font-family:PingFangSC-Light;
                font-weight:300;
                color:rgba(16,16,16,1);
                line-height:20px;
                span {
                    &:not(:first-child) {
                        margin-left: 70px;
                    }
                }
            }
            .listen {
                margin-top: 10px;
                display: flex;
                > div {
                    &:first-child {
                        line-height: 28px;
                        font-size:14px;
                        font-family:PingFangSC-Light;
                        font-weight:300;
                        color:rgba(16,16,16,1);
                        display: inline-block;
                        position: relative;
                        padding: 0 0 0 21px;
                        img {
                            position: absolute;
                            left: -5px;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                    }
                }
                .category-list {
                    margin-left: 20px;
                    flex: 1;
                    .item {
                        display: inline-block;
                        min-width: 86px;
                        padding: 0 13px;
                        line-height: 26px;
                        background:rgba(255,255,255,1);
                        border-radius:3px;
                        border:1px solid rgba(226,226,226,1);
                        font-size:12px;
                        font-family:PingFangSC-Light;
                        font-weight:300;
                        color:rgba(16,16,16,1);
                        &:not(:first-child) {
                            margin-left: 10px;
                        }
                    }
                }
            }
            .choose {
                margin-top: 10px;
                > div {
                    &:first-child {
                        font-size:16px;
                        font-family:PingFangSC-Semibold;
                        font-weight:600;
                        color:rgba(16,16,16,1);
                        line-height:22px;
                    }
                }
                .list {
                    margin-top: 10px;
                    > div {
                        display: inline-block;
                        width:146px;
                        line-height:40px;
                        background:rgba(255,255,255,1);
                        border:1px solid rgba(226,226,226,1);
                        cursor: pointer;
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        text-align: center;
                        color:rgba(16,16,16,1);
                        &:first-child {
                            color:rgba(4,4,4,1);
                        }
                        &:not(:first-child) {
                            margin-left: 10px;
                        }
                        &.active {
                            background: #040404;
                            color: #fff;
                        }
                    }
                }
            }
            .buy-container {
                margin-top: 20px;
                .price {
                    font-size:24px;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(255,68,0,1);
                    line-height:33px;
                }
                .receive {
                    margin-top: 20px;
                    line-height: 40px;
                    font-size:16px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(16,16,16,1);
                    .download {
                        margin-left: 20px;
                        display: inline-block;
                        width:114px;
                        height:40px;
                        background:rgba(42,212,156,1);
                        position: relative;
                        padding: 0 0 0 39px;
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        img {
                            position: absolute;
                            top: 50%;
                            left: 19px;
                            transform: translateY(-50%);
                        }
                    }
                    .pay-list {
                        margin-left: 20px;
                        display: inline-block;
                        .item {
                            display: inline-block;
                            width:146px;
                            line-height:40px;
                            background:rgba(255,255,255,1);
                            border:1px solid rgba(226,226,226,1);
                            padding: 0 0 0 56px;
                            font-size:14px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(17,17,17,1);
                            position: relative;
                            cursor: pointer;
                            &:not(:first-child) {
                                margin-left: 30px;
                            }
                            &.active {
                                border:1px solid rgba(46,209,155,1);
                            }
                            > img {
                                position: absolute;
                                top: 50%;
                                left: 35px;
                                transform: translateY(-50%);
                            }
                            .qr-code {
                                position: absolute;
                                left: 50%;
                                top: 50px;
                                transform: translateX(-50%);
                                width: 230px;
                                padding: 10px 25px 15px;
                                background: #fff;
                                box-shadow:0px 0px 10px 0px rgba(0,0,0,0.13);
                                z-index: 1001;
                                > div {
                                    &:first-child {
                                        margin-top: 22px;
                                        text-align: center;
                                        font-size:16px;
                                        font-family:PingFangSC-Regular;
                                        font-weight:400;
                                        color:rgba(16,16,16,1);
                                        line-height:22px;
                                    }
                                    &:last-child {
                                        margin-top: 18px;
                                        font-size:12px;
                                        font-family:PingFangSC-Regular;
                                        font-weight:400;
                                        color:rgba(159,159,159,1);
                                        line-height:17px;
                                        text-align: center;
                                        span {
                                            color: #FF2424;
                                        }
                                    }
                                }
                                &:before {
                                    content: '';
                                    border: 6px solid transparent;
                                    border-bottom-color: #fff;
                                    position: absolute;
                                    top: -12px;
                                    left: 50%;
                                    transform: translateX(-50%);
                                }
                                img {
                                    margin-top: 30px;
                                    display: block;
                                    height: 182px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>