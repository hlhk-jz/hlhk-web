<template>
    <div >
        <div id="htmlId">
            <router-link class="menu-item"  :to="{name:'canvas'}">canvas</router-link> <br>
            <router-link class="menu-item" :to="{name:'svg'}">svg</router-link> <br>
            <router-link class="menu-item" :to="{name:'videos'}">视频</router-link> <br>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "Html5Router"
    }
</script>

<style>
    #htmlId {
        height: 30px;
        width: 100%;
        margin-right: 10px;
        display: flex;
        justify-content: center;
    }

    .menu-item {
        margin-right: 10px; /* 设置右边距，即两个菜单项之间的间隔 */
        /* 其他样式，比如浮动或者inline-block */
        display: inline-block; /* 使链接横向排列 */
        padding: 5px; /* 可选，为链接添加一些填充 */
    }

    router-link {
        padding: 10px 20px;
        text-decoration: none;
        color: #fff;
        background-color: #42b983;
        margin: 0 10px;
        display: flex;
        align-items: center;
        border-radius: 5px;
    }

    router-link:hover {
        background-color: #35a378;
    }
</style>