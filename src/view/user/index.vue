<template>
    <div class="content-container">
        <Menu mode="horizontal" :active-name="activeName" @on-select="changeMenuItem">
            <MenuItem name="1">基本资料</MenuItem>
            <MenuItem name="2">安全信息</MenuItem>
            <MenuItem name="3">身份认证</MenuItem>
        </Menu>
        <div class="edit-container">
            <BaseInfo v-if="activeName == '1'"/>
            <SafeInfo v-if="activeName == '2'"/>
            <IdentityInfo v-if="activeName == '3'"/>
        </div>
    </div>
</template>
<script>
    import BaseInfo from '@view/user/base_info'
    import IdentityInfo from '@view/user/identity_info'
    import SafeInfo from '@view/user/safe_info'
    export default {
        components: {
            BaseInfo,
            IdentityInfo,
            SafeInfo
        },
        data() {
            return {
                activeName: '1'
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
