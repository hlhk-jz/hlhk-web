import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routersApi from './api/router'
Vue.config.productionTip = false
// 使用Vue.use调用插件
Vue.use(VueRouter)

new Vue({
  router: routersApi,
  render: h => h(App),
}).$mount('#app')
