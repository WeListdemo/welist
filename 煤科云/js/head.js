//  $.ajax({
//      url: 'head.txt',
//      type: 'GET',
//      success: function(data) {
//          $('header').append(data);
// var url = "http://192.168.1.222:20085/products/pruductclassify/listp";
// // 获取数据
//   $.post(url,function(data){
//     // 导航
//    var url = [{
//       url:"yunshichang-jichuruanjian.html"
//     },{
//       url:"yunshichang-kuangyongruanjian.html"
//     },{
//       url:"yunshichang-qiyeyingyong.html"
//     },{
//       url:"yunshichang-zhinengzhuangbei.html"
//     },{
//       url:"yunshichang-api.html"
//     },{
//       url:"yunshichang-fuwupeixun.html"
//     },{
//       url:"yunshichang-yidaimazhang.html"
//     },{
//       url:"yunshichang-ershoumeiji.html"
//     }]
//     var div = '';
//     for(var i = 0 ; i < data.data1.length ; i++){
//     	var li = '<li><a href="'+url[i].url+'">'+data.data1[i].name+'</a></li>'
//     	// ul li
//    		 $('.nav-classify>ul').append(li);
//     	// 左导航
// 	     div += '<div class="'+data.data1[i].productClassifyId+'"> <a href="'+url[i].url+'"> <span>'+data.data1[i].name+'</span><div class="cont-yinceng">';

// 	 	var newdata = 'data.data'+data.data1[i].productClassifyId;
// 	 	//转换为对象：
// 		var obj= eval('('+ newdata +')');
// 	    for(var j = 0 ; j < obj.length ; j++){
// 	    	div+=  '<span class="'+obj[j].pid+'">'+obj[j].name+'</span>';
// 	    }
// 			div +='</div></a></div>';
//     }
// 		$('.Classified-content').append(div);
//   });
//      }
//  });


 var header = `
    <div class="yunsc-head">
      <div class="yunsc-head-left">
         <a href="index.html"><span><img src="../images/logo.png"   alt=""></span>
        <span>煤科天地云</span></a>
      </div>
      <div class="yunsc-head-right">
        <ul>
          <li><a href="#">登录</a></li>
          <li><a href="#">导航</a></li>
          <li><a href="#">控制台</a></li>
        </ul>
      </div>
    </div>
  <nav>
    <div class="yunsc-nav-head">
      <div class="yunsc-head-one">
       <span><a href="yunshichang.html">云市场</a></span>
        <span>云计算的APPSTORE市场</span>
      </div>
      <div class="yunsc-head-mid">
        <p class="requirements"><input type="text" placeholder="在此输入您需要的服务"><input type="button" value="搜全部">或者<button type="button">发布指定需求</button></p>
        <p class="mod-Magic">
          <a href="#">手机网站</a>
          <a href="#">企业官网</a>
          <a href="#">PHP</a>
          <a href="#">JAVA</a>
          <a href="#">全能环境</a>
          <a href="#">linux</a>
          <a href="#">数据迁移</a>
          <a href="#">堡垒机</a>
        </p>
      </div>
      <div class="nav-classify">
        <span>云市场分类
        <div class="Classified-content">
        </div>
        </span>
        <ul class="c">
        </ul>
      </div>
    </div>
  </nav>`;
         $('header').append(header);
        var url = thead+"products/pruductclassify/listp";

// 获取数据
  $.post(url,function(data){
    // 导航
   var url = [{
      url:"yunshichang-jichuruanjian.html"
    },{
      url:"yunshichang-kuangyongruanjian.html"
    },{
      url:"yunshichang-qiyeyingyong.html"
    },{
      url:"yunshichang-zhinengzhuangbei.html"
    },{
      url:"yunshichang-api.html"
    },{
      url:"yunshichang-fuwupeixun.html"
    },{
      url:"yunshichang-yidaimazhang.html"
    },{
      url:"yunshichang-ershoumeiji.html"
    }]
    var div = '';
    for(var i = 0 ; i < data.data1.length ; i++){
      var li = '<li><a href="'+url[i].url+'">'+data.data1[i].name+'</a></li>'
      // ul li
       $('.nav-classify>ul').append(li);
      // 左导航
       div += '<div class="'+data.data1[i].productClassifyId+'"> <a class="'+url[i].url+'"> <span>'+data.data1[i].name+'</span><div class="cont-yinceng">';

    var newdata = 'data.data'+data.data1[i].productClassifyId;
    //转换为对象：
    var obj= eval('('+ newdata +')');
      for(var j = 0 ; j < obj.length ; j++){
        div+=  '<span class="'+obj[j].productClassifyId+'">'+obj[j].name+'</span>';
      }
      div +='</div></a></div>';
    }
    $('.Classified-content').append(div);

      // 点击导航
  $('.Classified-content>div>a>span').click(function(){
      window.location.href=$(this).parent().attr('class')
    
  })
  $('.cont-yinceng span').click(function(){
    localStorage.lastname=[$(this).text(),$(this).attr('class')];
      localStorage.firstname=[$(this).parent().prev().text(),$(this).parent().parent().parent().attr('class')];
      
  
      window.location.href="yunshichang-shangpinchaxun.html"
  })
  });