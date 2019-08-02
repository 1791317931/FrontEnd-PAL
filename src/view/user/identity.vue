<template>
    <div class="content-container">
        <WorksCompose class="dot identity">
            <template slot="title">技能认证</template>
            <template>
                <div>
                    <div class="upload-container">
                        <ImgUpload :data="frontCovers" :maxCount="1" :maxSize="10*1024*1024" accept="image/jpg,image/jpeg,image/gif,image/png" @on-result-change="changeFrontCover">
                            <template slot="desc">
                                <div>手持证件照（半身+头像面）</div>
                            </template>
                        </ImgUpload>
                        <div class="upload-id-card-tip">上传拍摄手持身份证，确保清晰</div>
                    </div>
                    <div class="id-card-demo">
                        <img src="@static/images/id-card-front.png"/>
                        <div>示例图片</div>
                    </div>
                    <div class="id-card-tip">
                        <div>1、录制制作工程文件视频时间长度不超过10秒，文件不大于50mb</div>
                    </div>
                </div>
            </template>
        </WorksCompose>
        <WorksCompose class="dot identity">
            <template slot="title">身份认证</template>
            <template>
                <div>
                    <div class="upload-container">
                        <ImgUpload :data="frontCovers" :maxCount="1" :maxSize="10*1024*1024" accept="image/jpg,image/jpeg,image/gif,image/png" @on-result-change="changeFrontCover">
                            <template slot="desc">
                                <div>手持证件照（半身+头像面）</div>
                            </template>
                        </ImgUpload>
                        <div class="upload-id-card-tip">上传拍摄手持身份证，确保清晰</div>
                    </div>
                    <div class="id-card-demo">
                        <img src="@static/images/id-card-front.png"/>
                        <div>示例图片</div>
                    </div>
                    <div class="id-card-tip">
                        <div>1、根据国家相关规定，请提供有效身份的彩色照片/彩色扫描件</div>
                        <div>2、图片需为jpg、jpeg、png格式，且大小<10M</div>
                    </div>
                </div>
                <div class="name">
                    <Input v-model="form.name" placeholder="姓名"/>
                </div>
                <div class="id-card-number">
                    <Input v-model="form.idCardNumber" placeholder="身份证号"/>
                </div>
                <div class="phone">
                    <Input v-model="form.phone" placeholder="常用手机号"/>
                </div>
                <div class="verify-code-container">
                    <div>
                        <div class="input-container">
                            <div>
                                <Input v-model="form.verifyCode" placeholder="输入验证码" />
                            </div>
                            <Button class="verify-code-btn">验证码</Button>
                        </div>
                    </div>
                    <div>用户下单后方便提醒</div>
                </div>
            </template>
        </WorksCompose>
        <div class="operation-container">
            <Button type="primary" @click="submit">下一步</Button>
        </div>
    </div>
</template>
<script>
    import WorksCompose from '@components/works/'
    import ImgUpload from '@components/common/img_upload.vue'
    import FileUpload from '@view/upload/file_upload'
    export default {
        components: {
            WorksCompose,
            ImgUpload,
            FileUpload
        },
        data() {
            return {
                form: {
                    name: '',
                    idCardNumber: '',
                    phone: '',
                    verifyCode: ''
                },
                frontCovers: []
            }
        },
        methods: {
            changeFrontCover(files) {
                this.frontCovers = files
            },
            submit() {

            }
        }
    }
</script>

<style lang="less" scoped>
    .content-container {
        .upload-container {
            .upload-id-card-tip {
                margin-top: 20px;
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(16,16,16,1);
                line-height:20px;
            }
        }
        .identity {
            .id-card-demo {
                margin-left: 90px;
                width: 240px;
                img {
                    width: 240px;
                    height: 180px;
                    display: block;
                }
                div {
                    margin-top: 20px;
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(16,16,16,1);
                    line-height:20px;
                }
            }
            .id-card-tip {
                margin-left: 28px;
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(16,16,16,1);
                line-height:20px;
            }
            .name {
                width: 210px;
            }
            .id-card-number {
                width: 310px;
            }
            .phone {
                width: 210px;
            }
            .input-container {
                display: flex;
                > div {
                    &:first-child {
                        width: 210px;
                    }
                }
                button {
                    width: 100px;
                    height: 44px;
                    margin-left: 30px;
                    background:rgba(244,244,244,1);
                    border-radius:4px;
                    border:1px solid rgba(221,221,221,1);
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color: @primary-color;
                }
            }
            .verify-code-container {
                display: block;
                > div {
                    &:last-child {
                        margin-top: 10px;
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(16,16,16,1);
                    }
                }
            }
        }
        .operation-container {
            margin-top: 30px;
            background: @bg-body;
            button {
                width: 190px;
                margin-right: 40px;
            }
        }
    }
</style>