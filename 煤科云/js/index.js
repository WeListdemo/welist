var header = `<div class="head-left">
				<span><a href="index.html"><img src="../images/logo.png"   alt=""></a></span>
				<span>煤科云</span>
			</div>
			<div class="head-right">
				<ul>
					<li>
						<a href="login.html">登录</a>
					</li>
					<li>
						<a href="#">导航</a>
					</li>
					<li>
						<a href="#">控制台</a>
					</li>
				</ul>
			</div>`;
$('.head').append(header);

//轮播
jQuery(".wang-banner").slide({
	titCell: ".hd ul",
	mainCell: ".bd ul",
	effect: "fold",
	autoPlay: true,
	autoPage: true,
	trigger: "click"
});
/*内容产品*/
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
			html += '<li class="pull-left">';
			html += '<a href="' + data.list[i].path + '">';
			html += '<div class="list-icon"><img src = "../img-icon/list-icon-' + i + '.png" / ></div> <p > ' + data.list[i].name + '</p></a>';
			html += '</li>';
		}

		$('.wang-server .wang-server-list>ul').html(html);
	}
});
/*内容云市场*/
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
		var qt = [];
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
			html += '<li class="pull-left"><div class="media-img"><img src="../img-icon/sole-icon-' + i + '.png"/></div>';
			html += '<div class="media-body"><h5><a href="' + ur + '">' + data.data1[i].name + '</a></h5>';
			obj = eval('(data.data' + con + ')');
			qt = obj.slice(0, 4);
			for(var j = 0; j < qt.length; j++) {
				if(j == 0) {
					html += '<p><a href="' + ur + '">' + qt[j].name + '</a> |';
				} else if(j == 1) {
					html += '<a href="' + ur + '">' + qt[j].name + '</a></p>';
				} else if(j == 2) {
					html += '<p><a href="' + ur + '">' + qt[j].name + '</a> |';
				} else if(j == 3) {
					html += '<a href="' + ur + '">' + qt[j].name + '</a></p>';
				}
			}
			qt = [];
			html += '</div></li>';
		}
		$('.software-server .software-server-list>ul').html(html);
	}
});

/*查看更多*/
$('.lock-all').click(function() {
	var txt = $(this).text();
	if(txt == '查看更多') {
		$(this).html('收起');
		$('.wang-server-list').css('height', 'auto')
	} else {
		$(this).html('查看更多')
		$('.wang-server-list').css('height', '470px')
	}
})
/*产看全部*/
$('.lock-all-2').click(function() {
	var txt = $(this).text();
	if(txt == '查看全部') {
		$(this).html('收起');
		$('.software-server-list').css('height', 'auto');
	} else {
		$(this).html('查看全部');
		$('.software-server-list').css('height', '360px');
	}
});
/*解决方案悬浮菜单*/
$('.xuanf-nav li').click(function() {
	$(this).addClass('on').siblings().removeClass('on');
})
$('.solveProgramme-content .Crumbs-nav li').click(function() {
	$('.xuanf-nav li').eq($(this).index()).addClass('on').siblings().removeClass('on');
})