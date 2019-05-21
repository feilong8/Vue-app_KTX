<!-- 轮播图-->

<template>
   <div class="app-swiper">
     <mt-swipe  :auto="3000">
        <mt-swipe-item v-for="item in rows" :key="item.id">
           <img :src="'http://127.0.0.1:3000/'+item.lg" />
        </mt-swipe-item>
     </mt-swipe> 
   </div>
</template>
<script>

  export default{
    data(){
      return {}
    },
   props:["rows"]
  }
  
</script>
<style >
   .app-swiper .mint-swipe{height:200px;}
  .app-swiper .mint-swipe img{width:100%;position:relative;top:-134px;left:-10px;}
</style>