<template>
    <div class="app-about">
        <section id="greenx" class="Talents">
	<div class="container">
		<div class="item-title">
			<h1>诚聘英才</h1>
			<h3>Talents wanted</h3>
		</div>
		<div class="list">
			<div class="jobs-box"> <!-- jobs-box 循环列表 -->
				<div class="jobs-title">诚聘销售</div>
				<div class="jobs-content" style="display: block;">
					<div class="jobs-list clearfix">
						<ul>
							<li>职位月薪5000/月   </li>
							<li>工作地点：北京</li>
							<li>招聘人数：10人</li>
							<li>职位类别：电话销售</li>
						</ul>
					</div>
					<h3>岗位职责：</h3>
					<p>1、计算机相关专业，5年以上Java程序开发经验或web网站开发经验</p>
					<p>2、服从公司领导的安排，配合商务经理完成本部门各项产品销售任务</p>
					<p>3、能够与其他同事共同协作，充分把握客户需求，发掘潜在客户，共同完成部门销售目标</p>
					<h3>职位要求：</h3>
					<p>1、具备优秀的电话沟通技巧、表达技巧和销售技巧，普通话标准流利</p>
					<p>2、富有开拓精神和良好的团队合作意识，有很强的学习和沟通能力，良好的协调能力</p>
					<p>3、熟悉计算机和互联网络，有较强服务意识</p>
					<p>4、具有敬业精神，有强烈的竞争意识，能积极面对工作挑战</p>
					<p>5、有良好的职业素质、合作意识及团队精神</p>
					<p>以上职位一经录用，公司将提供广阔的发展空间和完善的福利待遇</p>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- Footer -->
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
<style>
#greenx {
    padding-top: 10px;
   
    background-image: url(../../../public/img/banner/show.png);
    background-repeat: no-repeat;
    background-size: 100%;
}
.container{margin:0 auto; text-align:center;}
.list {
    border-left: 4px solid #e6195c;
    background: rgba(106, 106, 106, 0.13) none repeat scroll 0 0;
}
.jobs-box,#philosophy {
    margin: 5px 0;  background-image: url(../../../public/img/banner/show.png);
}

.jobs-title {
    line-height: 23px;
    padding: 10px 15px;
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
    color: #fff;
	text-align:left;
}
.jobs-content {
    display: none;
    padding: 0 20px 30px 20px;
    line-height: 1.5;
    font-size: 14px;
}
.jobs-list ul li {
    float: left;
    padding-right: 40px;
    color: #fff;
    font-weight: 200;
    font-size: 12px;
}
.jobs-content h3 {
    line-height: 23px;
    padding-top:60px;
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
    color: #fff;
	text-align:left;
}
.jobs-content p {
    margin: 5px 20px 5px 0;
    color: #fff;
    font-weight: 200;
	text-align:left;
	padding-left:10px;
}
#footer{margin-top:-10px;}

</style>