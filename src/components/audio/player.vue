<template>
    <div class="player">
        <audio 
            v-if="playerList && playerList.length"
            ref="player" 
            :src="playerList[curIndex].path" 
            preload="auto"></audio>
        <div 
            class="content"
            v-if="playerList && playerList.length">
            <div class="picture">
                <img src="../../static/images/audio-bg.png" alt="">
            </div>
            <div class="control">
                <div class="prev" @click="toggle">上一首</div>
                <div :class="`play${playing ? ' playing' : ''}`" @click="toggle">{{playing ? '暂停' : '播放'}}</div>
                <div class="next" @click="toggle">下一首</div>
            </div>
            <div class="percent" ref="percent" @click="handleTimeLine">
                <div class="line-loading" :style="{width: loadedWidth}"></div>
                <div class="line" :style="{width: currentWidth}"></div>
            </div>
            <div class="time">
                <span class="cur">{{curTime | timeFormat}}</span>/<span class="total">{{totalTime | timeFormat}}</span>
            </div>
            <div :class="`volume${mute ? ' mute' : ''}`" @click="handleMute">
                <div class="volume-line" @click.stop="handleMuteLine" ref="muteLine">
                    <div class="volume-line-cur" :style="{
                        height: percentFormat(volume)
                    }"></div>
                </div>
            </div>
            <div class="switch"></div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            playerList: {
                type: Array,
                default() {
                    return [
                        {
                            path: 'http://yyzone.cn1.utools.club/3.mp3'
                        }
                    ]
                }
            },
            curIndex: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                player: '',
                playing: false,
                totalTime: 0,
                curTime: 0,
                loadedWidth: 0,
                currentWidth: 0,
                mute: false,
                volume: 1
            }
        },
        filters: {
            timeFormat(time) {
                let tempMin = parseInt(time / 60)
                let tempSec = parseInt(time % 60)
                let curMin = tempMin < 10 ? ('0' + tempMin) : tempMin
                let curSec = tempSec < 10 ? ('0' + tempSec) : tempSec
                return curMin + ':' + curSec
            }
        },
        methods: {
            play() {
                if(this.player.paused){
                    this.player.play()
                    this.playing = true
                }
            },
            pause() {
                if(!this.player.paused){
                    this.player.pause()
                    this.playing = false
                }
            },
            toggle() {
                this.player.paused ? this.play() : this.pause()
            },
            handleMute() {
                this.mute = !this.mute
                this.player.volume = this.mute ? 0 : this.volume
            },
            percentFormat(percent) {
                return (percent * 100).toFixed(2) + '%'
            },
            updateLine() { // 更新进度条
                let percent = this.player.buffered.length ? 
                (this.player.buffered.end(this.player.buffered.length - 1) / this.player.duration) : 0
                this.loadedWidth = this.percentFormat(percent)
            },
            leftDistance(el) {
                let left = el.offsetLeft
                let scrollLeft
                while (el.offsetParent) {
                    el = el.offsetParent
                    left += el.offsetLeft
                }
                scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft
                return left - scrollLeft
            },
            handleTimeLine(event) {
                const e = event || window.event
                let percent = (e.clientX - this.leftDistance(this.$refs.percent)) / this.$refs.percent.clientWidth
                this.player.currentTime = percent * this.player.duration
            },
            handleMuteLine() {
                const e = event || window.event
                let percent = (e.clientY - this.$refs.muteLine.getBoundingClientRect().top) / this.$refs.muteLine.clientHeight
                this.volume = 1 - percent
                this.player.volume = 1- percent
            },
            init() {
                this.player.addEventListener('durationchange', (e) => { // 时长
                    this.totalTime = this.player.duration
                    console.log(this.totalTime)
                    this.updateLine()
                })
                this.player.addEventListener('progress', (e) => { // 进度
                    this.updateLine()
                })
                this.player.addEventListener('canplay', (e) => {
                    this.player.volume = this.volume
                    this.play()
                })
                this.player.addEventListener('timeupdate', (e) => { // 时间更新
                    this.curTime = this.player.currentTime
                    this.currentWidth = this.percentFormat(this.curTime/this.totalTime)
                })
                this.player.addEventListener('seeked', (e) => { // seeked
                    this.play()
                })
                this.player.addEventListener('ended', (e) => { // 结束
                    this.next()
                })
            }
        },
        mounted() {
            this.player = this.$refs.player
            this.init()
        }
    }
</script>
<style lang="less" scoped>
    .player {
        position: fixed;
        left: 0;
        right: 0;
        bottom: -70px;
        background:linear-gradient(360deg,rgba(39,39,39,1) 0%,rgb(77, 77, 77) 100%);
        transition: .4s bottom ease;
        &:hover {
            bottom: 0px;
        }
        ::selection {
            background-color: transparent;
        }
        &:before {
            position: absolute;
            top: -20px;
            height: 20px;
            content: '';
            left: 0;
            width: 100%;
        }
        .content {
            .layout();
            height: 70px;
            display: flex;
            align-items: center;
            align-content: center;
            .picture {
                .square(42px);
                img {
                    .square(100%);
                }
            }
            .control {
                margin-left: 20px;
                div {
                    display: inline-block;
                    color: #ffffff;
                    .bg-size();
                    font-size: 0;
                    vertical-align: middle;
                    cursor: pointer;
                    &.prev {
                        .square(14px);
                        background-image: url('~@static/images/prev.png');
                    }
                    &.play {
                        .square(30px);
                        margin: 0 10px;
                        background-image: url('~@static/images/play-btn.png');
                        &.playing {
                            background-image: url('~@static/images/pause-btn.png');
                        }
                    }
                    &.next {
                        .square(14px);
                        background-image: url('~@static/images/next.png');
                    }
                }
            }
            .percent {
                flex: 1;
                height: 4px;
                background-color: #9D9DA6;
                border-radius: 5px;
                margin: 0 22px;
                position: relative;
                cursor: pointer;
                &:before {
                    position: absolute;
                    height: 20px;
                    width: 100%;
                    content: '';
                    top: 50%;
                    margin-top: -10px;
                    left: 0;
                }
                .line-loading {
                    position: absolute;
                    background-color: #ffffff;
                    border-radius: 5px;
                    height: 100%;
                    left: 0;
                    top: 0;
                }
                .line {
                    position: absolute;
                    border-radius: 5px;
                    height: 100%;
                    left: 0;
                    top: 0;
                    background-color: @primary-color;
                }
            }
            .time {
                color: #ffffff;
                font-size: @font-size-sm;
            }
            .volume {
                .bg-size();
                .square(24px);
                margin-left: 20px;
                background-image: url('~@static/images/volume.png');
                position: relative;
                cursor: pointer;
                &.mute {
                    &:after {
                        position: absolute;
                        background-color: #ffffff;
                        content: '';
                        height: 24px;
                        width: 1px;
                        left: 50%;
                        top: 50%;
                        margin-top: -12px;
                        transform: rotate(45deg);
                    }
                }
                &-line {
                    &:before {
                        position: absolute;
                        width: 20px;
                        height: 100%;
                        content: '';
                        left: 50%;
                        margin-left: -10px;
                        top: 0;
                    }
                    position: absolute;
                    .size(4px, 100px);
                    bottom: 24px;
                    left: 50%;
                    margin-left: -2px;
                    background-color: #9D9DA6;
                    border-radius: 5px;
                    opacity: 0;
                    transition: .4s opacity ease;
                    &-cur {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        border-radius: 5px;
                        background-color: @primary-color;
                    }
                }
                &:hover .volume-line {
                    opacity: 1;
                }
            }
            .switch {
                
            }
        }
    }
</style>
