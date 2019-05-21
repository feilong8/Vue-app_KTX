<template>
  <div class="app-home">
    <!--轮播图-->
    <mt-swipe>
      <mt-swipe-item v-for="item of list" :key="item.id"> 
        <img :src="item.img_url" >
      </mt-swipe-item>
    </mt-swipe>
    <div>
     <!--中间文字-->
      <img src="../../../public/img/banner/DASDSAD_01.jpg" class="brand1">
       <img src="../../../public/img/banner/DASDSAD_02.jpg" class="brand1">
       <img src="../../../public/img/banner/DASDSAD_03.jpg" class="brand1">
       <img src="../../../public/img/banner/DASDSAD_04.jpg" class="brand1">
       <img src="../../../public/img/banner/DASDSAD_05.jpg" class="brand1">
       <img src="../../../public/img/banner/DASDSAD_06.jpg" class="brand1">
    </div>
     <ul >
				<li >
						<div class="mui">
							特色展示
							<p class='mui-ellipsis'>Featured display</p>
						</div>
				</li>
			</ul>
    <!--九宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <img src="../../../public/img/icon/icon-1.png" >
        <div class="mui-media-body">音乐</div>
        <div class="xin">啤酒让人麻醉，音乐让人清醒，摇摆灯光深 夜美味，低吟浅唱亦或是引亢高歌。手持啤酒，碌着烧烤，一起哼唱，充分释放</div>
       </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <img src="../../../public/img/icon/icon-2.png" >
        <div class="mui-media-body">啤酒</div>
        <div class="xin">音乐和啤酒就是绝配，搭配天生的华尔兹舞步现场氛围快速升温，让您体验一样与众不同的烧烤盛宴，手持啤酒，碌着烧烤</div></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <img src="../../../public/img/icon/icon-3.png" >
        <div class="mui-media-body">聚会</div>
        <div class="xin">个性定位，打造极致体验，新店开张火爆成都，要玩要嗨就来烤天下</div></li>
    </ul> 
     </mt-swipe>
     <!--要味道-->
     <div class="taste">
      <img src="../../../public/img/icon/in-title.png" >
      
     </div>
     <ul >
				<li >
						<div class="mui">
							要味道
							<p >一店撸遍全球，现串现烤，想怎么吃就怎么吃。鲜香麻辣，浓油赤酱，满足每个挑剔的吃货。尽情撸串，酣畅淋漓，体味人间美食。</p>
						</div>
				</li>
			</ul>
      <p>
					<img src="../../../public/img/pd/ad-1.jpg" data-preview-src="" data-preview-group="1" />
				</p>
        <ul >
				<li >
						<div class="mui">
							更要腔调
							<p >大口撸串，放肆喝酒，尽情high唱，这里没有规矩，没有界限，追求自由和释放才是属于年轻人自己的腔调。</p>
						</div>
				</li>
			</ul>
      <p>
        <img src="../../../public/img/pd/ad-2.jpg" data-preview-src="" data-preview-group="1" />
      </p>
     <!--快优 多新-->
     <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
						<img class="mui-media-object " src="../../../public/img/icon/f-1.png">
				<span class="ban">半成品输出，极速配送</span>
				</li>
        	<li class="mui-table-view-cell mui-media">
						<img class="mui-media-object " src="../../../public/img/icon/f-2.png">
				<span class="ban">半成品输出，极速配送</span>
				</li>
        	<li class="mui-table-view-cell mui-media">
						<img class="mui-media-object " src="../../../public/img/icon/f-3.png">
				<span class="ban">半成品输出，极速配送</span>
				</li>
        	<li class="mui-table-view-cell mui-media">
						<img class="mui-media-object " src="../../../public/img/icon/f-4.png">
				<span class="ban">半成品输出，极速配送</span>
				</li>
			</ul>   
  
  </div>
</template>
<script>
  export default{
    data(){
      return {
        list:[]
      }
    },
    methods:{
      handleImage(){
        //1.发送请求
        var url="http://127.0.0.1:3000/imageList";
        this.axios.get(url).then(result=>{
          
          this.list=result.data;
        })
      }
    },
    created() {
      this. handleImage()
    },
  }
</script>
<style >

.app-home>ul>li>span.ban{color:#d7d7d7;font-size:16px;margin-left:40px;position:relative;top:-16px;}

/*轮播图*/ 
.app-home .mint-swipe{height:200px;}
 /*特色展示*/
.app-home, ul{background:url(../../../public/img/banner/show.png)} 
 /*要味道更要*/
 .app-home>ul>li div.xin p{font-size:12px;margin-top:10px;}
.app-home>ul>li>div.mui{color:#fff;text-align:center;border:0;}
 /*信息解释*/
.app-home>p>img{width:378px;}
.app-home>div.taste{text-align:center;}
.app-home>div.taste>img{width:300px;padding-top:10px;}
.app-home>ul>li div.xin{font-size:12px;height:160px;}
.app-home .mint-swipe img{ width:100%; height:180px; }
div.app-home ul li img{width:70px;}

 /*轮播图下图片*/
.brand1,.app-home>img{width:100%;height:100%;margin-top:-10;padding:0;display:block;}

</style>
   