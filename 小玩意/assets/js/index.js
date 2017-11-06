 //分页函数
 const pageing = (a, b) => {
     let arr = [];
     const length = $('#page').attr('pagelistcount');
     for (let i = 0; i < length; i++) {
         if (a[i]) {
             arr.push(a[i]);
         }
     }
     XuanRan(arr);
     $("#page").initPage(a.length, b, (num) => {
         arr = [];
         for (var i = num * length - length; i < num * length; i++) {
             if (a[i]) {
                 arr.push(a[i])
             }
         }
         XuanRan(arr);
     })
 }



 //获取菜谱类别  -->页面加载完成之后调用
 const CaipuList = () => {
     $.ajax({
         type: 'get',
         url: 'http://apis.juhe.cn/cook/category?key=0895fb81a1301f193be161db8010d11e',
         success: function(data) {
             console.log(data.result);
             pageing(data.result, 1);
         }
     })
 }

 CaipuList();



 //渲染html函数

 const XuanRan = (data) => {
     $('.content').html('');
     for (let i = 0; i < data.length; i++) {
         $('.content').append('<li><div class="caipin" id="' + data[i].parentId + '">' + data[i].name + '</div></li>')
     }
 }