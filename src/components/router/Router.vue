<template>
    <div id="container" style="width: 100%; height: 800px;">
        <div id="header" style="background-color:#FFA500;">
            <h1 style="margin-bottom:0;">HLHK</h1>
        </div>

        <div id="menu" style="background-color:#FFD700;height:100%;width:10%;float:left;padding: 30px">
            <div>
                <b>菜单</b> <br>
            </div>
            <div style="padding: 10px">
                <router-link class="my-link" :to="{name:'home'}">Home</router-link> <br>
                <router-link :to="{name:'echarts'}">echarts</router-link>  <br>
            </div>

        </div>

        <div id="content" style="background-color:#EEEEEE;height:100%;width:85%;float:left;">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Router'
    }
</script>

<style>
    .my-link {
        color: blue;
        text-decoration: none; /* 移除下划线 */
        padding: 5px;
        border: 1px solid #ccc; /* 添加边框 */
    }

    .my-link:hover {
        background-color: #f0f0f0; /* 鼠标悬浮时的背景色 */
    }
</style>