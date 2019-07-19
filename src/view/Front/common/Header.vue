<template>
  <div class="header">
    <img class="logo" src="@i/loading.gif"></img>
    <div class="nav">
      <div v-for="(item, index) in navList" :key="index" :class="currentRouter === item.path ? 'acitve' : ''" @click="toggleNav(item)">{{ item.text }}</div>
    </div>
    <div class="user">
      <img class="avatar" src="@i/loading.gif"></img>
      <div class="user-operation clearfix">
        <div class="upload">
          <img src="@i/loading.gif"></img>
        </div>
        <div class="message">
          <img src="@i/loading.gif"></img>
        </div>
        <div class="to-join">
          <div>立即入驻</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          path: '/home',
          text: '首页'
        },
        {
          path: '',
          text: 'Beat商城'
        },
        {
          path: '',
          text: '文章'
        },
        {
          path: '',
          text: '音乐'
        },
        {
          path: '',
          text: 'APP下载'
        }
      ]
    }
  },
  computed: {
    currentRouter() {
      return this.$route.path
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

.header {
  width: @body-width;
  height: 120px;
  margin: 0 auto;
  position: relative;
  padding: 0 0 0 306px;
  .logo {
    width: 213px;
    height: 40px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .nav {
    float: left;
    height: @header-height;
    > div {
      display: inline-block;
      line-height: @header-height;
      font-size:18px;
      font-family:PingFangSC-Light;
      font-weight:300;
      color:rgba(4,4,4,1);
      position: relative;
      cursor: pointer;
      &:not(:first-child) {
        margin-left: 64px;
      }
      &.acitve {
        &:after {
          content: '';
          width:24px;
          height:5px;
          background:rgba(11,231,158,1);
          border-radius:2px;
          position: absolute;
          left: 50%;
          bottom: 37px;
          transform: translateX(-50%);
        }
      }
    }
  }
  .user {
    height: @header-height;
    float: right;
    position: relative;
    padding: 0 70px 0 0;
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .user-operation {
      height: 100%;
      > div {
        height: 100%;
        position: relative;
        float: left;
        img {
          width: 100%;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        &.upload {
          width: 30px;
          margin-right: 56px;
          img {
            height: 26px;
          }
        }
        &.message {
          width: 28px;
          margin-right: 66px;
          img {
            height: 22px;
          }
        }
        &.to-join {
          width: 129px;
          div {
            width: 100%;
            border-radius: 25px;
            background:rgba(255,92,92,1);
            text-align: center;
            line-height: 42px;
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
}
</style>
