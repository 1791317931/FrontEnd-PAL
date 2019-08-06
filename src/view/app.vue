<template>
    <div id="app">
        <PalHeader />
        <router-view />
        <PalPlayer 
            ref="player"/>
        <!-- <PalFooter /> -->
        <!-- <Regist/> -->
        <!-- <Login/> -->
    </div>
</template>
<script>
    import PalHeader from '@components/header/'
    import PalFooter from '@components/footer/'
    import PalPlayer from '@components/audio/player'
    import Regist from '@view/common/regist'
    import Login from '@view/common/login'

    export default {
        components: {
            PalHeader, 
            PalFooter, 
            PalPlayer,
            Regist,
            Login
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
