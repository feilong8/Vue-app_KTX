<template>
  <div class="app-comment">
    <div class="mui-card">
				<div class="mui-card-header"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
          <textarea placeholder="请发表评论   字量在120个字内" maxlengt="120"v-model="msg"></textarea>
          <mt-button size="large" type="primary" @click=" addcomment" >发表评论</mt-button>
					
					</div>
				</div>
				<div class="mui-card-footer">
          <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) of list" :key="item.id">
                <p>第{{i+1}}楼  发表时间:{{item.ctime |dateFilter}}</p>
                <p> {{item.content}}</p>
            </div>
          </div>
        </div>
			</div>
  </div>
</template>
<script>
import{Toast} from "mint-ui"
  export default{
    data(){
      return {
        pno:0,
        pageSize:6,
        list:[],
        msg:""
      }
    },
    methods:{
      //添加评论
      addcomment(){
        var m=this.msg;
        var size=m.trim().length;
        if(size==0){
          Toast("评论内容不能为空");
          return;
        }
        var nid=this.$route.query.nid;
        
        var postData=this.qs.stringify({
          nid:nid,
         content:this.msg
        });
        var url="http://127.0.0.1:3000/addcomment"
        this.axios.post(url,postData).then(result=>{
          Toast(result.data.msg);
          this.msg="";
          this.pno=0;
          this.list=[];
         this.getMore();
        })
      },
      //评论分页显示
      getMore(){

        this.pno++;
        var url="http://127.0.0.1:3000/getComment?nid="+this.$route.query.nid+" &pno="+this.pno+"&pageSize="+this.pageSize;
        this.axios.get(url).then(result=>{
         var rows= this.list.concat(result.data.data);
         this.list=rows;
        })
      }
    },
    created() {
      this.getMore();
      
    },
  }
</script>
<style >
  
</style>
