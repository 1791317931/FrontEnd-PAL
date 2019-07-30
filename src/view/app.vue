<template>
    <div id="app">
        <PalHeader />
        <router-view />
        <PalPlayer 
            ref="player"/>
        <PalFooter />
    </div>
</template>
<script>
    import PalHeader from '@components/header/'
    import PalFooter from '@components/footer/'
    import PalPlayer from '@components/audio/player'

    export default {
        components: {
            PalHeader, 
            PalFooter, 
            PalPlayer
        },
        data() {
            return {
                playerList: [],
                curIndex: 0
            }
        },
        mounted() {
            this.$event.$on('handlePlay', ({ playerList, curIndex = 0 })=>{
                this.playerList = playerList
                this.curIndex = curIndex
            })
            this.$event.$on('handlePause', ({ playerList, curIndex = 0 })=>{
                this.playerList = playerList
                this.curIndex = curIndex
            })
        }
    }
</script>
