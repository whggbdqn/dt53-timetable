<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"
	isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>

<body>
	<h3 class="box-title">老师修改</h3>

	<form id="form1" name="form1" method="post"  action="updateTeacher.do?teacherid=${teacher.teacherid}&&teacherclassid=${teacherclassid }">

		老师姓名 <input type="text" name="teacherName" id="teacherName"  value="${teacher.teacherName}"/><br />
		老师电话 <input type="text" name="teacherTel" id="teacherTel" value="${teacher.teacherTel}"/><br />
		所教科目 <select name="subjectid">
			<c:forEach items="${slists }" var="s">
				<option value="${s.subjectid }">${s.subjectname }</option>
			</c:forEach>
		</select> <br />
        所教班级 <select name="classid">

			<c:forEach items="${clists }" var="c">
				<option value="${c.classid }">${c.classname }</option>
			</c:forEach>

		</select>

<button type="submit">保存</button>
	</form>

</body>
</html>