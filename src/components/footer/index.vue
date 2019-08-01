<template>
    <footer>
        <div class="content">
            <div class="info">
                <p class="nav">
                    <span>商务合作</span>
                    <span>反馈意见</span>
                    <span>关于我们</span>
                    <span>联系我们</span>
                    <span>官方QQ群</span>
                </p>
                <p class="copy">京ICP备14007358号-1 / 京公网安备11010802014104号 / Powered by 2008-2019 UI.CN</p>
                <div class="logo"></div>
            </div>
            <div class="qrcode">
                <div class="mini-program">
                    <div class="image"></div>
                    <p>官方小程序</p>
                </div>
                <div class="account">
                    <div class="image"></div>
                    <p>官方公众号</p>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="less" scoped>
    footer {
        background-color: #23282D;
        .content {
            .layout();
            padding: 42px 0;
            color: #fff;
            display: flex;
            .info {
                flex: 1;
                .nav {
                    font-size: @font-size-md;
                    margin-bottom: 30px;
                    span {
                        margin-right: 26px;
                    }
                }
                .copy {
                    font-size: @font-size-sm;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:22px;
                    margin-bottom: 30px;
                }
                .logo {
                    .size(208px, 30px);
                    .bg-size();
                    background-image: url('~@static/images/logo-white.png');
                }
            }
            .qrcode {
                & > div {
                    display: inline-block;
                    text-align: center;
                    margin-left: 60px;
                }
                .image {
                    .square(120px);
                    background-color: #fff;
                    margin-bottom: 10px;
                    padding: 10px;
                    img {
                        .square(100%);
                    }
                }
                p {
                    font-size: @font-size-md;
                }
            }
        }
    }
</style>

