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
                <div>
                    <quill-editor
                        v-model="form.content"
                        ref="myQuillEditor"
                        class="rich-text"
                        :options="editorOption"
                    />
                </div>
            </template>
        </WorksCompose>
        <div class="operation-container">
            <Button type="primary" @click="submit">发布</Button>
        </div>
    </div>
</template>
<script>
    import WorksCompose from '@components/works/'
    import ImgUpload from '@components/common/img_upload.vue'
    import FileUpload from '@components/common/file_upload'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
      ['blockquote', 'code-block'], // 引用  代码块-----['blockquote', 'code-block']
      [{ header: 1 }, { header: 2 }], // 1、2 级标题-----[{ header: 1 }, { header: 2 }]
      [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
      // [{ script: 'sub' }, { script: 'super' }], // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
      [{ indent: '-1' }, { indent: '+1' }], // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
      [{ size: ['small', false, 'large', 'huge'] }], // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题-----[{ header: [1, 2, 3, 4, 5, 6, false] }]
      [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
      [{ font: ['SimSun','SimHei', 'Microsoft-YaHei', 'KaiTi'] }], // 字体种类-----[{ font: [] }]
      [{ align: [] }], // 对齐方式-----[{ align: [] }]
      ['image'] // 链接、图片、视频-----['link', 'image', 'video']
    ]

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
                    content: ''
                },
                categoryList: [],
                covers: [],
                agree: false,
                editorOption: {
                    placeholder: '快来写点什么吧',
                    theme: 'snow',
                    modules: {
                      toolbar: {
                        container: toolbarOptions
                      }
                    }
                }
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
