<template>
  <div id="app">
     <Router/>
  </div>
</template>

<script>
import Router from './components/router/Router.vue'

export default {
  name: 'App',
  components: {
    Router
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
