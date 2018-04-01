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
	<h3 class="box-title">老师添加</h3>

	<form id="form1" name="form1" method="post" action="addClass.do">
		
		班级名称 <input type="text" name="classname" id="classname" /> <br />
		班级人数 <input type="text" name="classnum" id="classnum" /> <br />
		教室编号<input type="text" name="classroomid" id="classroomid" /> <br /> 
		教室名称 <input type="text" name="roomName" id="roomName" /> <br />
  教室可容纳人数 <input type="text" name="availablenum" id="availablenum" /> <br /> 
		
		<button type="submit">保存</button>
	</form>

</body>
</html>