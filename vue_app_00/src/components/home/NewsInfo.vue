<template>
  <div class="huoinfo">
    <div class="mui-card">
      <div class="mui-card-header mui-card-media" :style="`height:40vw;background-image:url(`+info.img_url+`)`"></div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>Posted on {{info.ctime |dateFilter}}</p>
          <p style="color: #333;">{{info.content}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <a class="mui-card-link">link</a>
        <a class="mui-card-link">Read more</a>
      </div>
    </div> 
    <!--评论-->
    <comment-box></comment-box>
  </div>
</template>
<script>
import comment from "../sub/comment.vue"
  export default{
    data (){
      return {
        info:{}
      }
    },
    methods:{
       findNewsInfo(){
         var nid=this.$route.query.nid;
         var url="http://127.0.0.1:3000/findNewsInfo?id="+nid;
         this.axios.get(url).then(result=>{
           this.info=result.data.data[0];
         })
       }
    },
    created() {
      this.findNewsInfo();
    },
   components:{
     "comment-box":comment
    },
  }
</script>
<style>
  .huoinfo{background:url('../../../public/img/icon/mu-1.jpg')}
  .huoinfo>h1{color:#fff;font-size:16px;padding-left:20px;height:40px;padding-top:10px;}
</style>