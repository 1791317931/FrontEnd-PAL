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
    </div>
</template>
<script>
    import PalBanner from '@components/banner/'
    import PalSection from '@components/section/'
    import PalAudio from '@components/audio/'
    export default {
        components: {
            PalBanner,
            PalSection,
            PalAudio
        }
    }
</script>
