<template>
    <div class="content-container">
        <div class="head">音乐作品</div>
        <div class="info">
            <div>作品信息</div>
            <div class="bind-form">
                <div class="row-item name">
                    <Input v-model="form.name" class="normal-input" placeholder="歌曲名称" />
                </div>
                <div class="row-item clearfix">
                    <div class="pull-left">
                        <Select v-model="form.categoryId" placeholder="选择作品风格类型">
                            <Option v-for="item in categoryList" :key="item.id" :value="item.id">{{item.text}}</Option>
                        </Select>
                    </div>
                    <div class="pull-left">
                        <Select v-model="form.original" placeholder="选择属性">
                            <Option :value="1">原唱</Option>
                            <Option :value="2">翻唱</Option>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    categoryId: null,
                    // 是否原唱
                    original: -1
                },
                categoryList: []
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
            margin-top: 30px;
            background: #fff;
            > div:first-child {
                padding: 0 0 0 30px;
                line-height: 60px;
                border-bottom: 1px solid #EEEEEE;
                font-size:14px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(16,16,16,1);
            }
            .bind-form {
                padding: 30px 0 0 56px;
                .row-item {
                    position: relative;
                    &:before {
                        content: '';
                        width:6px;
                        height:6px;
                        background:rgba(194,43,35,1);
                        border-radius: 50%;
                        position: absolute;
                        top: 0;
                        left: -20px;
                    }
                    &:not(:first-child) {
                        margin-top: 40px;
                    }
                    &.name {
                        width: 900px;
                    }
                }
            }
        }
    }
</style>
