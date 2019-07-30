<template>
    <div class="content-container">
        <Menu mode="horizontal" :active-name="activeName" @on-select="changeMenuItem">
            <MenuItem name="1">基本资料</MenuItem>
            <MenuItem name="2">安全信息</MenuItem>
            <MenuItem name="3">身份认证</MenuItem>
        </Menu>
        <div class="edit-container">
            <IdentityInfo v-if="activeName == '3'"/>
        </div>
    </div>
</template>
<script>
    import IdentityInfo from '@view/user/identityInfo'
    export default {
        components: {
            IdentityInfo
        },
        data() {
            return {
                activeName: '3'
            }
        },
        methods: {
            changeMenuItem(name) {
                this.activeName = name
            }
        }
    }
</script>

<style lang="less" scoped>
    .content-container {
        background: #fff;
        .edit-container {
            padding: 0 0 50px;
        }
    }
</style>
