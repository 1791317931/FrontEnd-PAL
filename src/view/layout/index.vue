<template>
    <div class="pal-container">
        
    </div>
</template>
<script>
    
    export default {
        name: 'PAL',
        components: {
        }
    }
</script>

<style lang="less">
    html {
        font-size: 12px;
    }

    html, body, #app {
        height: 100%;
    }

.yy-view {
    display: flex;
    height: 100%;
    width: 100%;
    &-sidebar {
        background: #f7f8f9;
        width: 200px;
        z-index: 200;
    }
    &-container {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    &-content {
        flex: 1;
        overflow: auto;
        padding: 20px;
    }
}
</style>
