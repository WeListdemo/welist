var nvabar = `<div class="head-one pull-left">
				<span></span> 全部导航
			</div>
			<!--导航-->
			<ul class="nav clearfix">
				<li id="m1" class="m">
					<h3><a target="_blank" href="">产品</a></h3>
					<div class="sub">
						
					</div>
				</li>
				<li id="m2" class="m">
					<h3><a  href="jiejuefangan.html">解决方案</a></h3>
					<div class="sub">
						1111
					</div>
				</li>
				<li id="m3" class="m">
					<h3><a target="_blank" href="yunshichang.html">云市场<i></i></a></h3>
					<div class="sub">
						
					</div>
				</li>

				<li id="m4" class="m">
					<h3><a target="_blank" href="hezuohuoban.html">合作伙伴<i></i></a></h3>
					
				</li>

				<li id="m5" class="m">
					<h3><a target="_blank" href="jishuzhichi.html">技术支持<i></i></a></h3>
					
				</li>
			</ul>`;
$('.navBar').html(nvabar);
//产品
$.ajax({
	cache: true,
	type: "POST",
	url: urlH + '/chanpin/productmenu/list',
	async: false,
	error: function(request) {
		console.log(status);
	},
	success: function(data) {
		var html = '';
		for(var i = 0; i < data.list.length; i++) {
			html += '<dl><a class="font-14" href="' + data.list[i].path + '">' + data.list[i].name + '</a></dl>';
		}

		$('#m1 .sub').html(html);
	}
});
//云市场
$.ajax({
	cache: true,
	type: "POST",
	url: urlH + '/products/pruductclassify/listp',
	async: false,
	error: function(request) {
		console.log(status);
	},
	success: function(data) {
		var html = '';
		var con = '';
		var obj = '';
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
			html += '<dl><dt><a href="yunshichang.html">' + data.data1[i].name + '市场</a></dt>';
			for(var j = 0; j < obj.length; j++) {
				html += '<dd><a href="' + ur + '?yid=' + obj[j].productClassifyId + '">' + obj[j].name + '</a></dd>'
			}
			html += '</dl>';
		}
		$('#m3 .sub').html(html);
	}
});
//解决方案
$.ajax({
	cache: true,
	type: "get",
	//	url:  urlH+'/solutions/solution/list',
	url: '../json/data.json',
	async: false,
	error: function(request) {
		console.log(status);
	},
	success: function(data) {
		console.log(data);
		var html = '';
		for(var i = 0; i < data.list.length; i++) {
			html += '<dl><dt><a href="jiejuefangan.html">' + data.list[i].name + '</a></dt>';
			$.ajax({
				cache: true,
				type: "get",
				//	url:  urlH+'/solutions/solution/list',
				url: '../json/erj.json',
				async: false,
				error: function(request) {
					console.log(status);
				},
				success: function(data) {
					for(var j = 0; j < data.list.length; j++) {
						html += '<dd><a href="jiejuefangan-nav2.html" class="font-14">' + data.list[j].name + '</a></dd>';
					}
				}
			})
			html += '</dl>';
		};
		$('#m2 .sub').html(html);
	}
});
//导航
jQuery(".nav").slide({
	type: "menu", //效果类型
	titCell: ".m", // 鼠标触发对象
	targetCell: ".sub", // 效果对象，必须被titCell包含
	effect: "slideDown", //下拉效果
	delayTime: 100, // 效果时间
	triggerTime: 0, //鼠标延迟触发时间
	returnDefault: true, //返回默认状态
	defaultIndex: false //底线初始位置

});
$('.nav>li').hover(function() {
	var wth = $(window).width();
	var le = $(this).offset().left;
	var mle = $(".nav #m3 .sub").offset().left;

	$('.nav #m1 .sub').css('width', wth + 'px');
	$('.nav #m1 .sub').css('left', '-' + le + 'px');
	$('.nav #m3 .sub').css('width', wth + 'px');
	$('.nav #m3 .sub').css('left', '-' + le + 'px');
});
$('.head-one').hover(function() {
	$(this).addClass('active')
	$('.sidebar-sub').addClass('active')
}, function() {
	$('.sidebar-sub').removeClass('active');
	$(this).removeClass('active')
});