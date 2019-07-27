<template>
    <div class="content-container">
        <div class="head">投稿文章</div>
        <WorksCompose class="dot">
            <template slot="title">作品信息</template>
            <template>
                <div class="name">
                    <Input v-model="form.name" placeholder="标题" />
                    <span class="spare-name">20</span>
                </div>
                <div class="select-container">
                    <div class="category">
                        <Select v-model="form.categoryId" placeholder="文章分类">
                            <Option v-for="item in categoryList" :key="item.id" :value="item.id">{{item.text}}</Option>
                        </Select>
                    </div>
                    <div class="original">
                        <Select v-model="form.original" placeholder="选择属性">
                            <Option :value="1">原创</Option>
                            <Option :value="2">转载</Option>
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
                        <ImgUpload :data="covers" :maxCount="1" :maxSize="5*1024*1024" accept="image/jpg,image/jpeg,image/gif,image/png" @on-result-change="changeCover" />
                    </div>
                </div>
            </template>
        </WorksCompose>
        <WorksCompose class="article-container">
            <template slot="title">文章内容</template>
            <template>
                <div id="summernote"></div>
            </template>
        </WorksCompose>
        <div class="operation-container">
            <Button type="primary" @click="submit">立即发布</Button>
        </div>
    </div>
</template>
<script>
    import WorksCompose from '@components/works/Compose'
    import ImgUpload from '@components/common/ImgUpload.vue'
    import FileUpload from '@view/upload/fileUpload'
    import 'bootstrap/js/modal.js'
    import 'bootstrap/js/modal.js'
    import 'bootstrap/js/modal.js'
    import 'summernote'
    import 'summernote/dist/lang/summernote-zh-CN.js'
    import 'summernote/dist/summernote.css'
    import 'jquery'
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
                    categoryId: null
                },
                categoryList: [],
                covers: [],
                agree: false
            }
        },
        beforeMount() {
            this.getCategoryList()
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                $('#summernote').summernote({

                })
            },
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
        .original {
            width: 210px;
            margin-left: 30px;
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
