<template>
    <div>
        <router-link  :to="{name:'canvas'}">canvas</router-link> <br>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "Html5Router"
    }
</script>