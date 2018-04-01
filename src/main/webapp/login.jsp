<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<%@ include file="common.jsp"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>登录</title>
</head>
<body class="hold-transition login-page" style="background-image: url(AdminLTE/b.png);">
    <div class="login-box">
        <div class="login-logo">
            <!-- <b style="font-size: 24px;"><span style="color: #ff5534;font-size: 28px;">Rich</span> Science and Technology Ltd</b> -->
            <b style="font-family: '微软雅黑';color: #fff;">睿驰科技有限公司</b>
        </div>
        <!-- /.login-logo -->
        <div class="login-box-body">
            <p class="login-box-msg" style="font-family: '微软雅黑';">光谷校区排课系统</p>
                <div class="form-group has-feedback">
                    <input id="userName" type="text" class="form-control" placeholder="用户名">
                    <span id="msg" style="color: red"></span>
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input id="password" type="password" class="form-control" placeholder="密码">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-8">
                        <div class="checkbox icheck" style="margin-left:50px">
                            <label>
                                <input type="checkbox"> 记住我
                            </label>
                        </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-xs-4">
                        <button id="tj" type="button" class="btn btn-primary btn-block btn-flat">登录</button>
                    </div>
                </div>
        </div>
    </div>
 <script type="text/javascript">
	$(function(){
		$("#tj").click(function(){
			var userName = $("#userName").val();
	        var password = $("#password").val();
	        if(userName==""){
	        	$("#msg").html("账号不能为空");
	        }else if(password==""){
	        	$("#msg").html("密码不能为空");
	        }
			if(userName!=""&&password!=""){
				$.post("ttt.do",{"userName":userName,"password":password},function(data){
					if(parseInt(data[0])>0){
						$("#msg").html("");
						//alert(parseInt(data));
						location.href = "ttt4.do?rId="+parseInt(data[0])+"&teacherName="+data[1];
					}else{
						$("#msg").html("账号密码不正确，请从新输入");
					}
				},"json");
	        }
		});
	});
</script>   
</body>
</html>
 
