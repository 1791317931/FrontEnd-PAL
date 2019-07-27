<template>
    <div class="content-container">
        <div class="head">音乐作品</div>
        <WorksCompose class="dot info">
            <template slot="title">作品信息</template>
            <template>
                <div class="name">
                    <Input v-model="form.name" placeholder="歌曲名称" />
                    <span class="spare-name">20</span>
                </div>
                <div class="clearfix">
                    <div class="pull-left category">
                        <Select v-model="form.categoryId" placeholder="选择作品风格类型">
                            <Option v-for="item in categoryList" :key="item.id" :value="item.id">{{item.text}}</Option>
                        </Select>
                    </div>
                    <div class="pull-left original">
                        <Select v-model="form.original" placeholder="选择属性">
                            <Option :value="1">原唱</Option>
                            <Option :value="2">翻唱</Option>
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
        <WorksCompose class="other-info">
            <template slot="title">其他信息</template>
            <template>
                <div>
                    <Input v-model="form.singer" placeholder="演唱" />
                </div>
                <div>
                    <Input v-model="form.author" placeholder="作词" />
                </div>
                <div>
                    <Input v-model="form.composer" placeholder="作曲" />
                </div>
                <div>
                    <Input v-model="form.editor" placeholder="编曲" />
                </div>
                <div>
                    <Input v-model="form.lyric" placeholder="歌词(可以为空)" type="textarea" class="music-lyric" :rows="5" />
                </div>
                <div>
                    <Input v-model="form.description" placeholder="歌曲简介(可以为空)" type="textarea" class="music-description" :rows="7" :maxlength="120" />
                    <span class="description-spare-count">0/120</span>
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
    import ImgUpload from '@components/common/ImgUpload.vue'
    export default {
        components: {
            WorksCompose,
            ImgUpload
        },
        data() {
            return {
                form: {
                    name: '',
                    categoryId: null,
                    // 是否原唱
                    original: -1,
                    singer: '',
                    author: '',
                    composer: '',
                    editor: '',
                    lyric: '',
                    description: ''
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
        .info {
            padding-bottom: 80px;
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
            .original {
                width: 210px;
                margin-left: 30px;
            }
        }
        .other-info {
            padding-bottom: 100px;
            .description-spare-count {
                position: absolute;
                right: 20px;
                bottom: 10px;
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(153,153,153,1);
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
