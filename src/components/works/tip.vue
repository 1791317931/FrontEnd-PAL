<template>
    <div class="tip">
        <div>
            <img class="record" src="@static/images/record.png"/>
            <span>提供无损格式音频用于音乐录制使用</span>
        </div>
        <div>
            <img src="@static/images/group.png"/>
            <span>可使用音频进行影视配音使用</span>
        </div>
        <div>
            <img src="@static/images/microphone.png"/>
            <span>可用于商业演出</span>
        </div>
        <div>
            <img src="@static/images/refresh.png"/>
            <span>未经允许情况下禁止私自Remix使用</span>
        </div>
        <div>
            <img src="@static/images/sign.png"/>
            <span>录制发布作品是作曲署名应署名作者名称未署名将于下线处理</span>
        </div>
        <div>
            <img src="@static/images/warning.png"/>
            <span>注意租用.WAV Beat包含.MP3使用权没有转卖权，如经发现售卖他人Beat将承担一定法律责任</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .tip {
        > div {
            font-size:12px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(4,4,4,1);
            line-height:17px;
            padding: 0 0 0 16px;
            position: relative;
            &:not(:first-child) {
                margin-top: 8px;
            }
            img {
                width: 12px;
                height: 12px;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                &.record {
                    width: 10px;
                    height: 14px;
                }
            }
        }
    }
</style>