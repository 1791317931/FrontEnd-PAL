<template>
    <div class="content-container">
        <div class="head">beat商城</div>
        <WorksCompose class="dot">
            <template slot="title">作品信息</template>
            <template>
                <div class="name">
                    <Input v-model="form.name" placeholder="beat名称" />
                    <span class="spare-name">20</span>
                </div>
                <div>
                    <div class="category">
                        <Select v-model="form.categoryId" placeholder="选择Beat风格类型">
                            <Option v-for="item in categoryList" :key="item.id" :value="item.id">{{item.text}}</Option>
                        </Select>
                    </div>
                </div>
            </template>
        </WorksCompose>
        <WorksCompose class="dot">
            <template slot="title">上传封面</template>
            <template>
                <div>
                    <div class="upload-container">
                        <ImgUpload :data="covers" :maxCount="1" :maxSize="3*1024*1024" accept="image/jpg,image/jpeg,image/gif,image/png" @on-result-change="changeCover" />
                    </div>
                </div>
            </template>
        </WorksCompose>
        <WorksCompose class="beat-container">
            <template slot="title">上传信息</template>
            <template>
                <div class="dot">
                    <div class="input-container">
                        <div>
                            <Input v-model="form.mp3" placeholder="上传.MP3（租用）/点击上传MP3格式音频" />
                        </div>
                        <Button class="error">免费</Button>
                        <div class="tip">.MP3格式默认免费可更改价格</div>
                        <div v-show="form.mp3Files.length == 0" class="file-container">
                            <FileUpload accept="mp3" :files.sync="form.mp3Files" />
                        </div>
                    </div>
                    <div v-if="form.mp3Files.length" class="uploaded-file">
                        <div>
                            <div class="img-container">
                                <img :src="form.mp3Files[0].path" />
                            </div>
                            <div class="img-detail">
                                <div class="name text-fixed">{{form.mp3Files[0].name}}</div>
                                <div class="author">鸡光旭</div>
                            </div>
                        </div>
                        <div>
                            <span @click="removeMp3">删除</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="input-container">
                        <div>
                            <Input v-model="form.wav" placeholder="上传.WAV（租用）/点击上传WAV格式音频" :readonly="form.wavFiles.length == 0" />
                        </div>
                        <Button>输入价格</Button>
                        <div v-show="form.wavFiles.length == 0" class="file-container">
                            <FileUpload accept="wav" :files.sync="form.wavFiles" />
                        </div>
                    </div>
                    <div v-if="form.wavFiles.length" class="uploaded-zip">
                        <div>
                            <div class="img-container">
                                <img src="@static/images/logo-black.png" />
                            </div>
                            <div class="name text-fixed">{{form.wavFiles[0].name}}</div>
                        </div>
                        <div>
                            <span @click="removeWav">删除</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="input-container">
                        <div>
                            <Input v-model="form.zip" placeholder="上传分轨工程文件包含WAV\MP3（买断）/点击上传附件压缩包(zip,rar,7z)" :readonly="form.zipFiles.length == 0" />
                        </div>
                        <Button>输入价格</Button>
                        <div v-show="form.zipFiles.length == 0" class="file-container">
                            <FileUpload accept="zip,rar,7z" :files.sync="form.zipFiles" />
                        </div>
                    </div>
                    <div v-if="form.zipFiles.length" class="uploaded-zip">
                        <div>
                            <img :src="form.zipFiles[0].path" />
                            <div class="name text-fixed">{{form.zipFiles[0].name}}</div>
                        </div>
                        <div>
                            <span @click="removeZip">删除</span>
                        </div>
                    </div>
                </div>
                <div class="agreement">
                    <Checkbox v-model="agree">
                        <span class="item item-1">我已阅读并同意</span>
                    </Checkbox>
                    <span class="item item-2">《PAL Music音乐人服务条款》</span>
                </div>
            </template>
        </WorksCompose>
        <div class="operation-container">
            <Button type="primary" @click="submit">立即发布</Button>
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
                    categoryId: null,
                    mp3Price: null,
                    wavPrice: null,
                    zipPrice: null,
                    mp3Files: [],
                    wavFiles: [],
                    zipFiles: []
                },
                categoryList: [],
                covers: [],
                agree: false
            }
        },
        beforeMount() {
            this.getCategoryList()
        },
        methods: {
            getCategoryList() {
                setTimeout(() => {
                    this.categoryList = [
                        {
                            id: -1,
                            text: '全部'
                        },
                        {
                            id: 1,
                            text: 'Old School'
                        },
                        {
                            id: 2,
                            text: 'New School'
                        },
                        {
                            id: 3,
                            text: 'Trap'
                        }
                    ]
                })
            },
            changeCover(imgs) {
                this.covers = imgs
            },
            removeMp3() {
                this.form.mp3Files = []
            },
            removeWav() {
                this.form.wavFiles = []
            },
            removeZip() {
                this.form.zipFiles = []
            },
            submit() {

            }
        }
    }
</script>

<style lang="less" scoped>
    .content-container {
        .head {
            padding: 0 0 0 30px;
            font-size:16px;
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:rgba(16,16,16,1);
            line-height: 82px;
            background:rgba(255,255,255,1);
        }
        .name {
            width: 900px;
            .spare-name {
                position: absolute;
                top: 50%;
                right: 20px;
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(153,153,153,1);
                transform: translateY(-50%);
            }
        }
        .category {
            width: 210px;
        }
        .input-container {
            display: flex;
            > div {
                &:first-child {
                    width: 860px;
                }
                &.tip {
                    margin-left: 10px;
                    font-size:12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(187,187,187,1);
                    line-height:44px;
                }
            }
            button {
                width: 136px;
                height: 44px;
                margin-left: 20px;
                background:rgba(244,244,244,1);
                border-radius:4px;
                border:1px solid rgba(221,221,221,1);
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color: #B7B7B7;
                &.error {
                    color:rgba(194,43,35,1);
                }
            }
            .file-container {
                width: 860px;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                z-index: 10;
                cursor: pointer;
            }
        }
        .uploaded-file {
            display: flex;
            height: 80px;
            margin-top: 20px;
            > div {
                &:first-child {
                    width: 510px;
                    display: flex;
                    padding: 10px;
                    background:rgba(255,255,255,1);
                    border:1px solid rgba(229,229,229,1);
                    .img-container {
                        width: 60px;
                        height: 60px;
                        position: relative;
                        img:first-child {
                            width: 60px;
                            height: 60px;
                        }
                    }
                    .img-detail {
                        padding: 0 0 0 10px;
                        flex: 1;
                        .name {
                            font-size:16px;
                            font-family:PingFangSC-Semibold;
                            font-weight:600;
                            color:rgba(16,16,16,1);
                            line-height:22px;
                        }
                        .author {
                            margin-top: 10px;
                            font-size:14px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(16,16,16,1);
                            line-height:20px;
                        }
                    }
                }
                &:last-child {
                    flex: 1;
                    padding: 0 20px;
                    span {
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(255,56,56,1);
                        line-height: 80px;
                        cursor: pointer;
                    }
                }
            }
        }
        .uploaded-zip {
            height: 60px;
            margin-top: 30px;
            display: flex;
            > div {
                &:first-child {
                    width: 510px;
                    padding: 10px;
                    display: flex;
                    background:rgba(255,255,255,1);
                    border:1px solid rgba(229,229,229,1);
                    img {
                        width: 40px;
                        height: 40px;
                    }
                    .name {
                        flex: 1;
                        padding: 0 20px;
                        font-size:16px;
                        font-family:PingFangSC-Semibold;
                        font-weight:600;
                        color:rgba(16,16,16,1);
                        line-height: 40px;
                    }
                }
                &:last-child {
                    flex: 1;
                    padding: 0 20px;
                    span {
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(255,56,56,1);
                        line-height: 60px;
                        cursor: pointer;
                    }
                }
            }
        }
        .agreement {
            .item {
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(16,16,16,1);
                &.item-1 {
                    padding-left: 10px;
                }
                &.item-2 {
                    color: #0BE79E;
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
