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
                        <Upload :data="covers" :maxCount="1" :maxSize="3*1024*1024" accept="image/jpg,image/jpeg,image/gif,image/png" @on-result-change="changeCover" />
                    </div>
                </div>
            </template>
        </WorksCompose>
        <WorksCompose>
            <template slot="title">上传信息</template>
            <template>
                <div class="dot clearfix">
                    <div class="input-container">
                        <div>
                            <Input v-model="form.mp3" placeholder="上传.MP3（租用）/点击上传MP3格式音频" />
                        </div>
                        <Button>免费</Button>
                        <div>.MP3格式默认免费可更改价格</div>
                    </div>
                    <div class="pull-left">
                        123
                    </div>
                </div>
                <div class="agreement">
                    <Checkbox v-model="agree">
                        <span class="item item-1">我已阅读并同意</span><span class="item item-2">《PAL Music音乐人服务条款》</span>
                    </Checkbox>
                </div>
            </template>
        </WorksCompose>
        <div class="operation-container">
            <Button type="primary" @click="submit">提交</Button>
            <Button @click="back">返回</Button>
        </div>
    </div>
</template>
<script>
    import WorksCompose from '@components/works/Compose'
    import Upload from '@components/common/Upload.vue'
    export default {
        components: {
            WorksCompose,
            Upload
        },
        data() {
            return {
                form: {
                    name: '',
                    categoryId: null,
                    mp3: null
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
            submit() {

            },
            back() {
                
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
            width: 100%;
            float: left;
            > div {
                &:first-child {
                    float: left;
                    width: 860px;
                }
                &:last-child {
                    float: left;
                    margin-left: 10px;
                    font-size:12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(187,187,187,1);
                    line-height:44px;
                }
            }
            button {
                float: left;
                width: 136px;
                height: 44px;
                margin-left: 20px;
                background:rgba(244,244,244,1);
                border-radius:4px;
                border:1px solid rgba(221,221,221,1);
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(194,43,35,1);
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
