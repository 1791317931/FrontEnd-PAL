<template>
    <header>
        <div class="header-content">
            <h1>PAL MUSIC / Hip Hop / Rapper</h1>
            <nav>
                <ul>
                    <li v-for="(item, index) in menus" 
                        :key="index"
                        @click="goToLink(item)">
                        <a>{{item.name}}</a>
                    </li>
                </ul>
            </nav>
            <div class="header-bread"></div>
        </div>
    </header>
</template>
<script>
    export default {
        name: 'Header',
        data() {
            return {
                menus: [
                    {
                        name: '首页',
                        path: '/'
                    },
                    {
                        name: 'Beat商城',
                        path: '/'
                    },
                    {
                        name: '文章',
                        path: '/'
                    },
                    {
                        name: '音乐',
                        path: '/'
                    },
                    {
                        name: 'APP下载',
                        path: '/'
                    }
                ]
            }
        },
        methods: {
            goToLink(data) {
                this.$router.push({
                    path: data.path
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    header {
        background-color: @bg-header;
        padding: 20px 0;
        margin-bottom: 20px;
        .header-content {
            display: flex;
            align-items: center;
            .layout()
        }
        h1 {
            .size(208px, 30px);
            .bg-size();
            font-size: 0;
            background-image: url('~@static/images/logo-black.png');
            margin-right: 60px;
        }
        nav {
            ul {
                display: flex;
                align-items: center;
            }
            li {
                margin: 0 21px;
                padding: 6px;
                font-size: @font-size-lg;
                cursor: pointer;
            }
        }
    }
</style>
