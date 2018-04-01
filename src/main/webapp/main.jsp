<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%> 
 
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<html>
<head>
<%@ include file="common.jsp"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>排课系统</title>
</head>
<body class="hold-transition skin-blue sidebar-mini">
    <div class="wrapper">
        <header class="main-header">
		    <!-- Logo -->
		    <a href="index2.html" class="logo">
		      <!-- 缩小时显示 -->
		      <!-- <span class="logo-mini">Pkxt</span> -->
		      <!-- 正常显示 -->
		      <span class="logo-lg">光谷校区排课系统</span>
		    </a>
		    <!-- Header Navbar: style can be found in header.less -->
		    <nav class="navbar navbar-static-top">
		      <!-- Sidebar toggle button
		      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
		        <span class="sr-only">Toggle navigation</span>
		      </a> -->
		    </nav>
		 </header>
         
        <!-- 侧边栏信息 -->
        <aside class="main-sidebar">
            <!-- <li class="header">MAIN NAVIGATION</li> -->
                <section class="sidebar">
                    <!-- 用户头像信息栏 -->
                    <div class="user-panel">
				        <div class="pull-left image">
				          <img src="AdminLTE/user2-160x160.jpg" class="img-circle" alt="User Image">
				        </div>
				        <div class="pull-left info">
				          <p>${teacherName }<br>欢迎登录</p>
				        </div>
				      </div>
                     
                    <!-- 侧边栏按钮，ajax返回信息 -->
                    <ul class="sidebar-menu" id="sidebar-menu" data-widget="tree" style="color: #fff;">
                    	<c:forEach var="d" items="${rjs }">
                    		<c:if test="${d.jurisdiction.flag==0 }">
	                    		<li class="treeview">
                    				<a href="#" target="menuFrame">
	                    				<i class="fa fa-pie-chart"></i>
						            	<span>${d.jurisdiction.jname }</span>
							            <span class="pull-right-container">
							            	<i class="fa fa-angle-left pull-right"></i>
							            </span>
							       	</a>
						            <c:if test="${fn:length(d.jurisdiction.son)!=0}">
							            <ul class="treeview-menu">
							            	<c:forEach var="j" items="${d.jurisdiction.son }">
								            	<li><a href="${j.roleurl }" target="menuFrame"><i class="fa fa-circle-o"></i>${j.jname }</a></li>
								        	</c:forEach>
								        </ul>
							        </c:if>
						        </li>
					        </c:if>
                    	</c:forEach>
                    </ul>
                </section>
        </aside>
 
        <!-- 不能删除 -->
        <div class="content-wrapper" style="background-color: #fff;">
          <iframe src="showSchedule2.jsp" id="menuFrame" name="menuFrame" frameborder="0" style="overflow:visible;" scrolling="no" frameborder="yes" height="450%" width="100%"></iframe>
        </div>
 
        <!-- 页脚 -->
        <footer class="main-footer">
        <div class="pull-right hidden-xs">
            <b>Version</b> 2.3.12
        </div>
        <strong>Copyright © 2014-2016 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.
        </strong> All rights reserved. </footer>
 
    </div>
<!-- <script type="text/javascript">
 $(function(){
 	/* function loadjscssfile(filename, filetype) {
            if (filetype == "js") { //判定文件类型
                var fileref = document.createElement('script')//创建标签
                fileref.setAttribute("type", "text/javascript")//定义属性type的值为text/javascript
                fileref.setAttribute("src", filename)//文件的地址
            }
            else if (filetype == "css") { //判定文件类型
                var fileref = document.createElement("link")
                fileref.setAttribute("rel", "stylesheet")
                fileref.setAttribute("type", "text/css")
                fileref.setAttribute("href", filename)
            }
            if (typeof fileref != "undefined")
                document.getElementsByTagName("head")[0].appendChild(fileref);
        } */
    /* var d = null;
    var flag = false;    //标识，表示页面上数据还未处理完成
    $.ajax({
        url : "ttt3.do",
        type : "post",
        async : "false",
        data : {
        	"rId" : "${rId }"
        },
        success : function(data){
            d = data;
            var str = "";
            for(var i = 0; i < d.length; i++){
            	if(d[i].jurisdiction.flag==0){
            		str +="<li class='treeview'>";
            		str +="<i class='fa fa-pie-chart'></i>";
            		str +="<span>"+d[i].jurisdiction.jname+"</span>";
            		if(d[i].jurisdiction.son.length!=0){
            			str +="<span class='pull-right-container'>";
						str +="<i class='fa fa-angle-left pull-right'></i>";
						str +="</span>";            
						str	+="<ul class='treeview-menu'>";
						for(var j=0; j < d[i].jurisdiction.son.length; j++){
							str +="<li><a href='#'><i class='fa fa-circle-o'></i>"+d[i].jurisdiction.son[j].jname+"</a></li>";
						}
						str +="</ul></li>"
            		}
            	}
            }
            flag = true;
            $("#sidebar-menu").html(str);
        }
    },"json"); */
    
    
    /* var loadFile;
    loadFile = setInterval(function() {//定时检测    
         if(flag) {//如果数据已经处理完毕
             loadjscssfile('AdminLTE/bootstrap/dist/css/bootstrap.min.css', 'css'); //加载你的css文件
             loadjscssfile('AdminLTE/font-awesome/css/font-awesome.min.css', 'css'); //加载你的css文件
             loadjscssfile('AdminLTE/Ionicons/css/ionicons.min.css', 'css'); //加载你的css文件
             loadjscssfile('AdminLTE/css/AdminLTE.min.css', 'css'); //加载你的css文件
             loadjscssfile('AdminLTE/css/skins/_all-skins.min.css', 'css'); //加载你的css文件
             loadjscssfile('AdminLTE/morris.js/morris.css', 'css'); //加载你的css文件
             loadjscssfile('AdminLTE/jvectormap/jquery-jvectormap.css', 'css'); //加载你的css文件
             loadjscssfile('AdminLTE/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css', 'css'); //加载你的css文件
             loadjscssfile('AdminLTE/bootstrap-daterangepicker/daterangepicker.css', 'css'); //加载你的css文件
             loadjscssfile('AdminLTE/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css', 'css'); //加载你的css文件
             
             loadjscssfile('AdminLTE/jquery/dist/jquery.min.js', 'js'); //加载你的js文件
             loadjscssfile('AdminLTE/js/adminlte.min.js', 'js'); //加载你的js文件
             clearTimeout(t);//取消定时检测节省开销
         }
     },50); */
 });
</script> -->
</body>
</html>