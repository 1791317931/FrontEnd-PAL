<template>
    <div class="base-info-container">
        <div class="info-container custom-form">
            <div>
                <div>用户名</div>
                <Input v-model="form.nickname" />
            </div>
            <div>
                <div>自我介绍</div>
                <Input v-model="form.description" type="textarea" :rows="2" />
            </div>
            <div>
                <div>厂牌</div>
                <Input v-model="form.group" />
            </div>
            <div>
                <div>毕业学校</div>
                <Input v-model="form.school" />
            </div>
            <div>
                <div>
                    技能验证<span>建议输入2-5个字符最多三个标签</span>
                </div>
                <div class="skill-container">
                    <div v-for="item in skills" :key="item.value" v-show="form.skills.indexOf(item.value) != -1" @click="cancleItem(item.value)">{{item.text}}</div>
                </div>
                <div class="all-skill-container">
                    <div v-for="item in skills" :key="item.value" v-show="form.skills.indexOf(item.value) == -1" @click="addItem(item.value)">
                        {{item.text}}<span></span>
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
                    nickname: '',
                    description: '',
                    group: '',
                    school: '',
                    skills: []
                },
                skills: [
                    {
                        value: 1,
                        text: '录音师'
                    },
                    {
                        value: 2,
                        text: '混音师'
                    },
                    {
                        value: 3,
                        text: '母带师'
                    },
                    {
                        value: 4,
                        text: '作词'
                    },
                    {
                        value: 5,
                        text: '编曲'
                    },
                    {
                        value: 6,
                        text: 'rapper'
                    },
                    {
                        value: 7,
                        text: 'Trap'
                    }
                ]
            }
        },
        beforeMount() {
            this.getInfo()
        },
        methods: {
            getInfo() {
                console.log('xxxxx')
            },
            cancleItem(value) {
                let list = this.form.skills
                list.splice(list.indexOf(value), 1)
            },
            addItem(value) {
                this.form.skills.push(value)
            }
        }
    }
</script>

<style lang="less" scoped>
    .base-info-container {
        padding: 50px 0 100px 280px;
        background: #fff;
        .info-container {
            width: 900px;
            > div {
                &:not(:first-child) {
                    margin-top: 20px;
                }
                > div {
                    margin-bottom: 10px;
                    &:first-child {
                        font-size:16px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(16,16,16,1);
                        line-height:22px;
                        span {
                            margin-left: 10px;
                            font-size:16px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(208,208,208,1);
                        }
                    }
                    &.skill-container {
                        height: 100px;
                        padding: 12px 6px;
                        background:rgba(244,244,244,1);
                        border-radius:4px;
                        border:1px solid rgba(221,221,221,1);
                        > div {
                            float: left;
                            margin-left: 10px;
                            margin-bottom: 10px;
                            padding: 0 25px 0 10px;
                            background: #fff;
                            line-height: 28px;
                            font-size:16px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(16,16,16,1);
                            position: relative;
                            cursor: pointer;
                            &:before {
                                content: '';
                                width: 13px;
                                height: 1px;
                                background: #000000;
                                position: absolute;
                                top: 50%;
                                right: 6px;
                                transform: translateY(-50%) rotateZ(45deg);
                            }
                            &:after {
                                content: '';
                                width: 13px;
                                height: 1px;
                                background: #000000;
                                position: absolute;
                                top: 50%;
                                right: 6px;
                                transform: translateY(-50%) rotateZ(-45deg);
                            }
                        }
                    }
                    &.all-skill-container {
                        padding: 6px 6px;
                        > div {
                            float: left;
                            margin-right: 10px;
                            margin-bottom: 10px;
                            padding: 0 30px 0 10px;
                            background:rgba(235,235,235,1);
                            line-height: 30px;
                            font-size:16px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:#2A2A2A;
                            position: relative;
                            cursor: pointer;
                            &:before {
                                content: '';
                                width: 0;
                                position: absolute;
                                top: -22px;
                                right: -15px;
                                transform: rotateZ(-135deg);
                                border: 15px solid transparent;
                                border-top-color: #fff;
                            }
                            &:after {
                                content: '';
                                width: 0;
                                position: absolute;
                                top: 21px;
                                right: -15px;
                                transform: rotateZ(-45deg);
                                border: 15px solid transparent;
                                border-top-color: #fff;
                            }
                            span {
                                width: 10px;
                                height: 10px;
                                border-radius: 50%;
                                background: #fff;
                                position: absolute;
                                top: 50%;
                                right: 10px;
                                transform: translateY(-50%);
                            }
                        }
                    }
                }
            }
        }
    }
</style>
