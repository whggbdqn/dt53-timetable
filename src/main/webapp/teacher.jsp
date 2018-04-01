<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"
	isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>

<head>
<base href="<%=basePath%>">

<title>My JSP 'teacher.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link rel="stylesheet" href="static/bootstrap.min.css">
<!-- Font Awesome -->
<link rel="stylesheet" href="static/font-awesome.min.css">
<!-- Ionicons -->
<link rel="stylesheet" href="static/ionicons.min.css">
<!-- Theme style -->
<link rel="stylesheet" href="static/AdminLTE.min.css">
<link rel="stylesheet" href="static/_all-skins.min.css">
<link rel="stylesheet" href="static/timetable.css">
<script src="static/jquery.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="static/bootstrap.min.js"></script>
<!-- AdminLTE App -->
<script src="static/adminlte.min.js"></script>
<script type="text/javascript" src="static/timetable.js"></script>
<script type="text/javascript" src="static/weekControll.js"></script>
<script type="text/javascript" src="static/class.js"></script>

</head>

<body>


	<div class="row">
		<div class="col-xs-12">
			<div class="box">
				<div class="box-header" >
					<h3 class="box-title">老师详情表</h3>
				</div>
				<table class="table table-bordered table-hover">

					<thead>
						<tr>
							<th>老师姓名</th>
							<th>老师电话</th>
							<th>所教科目</th>
							<th>所教班级</th>
							<th><a href="json/getCandS.do">添加</a></th>
						</tr>
					</thead>
					<tbody>
						<c:forEach items="${tlists }" var="t">
							<tr>
								<td>${t.teacherName }</td>
								<td>${t.teacherTel }</td>
								<td>${t.subjectname }</td>
								<td>${t.classname }</td>
								<td><a href="json/delTeacher.do?teacherclassid=${t.teacherclassid}">删除</a> <a
									href="json/soTeacher.do?teacherclassid=${t.teacherclassid}">修改</a></td>
							</tr>
						</c:forEach>
					</tbody>

				</table>
			</div>
		</div>
	</div>
</body>
</html>
