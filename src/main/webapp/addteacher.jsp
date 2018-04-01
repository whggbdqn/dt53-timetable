<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"
	isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="teacher/bootstrap.min.css" rel="stylesheet" type="text/css" />

<link href="teacher/bootstrap-responsive.min.css" rel="stylesheet"
	type="text/css" />

<link href="teacher/font-awesome.min.css" rel="stylesheet"
	type="text/css" />

<link href="teacher/style-metro.css" rel="stylesheet" type="text/css" />

<link href="teacher/style.css" rel="stylesheet" type="text/css" />

<link href="teacher/style-responsive.css" rel="stylesheet"
	type="text/css" />

<link href="teacher/default.css" rel="stylesheet" type="text/css"
	id="style_color" />

<link href="teacher/uniform.default.css" rel="stylesheet"
	type="text/css" />

<title>Insert title here</title>
</head>

<body>
	<h3>老师添加</h3>

	<form id="form1" name="form1" method="post" class="form-horizontal"
		action="addAllTeacher.do">

		<div class="form-wizard">

			<div class="control-group">
				<label class="control-label">老师姓名： </label>
				<div class="controls">
					<input type="text" class="span6" name="teacherName"
						id="teacherName" />
				</div>
			</div>

			<div class="control-group">
				<label class="control-label">老师电话： </label>
				<div class="controls">
					<input type="text" class="span6" name="teacherTel" id="teacherTel" />
				</div>
			</div>


			<div class="control-group">
				<label class="control-label">老师账号 </label>
				<div class="controls">
					<input type="text" class="span6" name="uname" id="uname" />
				</div>
			</div>

			<div class="control-group">
				<label class="control-label">老师密码: </label>
				<div class="controls">
					<input type="text" class="span6" name="pwd" id="pwd" />
				</div>
			</div>

			<div class="control-group">
				<label class="control-label">所教班级:</label>
				<div class="controls">
					<select name="classid">
						<c:forEach items="${clists }" var="c">
							<option value="${c.classid }">${c.classname }</option>
						</c:forEach>
					</select>
				</div>
			</div>

			<div class="control-group">
				<label class="control-label">所教科目:</label>
				<div class="controls">
					<select name="subjectid">
						<c:forEach items="${slists }" var="s">
							<option value="${s.subjectid }">${s.subjectname }</option>
						</c:forEach>
					</select>
				</div>
			</div>

			<div class="control-group">
				<label class="control-label"> 老师权限:</label>
				<div class="controls">

					<select name="rid">
						<option value="1">授课人员</option>
						<option value="2">排课人员</option>
						<option value="3">超级管理员</option>
					</select>
				</div>
			</div>

		</div>
		<button type="submit">保存</button>
	</form>

</body>
</html>
