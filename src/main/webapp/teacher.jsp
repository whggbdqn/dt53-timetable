<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" isELIgnored="false"%>
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

</head>

<body>
	<table border="1">

		<thead>
			<tr>
				<th>老师姓名</th>
				<th>老师电话</th>
				<th>所教科目</th>
				<th>所教班级</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${tlists }" var="t">
				<tr>
					<td>${t.teacherName }</td>
					<td>${t.teacherTel }</td>
					<td>${t.subjectname }</td>
					<td>${t.classname }</td>
				</tr>
			</c:forEach>
		</tbody>

	</table>

</body>
</html>
