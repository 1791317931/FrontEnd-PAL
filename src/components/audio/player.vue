<template>
    <div class="player">
        <audio 
            ref="player" 
            :src="path" 
            preload="auto"></audio>
        <div class="content">
            <div class="picture"></div>
            <div class="control">
                <div class="prev" @click="toggle"></div>
                <div class="play" @click="toggle"></div>
                <div class="next" @click="toggle"></div>
            </div>
            <div class="percent">
                <div class="line-loading"></div>
                <div class="line"></div>
            </div>
            <div class="time">
                <span class="cur"></span>/<span class="total"></span>
            </div>
            <div class="volume"></div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            playerList: {
                type: Array
            },
            curIndex: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                player: '',
                pause: false,
                totalTime: 0,
                loadTime: 0
            }
        },
        methods: {
            play() {
                if(this.player.paused){
                    this.player.play()
                    this.pause = false
                }
            },
            pause() {
                if(!this.player.paused){
                    this.player.pause()
                    this.pause = true
                }
            },
            toggle() {
                this.player.paused ? this.play() : this.pause();
            },
            timeFormat(time) {
                let tempMin = parseInt(time / 60)
                let tempSec = parseInt(time % 60)
                let curMin = tempMin < 10 ? ('0' + tempMin) : tempMin
                let curSec = tempSec < 10 ? ('0' + tempSec) : tempSec
                return curMin + ':' + curSec
            },
            percentFormat(percent) {
                return (percent * 100).toFixed(2) + '%'
            },
            updateLine() { // 更新进度条
                let percent = this.player.buffered.length ? 
                (this.player.buffered.end(this.player.buffered.length - 1) / this.player.duration) : 0
                this.loadedWidth = this.percentFormat(percent)
            },
            init() {
                this.player.addEventListener('durationchange', (e) => { // 时长
                    this.totalTime = this.player.duration
                    this.updateLine()
                })
                this.player.addEventListener('progress', (e) => { // 进度
                    this.updateLine()
                })
                this.player.addEventListener('timeupdate', (e) => { // 时间更新
                    console.log(e)
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
        height: 110px;
        background:linear-gradient(360deg,rgba(39,39,39,1) 0%,rgba(77,77,77,1) 100%);
        .content {
            .layout();
            display: flex;
            align-items: center;
            align-content: center;
            .picture {

            }
            .control {

            }
            .percent {
                flex: 1;
            }
        }
    }
</style>
