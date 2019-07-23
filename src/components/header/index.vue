<template>
    <header>
        <div>
            <h1></h1>
            <nav></nav>
        </div>
    </header>
</template>
<style lang="less" scoped>
    header {
        background-color: @bg-header;
        padding: 25px 0;
        h1 {
            .size(240px, 70px);
            .bg-size();
            background-image: url('~@static/images/logo-back.png');
        }
    }
</style>
