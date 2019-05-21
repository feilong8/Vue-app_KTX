<template>
 <div class="app-container">
 <header>
    <a class="brand" href="index.html">烤天下</a>
</header>
    <!--  src/App.vue -->   
    <!-- 1:添加公共组件 Home.vue/Header-->
    <router-view></router-view>
    <!-- 2:占位符用来显示其它的组 55-->
    
    <!-- 3:添加公共组件 Home.vue/tabbar-->
<nav class="mui-bar mui-bar-tab">
<router-link class="mui-tab-item mui-active" to="/Home">
<span class="mui-icon ">
<img src="../public/img/nav/home.png" ></span>
<span class="mui-tab-label">首页</span>
</router-link>
<router-link class="mui-tab-item" to="/GoodsList">
<span class="mui-icon ">
<img src="../public/img/nav/food.png" >
</span>
<span class="mui-tab-label">招牌美食</span>
</router-link>
<router-link class="mui-tab-item" to="/HuoList">
<span class="mui-icon mui-icon-extra ">
<img src="../public/img/nav/char.png" >

</span>
<span class="mui-tab-label">特色活动</span>
</router-link>
<router-link class="mui-tab-item" to="/join">
<span class="mui-icon ">
<img src="../public/img/nav/join.png" >
</span>
<span class="mui-tab-label">招商加盟</span>
</router-link>
<router-link class="mui-tab-item" to="/about">
<span class="mui-icon ">
<img src="../public/img/nav/ente.png" ></span>
<span class="mui-tab-label">联系我们</span>
</router-link>
</nav>

 </div>
</template>
<style>

   .app-container nav a img{width:32px; position: relative;right:2px}
   .app-container{
     padding-bottom:50px;
     overflow-x:hidden;
     
   }

 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
/*头部*/ 
.brand {display:block;overflow:hidden;width:101px;height:32px;text-indent:-999px;background:url("../public/img/icon/site-brand.png") no-repeat center top;-moz-background-size:cover;-webkit-background-size:cover;background-size:cover;background:}
.brand {background-image:url("../public/img/icon/site-brand@2x.png")}
header{background:#000;}
</style>
