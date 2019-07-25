<template>
    <div class="content-container">
        <div class="head">音乐作品</div>
        <WorksCompose>
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
        <WorksCompose>
            <template slot="title">上传封面</template>
            <template>
                <div>
                    <div class="upload-container">
                        <Upload :data="covers" :maxCount="1" :maxSize="3*1024*1024" accept="image/jpg,image/jpeg,image/gif,image/png" @on-result-change="changeCover" />
                    </div>
                </div>
            </template>
        </WorksCompose>
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
                    // 是否原唱
                    original: -1
                },
                categoryList: [],
                covers: []
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
        category {
            width: 210px;
        }
        .original {
            width: 210px;
            margin-left: 30px;
        }
    }
</style>
