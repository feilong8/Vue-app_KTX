import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/tabbar/Home.vue'
import HuoList from './components/home/HuoList'
import GoodsList from "./components/goods/GoodList.vue"
import NewsInfo from "./components/home/NewsInfo.vue"
import GoodInfo from "./components/goods/GoodInfo.vue"
import join from "./components/home/join.vue"
import about from "./components/home/about.vue"


Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',redirect:"/Home"},
    {path:'/Home',component:Home},
    {path:'/HuoList',component:HuoList},
    {path:'/GoodsList',component:GoodsList},
    {path:'/NewsInfo',component:NewsInfo},
    {path:'/GoodInfo',component:GoodInfo},
    {path:'/join',component:join},
    {path:'/about',component:about},
  ]
});