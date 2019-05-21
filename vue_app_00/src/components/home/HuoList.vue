<!--src/componets/home/NewsList.vue-->
<template>
    <div class="app-houlist">
        <h3>特色活动</h3>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item of list" :key="item.id">
                <router-link :to="'/NewsInfo?nid='+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                        <span>{{item.ctime | datetimeFilter}} </span>
                        <span>点击i{{item.point}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
        <mt-button type="primary"size="large" @click="getMore()">加载更多</mt-button>
    </div>
</template>
<script>
  export default{
      data(){
          return {
              list:[],
              pno:1,
              pageSize:7
          }
      },
      methods:{
          getMore(){
              this.pno++;
              var url="http://127.0.0.1:3000/HuoList?pno="+this.pno+"&pageSize="+this.pageSize;
              this.axios.get(url).then(result=>{
                  var rows=this.list.concat(result.data.data);
                  this.list=rows;
                  
              })
          },
          getHuoList(){
          var url="http://127.0.0.1:3000/HuoList";
          this.axios.get(url).then(result=>{
             this.list=result.data.data;
             console.log(this.list);
          })
        }
      },
      created() {
          this.getHuoList()
      },
  }
</script>
<style>
 .app-houlist{background:#000;}
 .app-houlist h3{font-size:16px;height:36px; padding-top:10px;padding-left:15px;}
.mui-table-view,h3{color:#fff;}
.app-houlist li p.mui-ellipsis{
    display:flex;
    font-size:12px;
    color:#226aff;
    justify-content:space-between;
}
</style>