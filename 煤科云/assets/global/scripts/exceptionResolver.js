//统一异常处理
/*
 * 统一异常处理，不包括登录界面异常
 * @Param error 异常标识名
 * @Param errMsg 异常提示信息
 */
function exceptionResolver(error, errMsg){
	var loginWin;
	switch(error){
		case "unloginError":
			//bootbox.alert("您尚未登录，请先登录再操作！");
			Cookies.remove('secretkey');
			location.href = LOGIN_URL;
			// //判断是否打开  
            // if (loginWin == null || loginWin.closed) {  
                // loginWin = window.open(loginUrl);
            // } 
			break;
		case "refusedError":
			bootbox.alert(error+":"+"您没有此项操作的权限！");
			break;
		default:
			bootbox.alert(error+":"+errMsg);
	}
}