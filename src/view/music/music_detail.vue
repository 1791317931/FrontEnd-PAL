<template>
    <div class="music-detail">
        <div class="top-container">
            <Detail />
            <Author :showQrCode="true" />
        </div>
        <div class="more">
            更多作品
        </div>
    </div>
</template>
<script>
    import Detail from '@components/music/detail'
    import Author from '@components/beat-shop/author'
    export default {
        components: {
            Detail,
            Author
        }
    }
</script>

<style lang="less" scoped>
    .music-detail {
        width: 1331px;
        margin: 0 auto;
        .top-container {
            display: flex;
        }
        .more {
            margin-top: 20px;
            background: #fff;
        }
    }
</style>