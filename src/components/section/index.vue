<template>
    <div class="section">
        <h2>
            <div class="title">
                <slot name="title"></slot>
            </div>
            <div class="more" v-if="path" @click="goToLink">更多</div>
        </h2>
        <div class="article">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            path: {
                type: String
            }
        },
        data() {
            return {

            }
        },
        methods: {
            goToLink() {
                this.$router.push({
                    path: this.path
                })
            }
        },
        mounted() {
            console.log(this.$slots)
        }
    }
</script>

<style lang="less" scoped>
    .section {
        .layout();
        background-color: @bg-section;
        margin-bottom: 20px;
        h2 {
            padding: 20px 20px 15px;
            display: flex;
            align-items: center;
            .title {
                flex: 1;
                font-size: @font-size-lg;
                font-weight: 500;
            }
            .more {
                font-weight: 300;
                font-size: @font-size-sm;
            }
        }
        .article {
            .clearfix();
            padding: 0 10px;
        }
    }
</style>
