<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title></title>
		
		<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <link rel="stylesheet" href="static/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="static/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="static/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="static/AdminLTE.min.css">
  <!-- AdminLTE Skins. We have chosen the skin-blue for this starter
        page. However, you can choose any other skin. Make sure you
        apply the skin class to the body tag so the changes take effect. -->
  <link rel="stylesheet" href="static/_all-skins.min.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <!-- <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"> -->
<!--   <link rel="stylesheet" href="dist/css/googleCss.css"> -->
  <link rel="stylesheet" href="static/timetable.css">
    <link rel="stylesheet" href="static/css/smartMenu.css">
	</head>
	<body>
	<div id="show">
	  <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">课表</h3>
            </div>
             <input type="button" class="btn btn-block btn-primary" value="自动排课" id="auto"/> 
            <!-- <input type="button" class="btn btn-primary margin" value="自动排课" id="auto"/> -->
            <!-- /.box-header -->
            <div class="box-body color-palette">
                <div id="jsTimeTable">                
					<table class="table table-bordered table-hover">
					<thead>
					    <tr>
					      <th rowspan="2" class="center middle" width="200">日期</th>
					      <th rowspan="2" class="center middle">教室</th>
					      <th colspan="3">上午8:30-12:30</th>
					      <th colspan="3">下午2：00-6：00</th>
					      <th colspan="3">晚上6:30-8:30</th>
					    </tr>
					    <tr>
					    <th>班级名称</th><th>教师姓名</th><th>课程内容</th>
					    <th>班级名称</th><th>教师姓名</th><th>课程内容</th>
					    <th>班级名称</th><th>教师姓名</th><th>课程内容</th>
					    </tr>
					    </thead>
					    <tbody></tbody>
					</table>                
                </div>
        	</div>
		</div>
	</div>
</div>
    </div><!-- show方法结束 -->
    <input type="button" class="btn btn-primary pull-right" value="导出" id="save"/>
	<input type="button" class="btn margin btn-primary" value="清空课表" id="clean"/>
	<input type="button" class="btn btn-primary" value="发布课表" id="write"/>
	<!-- jQuery 3 -->
<script src="static/jquery.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="static/bootstrap.min.js"></script>
<!-- AdminLTE App -->
<script src="static/adminlte.min.js"></script>
<script type="text/javascript" src="static/timetable.js"></script>
<script type="text/javascript" src="static/weekControll.js"></script>
<!-- <script type="text/javascript" src="static/jquery-smartMenu.js"></script> -->
<script type="text/javascript" src="static/class.js"></script>
<script type="text/javascript" src="static/second.js"></script>
<script type="text/javascript" src="static/third.js"></script>
<script type="text/javascript" src="static/js.js"></script>
<!-- <script type="text/javascript" src="static/rightMouse.js"></script> -->
	<script type="text/javascript">
			
			
		

	</script>
</body>
</html>
