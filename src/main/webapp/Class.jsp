<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'Class.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
 <body>
	<班级管理>
	<button ><a href="addclass.jsp">添加</a></button>
	 <!--一周课表-->
	<table border="1">
	<tr>
	<td>班级编号</td>
	<td>班级名称</td>
	<td>班级人数</td>
	<td>教室编号</td>
	<td>教室名称</td>
	<td>教室可容纳人数</td>
	<td>是否可用</td>
	
	</tr>
	<c:forEach items="${list}" var="l">
	<tr>
	<td>${l.classid}</td>
	<td>${l.classname}</td>
	<td>${l.classnum}</td>
	<td>${l.classroomid}</td>
	<td>${l.availablenum}</td>
	<td>${l.classstate}</td>
	<td>${l.room_name}</td>
	<td><a href="deleteClass.do?classid=${l.classid}">删除</a> 
		<a href="update.do?classid=${l.classid}">修改</a></td>
	</tr>
	</c:forEach>
	</table>
  </body>
</html>
