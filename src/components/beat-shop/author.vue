<template>
    <div class="author">
        <div class="inner">
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
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="less" scoped>
    .author {
        width: 290px;
        margin-left: 30px;
        .inner {
            background: #fff;
            .info {
                padding: 40px 22px;
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
    }
</style>