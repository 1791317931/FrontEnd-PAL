<template>
    <div class="audio">
        <div class="audio-content">
            <div class="audio-bg"></div>
            <span class="play">
                <span class="play-btn"></span>
            </span>  
        </div>
        <div class="audio-info">
            <div class="audio-title">菊花台</div>
            <div class="audio-caption">
                <span>作词人：倪占军</span>
                <span>编曲：金光旭</span>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .audio {
        float: left;
        margin: 0 5px 10px;
        padding: 5px;
        transition: .4s ease transform, .4s ease box-shadow;

        .audio-content {
            overflow: hidden;
            position: relative;
        }
        .audio-bg {
            .square(242px);
            .bg-size(cover);
            background-image: url('~@static/images/audio-bg.png');
            transition: .4s ease transform;
        }
        .play {
            .square(82px);
            box-sizing: content-box;
            .position(@margin-left: -181px; @margin-top: -181px);
            border: 140px solid rgba(0,0,0,0);
            border-radius: 50%;
            background-color: transparent;
            transition: .4s ease border;
            &-btn {
                display: block;
                .square(82px);
                .bg-size();
                background-image: url('~@static/images/play.png');
                border: 5px solid transparent;
                cursor: pointer;
            }
        }
        .audio-info {
            color: @text-color;
            .audio-title {
                font-size: @font-size-md;
                font-weight: bold;
                padding: 10px 0;
            }
            .audio-caption {
                font-size: @font-size-sm;
                padding-bottom: 10px;
            }
        }
        &:hover {
            box-shadow:0px 0px 10px 0px rgba(0,0,0, .2);
            transform: scale(1.02);
            .play {
                border-color: rgba(0,0,0, .4);
            }
            .audio-bg {
                transform: scale(1.02);
            }
        }
    }
</style>
