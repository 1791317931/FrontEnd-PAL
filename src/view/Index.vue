<template>
  <div class="front">
    <div class="header-container">
      <Header/>
    </div>
    <router-view class="page-body"/>
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
  height: 100%;
  min-width: 1340px;
  background:rgba(246,246,246,1);
  overflow-y: auto;
  .header-container {
    background: #fff;
    margin-bottom: -@header-height;
    position: relative;
  }
  .page-body {
    min-height: 100%;
    padding: @header-height 0 @footer-height;
  }
  .footer-container {
    background: #23282D;
    margin-top: -@footer-height;
  }
}
</style>
