<template>
  <div class="app-goodinfo">
      <!-- 轮播图   -->
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <!--调用子组件-->
						<swiper-box :rows="rows"></swiper-box>
					</div>
				</div>
			</div>    
    <!-- 商品信息 -->
    <div class="mui-card">
				<div class="mui-card-header">{{info.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						烤肉非常的美味，同时食用营养十分的丰富，受到了广大消费者的喜爱，那么烤天下加盟怎么样?烤天下加盟的创业者丝毫不必担心会有恶性竞争的行为，因为总店规定一段距离内只能有一家烤肉店的加盟，所以可以保证为创业者提供最大的利润。一个好的选择能够为你提供大量的利润和金钱，欢迎你的合作和加入。
					</div>
				</div>
				<div class="mui-card-footer">
          <div class="Message-Board">
            <div class="title">
              <h2>申请加盟烤天下</h2>
            </div>
              <div class="Board">
                <ul>
                  <li>
                    <div class="B-input">
                      <p>申请姓名：</p>
                      <input type="text" name="kh_name"><span>*</span>
                    </div>
                  </li>
                  <li>
                    <div class="B-input">
                      <p> 联系电话：</p>
                      <input type="text" name="kh_name"><span>*</span>
                    </div>
                  </li>
                  <li>
                    <div class="B-input">
                      <p> 所在城市：</p>
                      <select name="s_provinc" id="s_province">
                      <option value="请选择">请选择</option>
                        <option value="北京市">北京市</option>
                        <option value="天津市">天津市</option>
                        <option value="上海市">上海市</option>
                        <option value="重庆市">重庆市</option>
                        <option value="河北省">河北省</option>
                        <option value="陕西省">陕西省</option>
                        <option value="辽宁省">辽宁省</option>
                      </select>
                      <span>*</span>
                    </div>
                  </li>
                  <li classs="text">
                    <div class="B-input5">
                      <textarea name="kh_content" id="Message" placeholder="请编辑您的留言内容"></textarea>
                    </div>
                  </li>
                  <li class="send">
                    <input type="submit" value="立即留言" class="sub">
                  </li>
                </ul>
              </div>
          </div>
        </div>
			</div>
      <footer id="footer">
            <div class="container">
                <div class="copy">©AUI 京ICP备15006025号-1  更多模板：<a href="http://www.mycodes.net/" target="_blank"><font color="#ffffff">源码之家</font></a>
                </div>
                <div class="copy">
                    Copyright © 2012-2016 www.a-ui.cn <span>地址：北京市海淀区北三环西路43号中航广场6层</span>
                </div>
            </div>
        </footer>
  </div>
</template>
<script>
  //1:引入子组件  swiperBox.vue
 import swiperBox from "../sub/swiperBox.vue"
  export default {
    data(){
      return {
        rows:"",
        info:{},
       pid:this.$route.query.pid,
      }
    },
    created() {
      this.getImages();
      
    },
   methods:{
     
     getImages(){
       var pid=this.$route.query.pid;
       var url="http://127.0.0.1:3000/findProduct?pid="+this.pid;
       this.axios.get(url).then(result=>{
         console.log(result.data);
         this.rows=result.data;
         this.info=result.data[0];
       })
     }
   },
   components:{
     "swiper-box":swiperBox
   }
  
  }
</script>
<style>
.app-goodinfo{background:url(../../../public/img/banner/show.png)}
.app-goodinfo>div{width:100%;height:100%;background:url(../../../public/img/banner/show.png) }
.app-goodinfo img{width:49%;}
.mui-card{color:#fff;}

/*申请加盟*/
.Message-Board{
      width: 795px;
    height: auto;
    overflow: hidden;
    border: 1px solid #dcdcdc;
    padding-top: 34px;
   

}
.Message-Board .title{    width: 100%;
    height: auto;
    overflow: hidden;
    margin-bottom: 20px;}
    .Message-Board .title h2 {
    font-size: 26px;
    color: #474747;
    padding-left: 10px;
    border-left: 5px solid #d84f22;
    font-weight: normal;
    width: 100%;
    height: 26px;
    line-height: 22px;
    margin-left:10px;
}
.B-input p{float:left; margin-left:0px;margin-top:2px;}

.Message-Board  .Board {
    width: 100%;
    height: auto;
    overflow: hidden;
}
.Message-Board  .Board ul {
    width: 392px;
    height: auto;
    float: left;
}
.Board ul li {
    width: 100%;
    
    overflow: hidden;
    margin-bottom: 10px;
    margin-left:-20px;
}
.Board ul li .B-input:last-child {
    margin-right: 0;
}
B-input, .B-input1 {
    width: 390px;
    height: 38px;
}.
label {
    font-size: 14px;
    color: #474747;
    width: 84px;
    float: left;
    line-height: 38px;
}


.Board ul li .B-input input {
    width: 178px;
    height: 32px;
    float: left;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    resize: none;
    outline: none;
    margin-left: 8px;
    
    padding-left: 15px;
}


.Board ul li span {
    color: red;
    float: left;
    display: block;
    height: 100%;
    line-height: 38px;
    margin-left: 7px;
}



/*下拉列表*/

.Board ul li .B-input select {
     width: 178px;
    height: 37px;
    float: left;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    resize: none;
    outline: none;
    margin-left: 10px;
    font-size: 14px;
    color: #1b1919;
    padding-left: 15px;
    letter-spacing: 3px;
    
    
}
option{margin:0;padding:0;font-style: normal;}


.Board ul .text {
    width: 100%;
    height: 162px;
}

element.style {
}
.Board ul li .B-input5 {
    width: 100%;
    height: auto;
}
 .B-input5 textarea {
    width: 290px;
    height: 140px;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    resize: none;
    outline: none;
    float: left;
    padding: 10px;
    font-size: 14px;
    color: #9e9e9e;
}
.Board ul .send {
    width: 100%;
    height: 45px;
    
}
.Board ul li .sub {
    width: 285px;
    height: 39px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    line-height: 39px;
    background: #ffa13a;
    border-radius: 6px;
    border: none;
}
</style>