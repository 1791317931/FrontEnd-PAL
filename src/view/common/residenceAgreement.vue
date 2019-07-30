<template>
    <div class="content-container">
        <div class="title">PAL Music开放平台服务协议</div>
        <div class="info">
          <div class="desc">
            <div>欢迎你使用腾讯音乐开放平台（以下简称“平台”）及服务！</div>
            <div>为更好地方便你使用平台及相关服务，你应当阅读并遵守《腾讯音乐开放平台服务协议》（以下简称“本协议”）和《腾讯服务协议》、《QQ号码规则》、《腾讯微信软件许可及服务协议》、《隐私政策》等相关协议和业务规则。请你务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款，并选择接受或不接受。限制、免责条款可能以加粗等形式提示你注意。</div>
            <div>除非你已阅读并接受本协议所有条款，否则你无权注册成为平台用户及享受相关服务。你的注册、登录、分享/传播相关内容等任何使用平台服务的相关行为即视为你已阅读并同意本协议的约束。</div>
            <div>如果你未满18周岁，请在法定监护人的陪同下或经过法定监护人同意后，再进行阅读、接受本协议以及完成相关内容的分享/传播等操作，否则，请你不要接受本协议以及进行相关操作；若你进行了接受本协议、分享/传播相关内容等操作，将视为你的任何操作均是在法定监护人的陪同下或经过法定监护人同意后进行的，会对你及你的法定监护人产生法律约束力。</div>
            <div>一、名词定义</div>
            <div>1.1 腾讯音乐开放平台</div>
            <div>指为方便你分享、传播你有权的词或曲音乐作品、录音录像制品、MV作品、文字作品、图片作品、视频作品及其他相关内容，为你提供信息存储空间及相关技术支持等服务的平台，以下简称“平台”。</div>
            <div>如你另行与腾讯音乐开放平台或其关联主体就相关分享内容另行达成其他书面协议的，应遵从其他协议的约定。</div>
            <div>1.2 分享内容</div>
            <div>指你上传到平台的你拥有相应的全部权利的各种形式的词或曲音乐作品、录音录像制品、MV作品、文字作品、图片作品、视频作品以及其他相关的全部内容（包括词曲作者或表演者照片、个人简介、文字内容、图片、视听作品、专辑封面、专辑制作花絮、音乐文档、宣传短片等），具体分享内容形式包括代词或不带词音频形式、视频形式、MV形式（类电影作品）、文字形式、图片形式等各种形式，具体以你上传提供的为准。</div>
            <div>1.3 开放平台用户</div>
          </div>
          <div class="agreement">
            <Checkbox v-model="agree">同意以上协议</Checkbox>
          </div>
          <div class="btn-container">
            <Button type="primary" class="to-agree" @click="toAgree">下一步</Button>
          </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
              agree: false
            }
        },
        methods: {
          toAgree() {
            if (!this.agree) {
              this.tipUtil.warning('您还没有同意协议')
              return
            }

            
          }
        }
    }
</script>

<style lang="less" scoped>
    .content-container {
        background: #fff;
        .title {
          line-height: 60px;
          padding: 0 30px;
          font-size:14px;
          font-family:PingFangSC-Medium;
          font-weight:500;
          color:rgba(16,16,16,1);
          border-bottom: 1px solid #EEEEEE;
        }
        .info {
          padding: 75px 116px 80px;
          .desc {
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(16,16,16,1);
            line-height:20px;
          }
          .agreement {
            margin-top: 142px;
            text-align: center;
          }
          .btn-container {
            text-align: center;
            .to-agree {
              margin-top: 25px;
              font-size: 18px;
              width:190px;
              height:44px;
              background:rgba(14,231,159,1);
              border-radius:5px;
            }
          }
        }
    }
</style>
