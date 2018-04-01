<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h3 class="box-title">教室修改</h3>

	<form id="form1" name="form1" method="post"  action="updateClass.do?classid=${class.classrid}">

		班级名称 <input type="text" name="classname" id="classname"  value="${teacher.teacherName}"/><br />
		班级人数 <input type="text" name="classnum" id="classnum" value="${teacher.teacherTel}"/><br />
		教室名称 <input type="text" name="roomName" id="roomName" value="${teacher.teacherTel}"/><br />
  教室可容纳人数 <input type="text" name="availablenum" id="availablenum" value="${teacher.teacherTel}"/><br />
		

<button type="submit">保存</button>
	</form>

</body>

</html>