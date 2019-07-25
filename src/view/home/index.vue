<template>
    <div class="home">
        <PalBanner />
        <PalSection>
            <div slot="title">热门音乐</div>
            <div>
                <PalAudio></PalAudio>
                <PalAudio></PalAudio>
                <PalAudio></PalAudio>
                <PalAudio></PalAudio>
                <PalAudio></PalAudio>
            </div>
        </PalSection>
        <PalSection>
            <div slot="title">BEAT商城</div>
            <div>
                <PalAudio></PalAudio>
                <PalAudio></PalAudio>
                <PalAudio></PalAudio>
                <PalAudio></PalAudio>
                <PalAudio></PalAudio>
                <PalAudio></PalAudio>
                <PalAudio></PalAudio>
                <PalAudio></PalAudio>
                <PalAudio></PalAudio>
                <PalAudio></PalAudio>
            </div>
        </PalSection>
        <PalSection>
            <div slot="title">首页推文</div>
            <div style="margin-top: -15px">
                <PalArticle></PalArticle>
            </div>
        </PalSection>
    </div>
</template>
<script>
    import PalBanner from '@components/banner/'
    import PalSection from '@components/section/'
    import PalAudio from '@components/audio/'
    import PalArticle from '@components/article/'
    export default {
        components: {
            PalBanner,
            PalSection,
            PalAudio,
            PalArticle
        }
    }
</script>
