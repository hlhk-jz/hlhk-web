import VueRouter from 'vue-router'
import Home from '../components/home/Home'
import Echarts from '../components/echarts/Echarts'
const routersApi = new VueRouter({
    routes: [
        { path: '/home',name:'home', component: Home },
        { path: '/echarts',name:'echarts', component: Echarts },
    ]
}) ;
export default routersApi;