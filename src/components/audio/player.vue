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
                <div class="play" @click="toggle">{{playing ? '暂停' : '播放'}}</div>
                <div class="next" @click="toggle">下一首</div>
            </div>
            <div class="percent" ref="percent" @click="handleTimeLine">
                <div class="line-loading" :style="{width: loadedWidth}"></div>
                <div class="line" :style="{width: currentWidth}"></div>
            </div>
            <div class="time">
                <span class="cur">{{curTime | timeFormat}}</span>/<span class="total">{{totalTime | timeFormat}}</span>
            </div>
            <div class="volume"></div>
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
                            path: 'http://yyzone.cn1.utools.club/mp3.mp3'
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
                currentWidth: 0
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
                    this.player.volume = 1
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
        bottom: 0;
        background:linear-gradient(360deg,rgba(39,39,39,1) 0%,rgba(77,77,77,1) 100%);
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
                div {
                    display: inline-block;
                    color: #ffffff;
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
        }
    }
</style>
