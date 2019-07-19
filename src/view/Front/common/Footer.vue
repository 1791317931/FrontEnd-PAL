<template>
  <div class="footer">
    <div>
      <div class="nav">
        <div v-for="(item, index) in navList" :key="index" @click="toggleNav(item)">{{ item.text }}</div>
      </div>
      <div class="audient-info">京ICP备14007358号-1 / 京公网安备11010802014104号 / Powered by 2008-2019 UI.CN</div>
      <div class="logo">
        <img src="@i/loading.gif"></img>
      </div>
      <div class="qrcode">
        <div>
          <img src="@i/loading.gif"></img>
          <div>官方小程序</div>
        </div>
        <div>
          <img src="@i/loading.gif"></img>
          <div>官方公众号</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      navList: [
        {
          path: '',
          text: '商务合作'
        },
        {
          path: '',
          text: '反馈意见'
        },
        {
          path: '',
          text: '关于我们'
        },
        {
          path: '',
          text: '联系我们'
        },
        {
          path: '',
          text: '官方QQ群'
        }
      ]
    }
  },
  methods: {
    toggleNav(item) {
      console.log(item)
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../../theme.less');

.footer {
  height: @footer-height;
  background: @footer-bg;
  padding: 60px 0 0;
  > div {
    width: @body-width;
    padding: 0 40px 0 52px;
    position: relative;
    margin: 0 auto;
    .nav {
      > div {
        display: inline-block;
        font-size:16px;
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(255,255,255,1);
        line-height:22px;
        cursor: pointer;
        &:not(:first-child) {
          margin-left: 70px;
        }
      }
    }
    .audient-info {
      margin-top: 26px;
      font-size:16px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:22px;
    }
    .logo {
      margin-top: 34px;
      img {
        width: 270px;
        height: 40px;
      }
    }
    .qrcode {
      position: absolute;
      top: 0;
      right: 52px;
      > div {
        width: 120px;
        float: left;
        &:not(:first-child) {
          margin-left: 60px;
        }
        img {
          width: 120px;
          height: 120px;
          display: block;
        }
        div {
          margin-top: 13px;
          text-align: center;
          font-size:16px;
          font-family:PingFangSC-Semibold;
          font-weight:600;
          color:rgba(255,255,255,1);
          line-height:22px;
        }
      }
    }
  }
}
</style>
