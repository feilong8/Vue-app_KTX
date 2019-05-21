<!-- src/componets/goods/GoodList.vue-->
<template>
  <!-- 外层父元素-->
  <div class="app-goodlist">
    <!-- 商品项目-->
     <div class="goods-item" v-for="item in list" :key="item.lid">
       <img  :src="'http://127.0.0.1:3000/'+item.lg"  @click="jumpInfo" :data-lid="item.lid"/>
       <h4>{{item.title}}</h4>
    <!-- <div class="info">
          <span class="now">￥{{item.price.toFixed(2)}}</span>  
       </div>-->
       <div class="info">
          <span class="now">烤肉非常的美味，同时食用营养十分的丰富，受到了广大消费者的喜爱，那么烤天下加盟怎么样?
查看更多>></span>  
       </div>
       <!-- <div class="sell">
         <span>热卖中</span>
       </div>-->
     </div> <!-- 商品项-->
     <mt-button type="primary" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
  export default {
    data(){
      return {pno:0,pageSize:4,list:[]}
    },
    created() {
      this.getMore();
    },
    methods:{
      jumpInfo(e){
         var lid = e.target.dataset.lid;
         
         this.$router.push("/GoodInfo?pid="+lid);
      },
      getMore(){
        this.pno++;
        var url = "http://127.0.0.1:3000";
        url+="/products?pno="+this.pno
        url+="&pageSize="+this.pageSize;
        this.axios.get(url).then(result=>{
          
          var rows = this.list.concat(result.data.data);
          this.list = rows;
        })
      }
    }
  }
</script>
<style>
/*外层父元素*/
.app-goodlist{
  display:flex;   /*弹性布局*/
  flex-wrap:wrap; /*子元素换行*/
  justify-content:space-between;/*两端对齐*/
  padding:4px;
  background:url('../../../public/img/icon/icon-party.jpg');
  color:#fff;
}
/*商品项*/
.app-goodlist div{height:px;}

.app-goodlist .goods-item{
  width:49%;   /*商品项宽度*/
  border:1px solid #ccc;/*边框*/
  box-shadow:0 0 8px #ccc;/*阴影*/
  margin:4px 0;
  padding:2px;
  display:flex;/*子元素弹性布局*/
  flex-direction:column;/*排列方式:垂直*/
  min-height:230px;
  justify-content:space-between;
}
.app-goodlist .goods-item img{
  width:100%;
}
.app-goodlist .goods-item h4{
  font-size:12px;
} /**/
.app-goodlist .goods-item .now{
  color:#fff;
  font-size:12px;
  font-weight:normal;
}
.sell>span{color:red;font-size:12px;}
</style>
