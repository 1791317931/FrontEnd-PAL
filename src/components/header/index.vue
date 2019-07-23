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
    @keyframes move {
        from {
            left: 0;
        }
        to {
            left: 124px;
        }
    }
    header {
        background-color: @bg-header;
        padding: 20px 0;
        margin-bottom: 20px;
        position: sticky;
        top: 0;
        .header-content {
            display: flex;
            align-items: center;
            .layout()
        }
        h1 {
            .size(208px, 30px);
            .bg-size();
            font-size: 0;
            margin-right: 60px;
            position: relative;
            &:before {
                .size(84px, 18px);
                .bg-size(100%);
                position: absolute;
                content: '';
                background-image: url('~@static/images/logo-line.png');
                bottom: 0;
                left: 0;
                transition: .4s ease left, .4s ease width;
            }
            &:after {
                .size(208px, 30px);
                .bg-size();
                position: absolute;
                content: '';
                background-image: url('~@static/images/logo-black.png');
            }
            &:hover {
                &:before {
                    left: 84px;
                    width: 124px;
                }
            }
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
