// $.ajax({
//   url: '../other/header.txt',
//   type: 'GET',
//   success: function(data) {
//       $('.head').append(data);
//   }
// });
var header = `<div class="head-left">
				<span><img src="../images/logo.png"   alt=""></span>
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