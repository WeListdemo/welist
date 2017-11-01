
// ajax
var thead = "http://192.168.1.222:20085/";
// 商品列表
var url = thead+"products/pruductclassify/listp";
$(function(){

 $('.nav-classify>ul li a').on('click',function(e){
  	 		var index = $('.nav-classify>ul li a').index(this);
         	$('.nav-classify>ul li a').removeClass('active');
         	$(this).addClass('active');
         	$('.Classified-content>div').removeClass('act-p');
         	$('.Classified-content>div').eq(index).addClass('act-p');
    })
// 划过
   // $('.Classified-content>div span').click(function(){
   //      console.log($(this).text())
   //      console.log($(this).parent().prev('span').text())
   //    })
   // 点击导航样式
  // $('.nav-classify>ul li a').click(function(e){
  // 	 		var index = $('.nav-classify>ul li a').index(this);
  //        	$('.nav-classify>ul li a').removeClass('active');
  //        	$(this).addClass('active');
  //        	$('.Classified-content>div').removeClass('act-p');
  //        	$('.Classified-content>div').eq(index).addClass('act-p');
  //   })
	// 点击导航一级导航
	$('.Classified-content>div>a>span').on('click',function(){
	    window.location.href=$(this).parent().attr('class')
	})
	// 二级导航跳转
	$('.cont-yinceng').on('click','span',function(){
		localStorage.lastname=[$(this).text(),$(this).attr('class')];
      localStorage.firstname=[$(this).parent().prev().text(),$(this).parent().parent().parent().attr('class')];
    	 window.location.href="yunshichang-shangpinchaxun.html"
	})
	// 点击云市场 a  分类样式
	// 云市场查询
	// 一层全部
	$('.itemc').eq(0).on('click',function(){
			var ik = $(this).text();
			$('.itemc').hide();
			// 只显示1
			$('.itemc').eq(0).show();
			var lis = '';
			var liss = '';
			for(var i = 0 ; i < $('.Classified-content>div>a>span').length ; i++){
				lis += '<a class="'+$('.Classified-content>div').eq(i).attr("class")+'">'+$('.Classified-content>div>a>span').eq(i).text()+'</a>';
				liss += '<li class="'+$('.Classified-content>div').eq(i).attr("class")+'">'+$('.Classified-content>div>a>span').eq(i).text()+'</li>';
			}
			// 产品分类
			$('.fenleis').children('a').remove();
			$('.fenleis').append(lis);
			$('.itemCont').eq(0).find('ul').find('li').remove();
			$('.itemCont').eq(0).find('ul').append(liss);
			lis = '';
			liss = '';
			dianji();
			erdianji();
			sandianji();shuju();
	})
	// 点击分类2
	function erdianji(){

	$('.itemCont').eq(0).on('click','li',function(){
		var ik = $(this).text();
		console.log(ik);
		$('.itemc').eq(2).hide();
		$('.itemCont').eq(0).hide();
		$(this).parents('div').prev('span').text($(this).text()).attr('name',$(this).attr('class'));
		// 产品分类
			var index = '';
		    var twli = '';
		    var twlia = '';
		$.post(url,function(data){
		    for(var i = 0 ; i < data.data1.length ; i++){
		    		if(ik == data.data1[i].name){
		    			index = data.data1[i].productClassifyId;
		    		}
		    }

		    var newdata = 'data.data'+index;
		    var newdata = eval('('+ newdata +')');
		    for(var i = 0 ; i < newdata.length ; i++){
		    		twlia += '<a class="'+newdata[i].productClassifyId+'">'+newdata[i].name+'</a>';
		    		twli += '<li class="'+newdata[i].productClassifyId+'">'+newdata[i].name+'</li>';
		    }	
			$('.fenleis').children('a').remove();
			// $('.fenleis').children('a').remove();
	    	$('.fenleis').append(twlia)
			// $('.itemc').eq(2).find('itemCont').find('ul').find('li').append(twli)

		    	twlia = '';
		})
			dianji();
			sandianji();
			shuju();
	})
}
erdianji();
	// 点击分类3
	function sandianji(){

		$('.itemCont').eq(1).on('click','li',function(){
			var ik = $(this).text();
			$('.itemCont').eq(1).hide();
			$(this).parents('div').prev('span').text($(this).text()).attr('name',$(this).attr('class'));
			dianji();
shuju();
		})
	}
	sandianji();
// 点击a
	function dianji(){
	$('.fenleis ').on('click','a',function(){
				var thistext = $(this).text();
				var thistexts = $(this).attr('class');
				// 获取数据
					var newl = '';
					var index = '';
				    var twli = '';
				    var twlia = '';
				  $.post(url,function(data){
				  	for(var i = 0 ; i <data.data1.length ;i ++){

					   	if(thistext == data.data1[i].name){
		    				index = data.data1[i].productClassifyId;
			   				$('.itemc').eq(1).find('span').text(thistext).attr('name',index);
					   		// 显示2
					   		$('.itemc').show();
					   		$('.itemc').eq(2).hide();
					   	  	var newdata = 'data.data'+index;
					    	 newdata = eval('('+ newdata +')');
						    for(var i = 0 ; i < newdata.length ; i++){
						    		twli += '<li  class="'+newdata[i].productClassifyId+'">'+newdata[i].name+'</li>';
						    		twlia += '<a  class="'+newdata[i].productClassifyId+'">'+newdata[i].name+'</a>';
						    }	
							$('.itemc').eq(2).find('itemCont').find('ul').find('li').remove();
							$('.itemc').eq(2).find('itemCont').find('ul').append(twli);
							$('.fenleis').find('a').remove();
							$('.fenleis').append(twlia);
							twlia = '';
							twli= '';
			   		
					   	}  else{
					   		$('.itemc').show();
			   				$('.itemc').eq(2).find('span').text(thistext).attr('name',thistexts);
			   				var newl = '';
							for(var b = 0 ; b <$(".fenleis a").length ; b++){
								newl += '<li  class="'+$(".fenleis a").eq(b).attr("class")+'">'+$('.fenleis a').eq(b).text()+'</li>'
							}
							$('.itemc').eq(2).find('.itemCont').find('ul').find('li').remove();
							$('.itemc').eq(2).find('.itemCont').find('ul').append(newl);
							newl = '';
			   				
					   	}

				  	}
				  });
				  shuju();
	})


}
dianji();

// 划过左菜单
$('.jichuruanjian-software dl').hover(function(){
	$(this).find('.ceng').css({
		'background':' rgba(72, 157, 206, 0.73)'
	})
	$(this).find('p').eq(0).css({
		'animation':'0.6s fadeInDown'
	})
	$(this).find('p').eq(1).css({
		'animation':'0.6s fadeInUp'
	})
},function(){
	$(this).find('.ceng').css({
		'background':' rgba(0,0,0,0.5)'
	})
	$(this).find('p').eq(0).css({
		'animation':'none'
	})
	$(this).find('p').eq(1).css({
		'animation':'none'
	})
})

// 划过
$('.nctCont>div').hover(function(){
	$('.conHead p').css({
		'animation':'0.6s fadeInUp'
	})
})
// 划过全部分类
$('.itemc').hover(function(){
	$(this).find('.daosj').css({
		'background':'#2c8afa url(../images/sgdfgw.png) no-repeat 65px center/12px 6px',
		'color':'white'
	})
	$(this).find('.itemCont').show()
},function(){
	$(this).find('.daosj').css({
		'background':'#fff url(../images/sgdfg.png) no-repeat 65px center/12px 6px',
		'color':''
	})
	$(this).find('.itemCont').hide()
})







// 云市场点击分类
$('.collectionC .tabsone tr td a').click(function(){
	console.log($(this))
	$(this).siblings().css({
		'background':'white',
		'color':'#333'

	})
	$(this).css({
		'background':'#2c8afa',
		'color':'white'
	})
})
$('.fenleis a').click(function(){
	$('.fenleis').css({
		'background':'white',
		'color':'#333'

	})
})

// 获取数据
function shuju(stac){
	 console.log(stac);
	var urls  = thead+"products/product/list";
	 typ = {
		'length':20,
		'productClassifyId':$('.daosj').eq(1).attr('name'),
		'productClassifyIdp':$('.daosj').eq(0).attr('name'),
		'newPriceMin':0,
		'start':stac
	}
	// 点击默认显示
	$.post(urls,typ,function(data){
		var tr = '';
		console.log(data.data);
			var tiaoshu = Math.ceil(data.data.length/10);
		if(data.data.length < 1){
			tr += '<tr class="">\
					<td class="">\
							<div>未找到您需要的商品</div>\
						</td>\
					</tr>';
		} else{

		for(var i= 0 ; i < data.data.length ; i++){
			console.log(i);
			if(i <= 9){

			tr += '<tr class="'+data.data[i].productClassifyId+'">\
					<td class="'+data.data[i].productId+'">\
							<div>\
								<img src="../images/1yunshuju.png" alt="">\
							</div>\
							<div>\
								<div class="tab-o ">\
										<h3>'+data.data[i].name+'</h3>\
									<p>\
										<b>版本号：'+data.data[i].banbenname+'</b>\
										<b>交付方式：SAAS</b>\
									</p> \
									<p>'+data.data[i].summary+'</p>\
									<p>为用户提供无限量云端存储空间及加密云存储服务</p>\
									<p>'+data.data[i].sjtime+'</p>\
									<p>服务商：<span><a href="#">煤科天地科技有限公司</a></span></p>\
									<p><a href="#">'+data.data[i].delivery+'</a></p>\
								</div>\
								<div class="tab-tr">\
									<h3></h3>\
									<span>￥'+data.data[i].newprice+'元</span>\
								</div>\
							</div>\
						</td>\
					</tr>';
}
			}
		}
			$('.formTab').find('tr').remove();
			$('.formTab').append(tr);
			tr = '';
			// 序号
			$(".tcdPageCode").createPage({
		        pageCount:tiaoshu,
		        current:1,
		        backFn:function(p){
		        	p =	p ?  p :1;
		        	stac = p*10-10;
		        	shuju(stac)
		        }
		    });


		})
 

}
shuju();
	
		    // 页面转换  下一页 上一页
function fenye(){

}
fenye();
// 按条件查找  价格
function  price(){
	$('.collectionC .tabsone tr').eq(1).find('td').eq(1).find('a').on('click',function(){
		var pricearr = $(this).text().split('-');
		var typ = {};
		if(pricearr.length <= 1){
			if(pricearr[0] == '全部'){
				 typ= {
					'length':20,
					'productClassifyId':$('.daosj').eq(1).attr('name'),
					'productClassifyIdp':$('.daosj').eq(0).attr('name'),
					'newPriceMin':0,
				}
			} else if(pricearr[0] == '免费'){
					 typ= {
					'length':20,
					'productClassifyId':$('.daosj').eq(1).attr('name'),
					'productClassifyIdp':$('.daosj').eq(0).attr('name'),
					'newPriceMin':0,
					'newPriceMax':0
				}
			} else if(pricearr[0] == '3998以上'){
					 typ= {
					'length':20,
					'productClassifyId':$('.daosj').eq(1).attr('name'),
					'productClassifyIdp':$('.daosj').eq(0).attr('name'),
					'newPriceMin':3998,
				}
			}
		}  else{
			 typ= {
					'length':20,
					'productClassifyId':$('.daosj').eq(1).attr('name'),
					'productClassifyIdp':$('.daosj').eq(0).attr('name'),
					'newPriceMin':pricearr[0],
					'newPriceMax':pricearr[1],
				}
		}
		console.log(typ);
var urls  = thead+"products/product/list";
	
	// 点击默认显示
	$.post(urls,typ,function(data){
		var tr = '';
		console.log(data.data);
		if(data.data.length < 1){
			tr += '<tr class="">\
					<td class="">\
							<div>未找到您需要的商品</div>\
						</td>\
					</tr>';
		} else{

		for(var i= 0 ; i < data.data.length ; i++){
			tr += '<tr class="'+data.data[i].productClassifyId+'">\
					<td class="'+data.data[i].productId+'">\
							<div>\
								<img src="../images/1yunshuju.png" alt="">\
							</div>\
							<div>\
								<div class="tab-o ">\
										<h3>'+data.data[i].name+'</h3>\
									<p>\
										<b>版本号：'+data.data[i].banbenname+'</b>\
										<b>交付方式：SAAS</b>\
									</p> \
									<p>'+data.data[i].summary+'</p>\
									<p>为用户提供无限量云端存储空间及加密云存储服务</p>\
									<p>'+data.data[i].sjtime+'</p>\
									<p>服务商：<span><a href="#">煤科天地科技有限公司</a></span></p>\
									<p><a href="#">'+data.data[i].delivery+'</a></p>\
								</div>\
								<div class="tab-tr">\
									<h3></h3>\
									<span>￥'+data.data[i].newprice+'元</span>\
								</div>\
							</div>\
						</td>\
					</tr>';

			}
		}
			$('.formTab').find('tr').remove();
			$('.formTab').append(tr);
			tr = '';
		})
	})

}
price();

// 查询
function chaxun(){
	$('.requirements input').eq(1).click(function(){
		console.log($(this).prev('input').val());
		 typ= {
					'length':20,
					'productClassifyId':$('.daosj').eq(1).attr('name'),
					'productClassifyIdp':$('.daosj').eq(0).attr('name'),
					'name':$(this).prev('input').val()
				}
	})
}
chaxun();
})
