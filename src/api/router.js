import VueRouter from 'vue-router'
import Home from '../components/home/Home'
import Echarts from '../components/echarts/Echarts'
import Html5Router from "../components/router/Html5Router";
import Canvas from "../components/html5/Canvas"
import Svgs from "../components/html5/Svgs"
import Videos from "../components/html5/Videos"
const routersApi = new VueRouter({
    routes: [
        { path: '/home',name:'home', component: Home },
        { path: '/echarts',name:'echarts', component: Echarts },
        { path: '/html5Router',name:'html5Router', component: Html5Router,
            children:[
                {
                    path:'canvas',
                    name:'canvas',
                    component:Canvas
                },
                {
                    path:'svg',
                    name:'svg',
                    component:Svgs
                }
                ,
                {
                    path:'videos',
                    name:'videos',
                    component:Videos
                }
            ]
        },
    ]
}) ;
export default routersApi;