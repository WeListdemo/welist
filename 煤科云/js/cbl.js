//$.ajax({
//	url: '../other/cbl.txt',
//	type: 'GET',
//	success: function(data) {
var cl = `<ul class="sidebar-menu">
				<li id="cp" class="nav-item start">
					<a href="javascript:;">产品</a>
					<ul class="sub-menu-two sub-menu w-344">
						
					</ul>
					<span class="pull-right iconfont icon-jiantou-you"></span>
				</li>
				<li class="nav-item start">
					<a href="jiejuefangan.html">解决方案</a>
					<ul class="sub-menu sub-menu-two">
						
					</ul>
					<span class="pull-right iconfont icon-jiantou-you"></span>
				</li>
				<li id="yunsc" class="nav-item start">
					<a href="javascript:;">云市场</a>
					<ul class="sub-menu sub-menu-two">
						
					</ul>
					<span class="pull-right iconfont icon-jiantou-you"></span>
				</li>
				<li class="nav-item start">
					<a href="hezuohuban.html">合作伙伴</a>
					<!--<ul class="sub-menu">
						<li>
							<a href="#">二级</a>
						</li>
					</ul>-->
					<span class="pull-right iconfont icon-jiantou-you"></span>
				</li>
				<li class="nav-item start">
					<a href="javascript:;">技术支持</a>
					<!--<ul class="sub-menu">
						<li>
							<a href="#">二级</a>
						</li>
					</ul>-->
					<span class="pull-right iconfont icon-jiantou-you"></span>
				</li>
				<li class="nav-item start">
					<a href="javascript:;">了解我们</a>
					<!--<ul class="sub-menu">
						<li>
							<a href="#">二级</a>
						</li>
					</ul>-->
					<span class="pull-right iconfont icon-jiantou-you"></span>
				</li>
			</ul>`;
$('.sidebar-sub').html(cl);
//产品
$.ajax({
	cache: true,
	type: "POST",
	url: 'http://192.168.1.222:20085/chanpin/productmenu/list',
	async: false,
	error: function(request) {
		console.log(status);
	},
	success: function(data) {
		var html = '';
		for(var i = 0; i < data.list.length; i++) {
			html += '<li><a href="' + data.list[i].path + '">' + data.list[i].name + '</a></li>';
		}
		$('#cp .sub-menu').html(html);
	}
});
//云市场
$.ajax({
	cache: true,
	type: "POST",
	url: 'http://192.168.1.222:20085/products/pruductclassify/listp',
	async: false,
	error: function(request) {
		console.log(status);
	},
	success: function(data) {
		var html = '';
		var cod = '';
		var ur = '';
		for(var i = 0; i < data.data1.length; i++) {
			con = data.data1[i].productClassifyId;
			switch(con) {
				case 10:
					ur = '';
					break;
				case 13:
					ur = 'yunshichang-ershoumeiji.html';
					break;
				case 2:
					ur = 'yunshichang-qiyeyingyong.html';
					break;
				case 7:
					ur = 'yunshichang-jichuruanjian.html';
					break;
				case 11:
					ur = 'yunshichang-yidaimazhang.html';
					break;
				case 9:
					ur = 'yunshichang-zhinengzhuangbei.html';
					break;
				case 12:
					ur = 'yunshichang-api.html';
					break;
				case 8:
					ur = 'yunshichang-kuangyongruanjian.html';
					break;
			}
			obj = eval('(data.data' + con + ')');
			html += '<li><a href = "javascript:;">' + data.data1[i].name + '</a>';
			html += '<ul class="sub-menu sub-menu-three w-344">';
			for(var j = 0; j < obj.length; j++) {
				html += '<li><a href="' + ur + '?' + obj[j].productClassifyId + '">' + obj[j].name + '</a></li>'
			}
			html += '</ul>';
			html += '<span class = "pull-right iconfont icon-jiantou-you"></span></li>';
		}
		$('#yunsc .sub-menu').append(html);
	}
})
/*全部导航显示*/
$('.sidebar-sub').hover(function() {
	$('.head-one').addClass('active');
	$(this).addClass('active')
}, function() {
	$('.head-one').removeClass('active');
	$(this).removeClass('active')
})
/*二级显示*/
$('.sidebar-menu>li').hover(function() {
	$(this).find('.sub-menu-two').show();
	$(this).siblings().find('.sub-menu-two').hide();
}, function() {
	$(this).find('.sub-menu-two').hide();
})
/*三级显示*/
$('.sub-menu-two>li').hover(function() {
	$(this).find('.sub-menu-three').show();
	$(this).siblings().find('.sub-menu-three').hide();
}, function() {
	$(this).find('.sub-menu-three').hide();
})
//	}
//});