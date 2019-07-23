<template>
    <div id="app">
        <PalHeader />
        <router-view />
        <PalFooter />
    </div>
</template>
<script>
    import PalHeader from '@components/header/'
    import PalFooter from '@components/footer/'
    export default {
        components: {
            PalHeader, PalFooter
        },
        mounted() {

        }
    }
</script>
