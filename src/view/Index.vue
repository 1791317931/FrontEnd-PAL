<template>
  <div class="front">
    <div class="header-container">
      <Header/>
    </div>
    <div class="page-body">
      <router-view/>
    </div>
    <div class="footer-container">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '@/view/Front/common/Header'
import Footer from '@/view/Front/common/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
@import url('../theme.less');

.front {
  min-height: 100%;
  min-width: @body-width;
  background: @body-bg;
  .header-container {
    background: #fff;
    margin-bottom: -@header-height;
    position: relative;
  }
  .page-body {
    width: @content-width;
    min-height: 100%;
    margin: 0 auto;
    padding: @content-padding-top 0 @content-padding-bottom 0;
  }
  .footer-container {
    background: #23282D;
    margin-top: -@footer-height;
  }
}
</style>
