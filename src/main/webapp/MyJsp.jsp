<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%> 
 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<%@ include file="common2.jsp"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>排课系统</title>
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
</head>
<body class="hold-transition skin-blue sidebar-mini">


    <section class="content-header">
      <h1>权限管理</h1>
      <!-- <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Forms</a></li>
        <li class="active">General Elements</li>
      </ol> -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-6" style="width: 100%;">
          <div class="box box-warning" style="box-shadow: none; width: 100%;">
            <!-- <div class="box-header with-border">
              <h3 class="box-title">General Elements</h3>
            </div> -->
            <div class="box-body">
              <form role="form">
	          	<div class="form-group">
	            	<label>教员名称</label>
	                  <select id="teacher" class="form-control" name="teacher">
	                    
	                  </select>
	           	</div>
	          	<div class="form-group">
	            	<label>角色名称</label>
	                  <select id="role" class="form-control" name="role">
	                    
	                  </select>
	           	</div>
	                
	                
                <label id="cd">可查看的菜单</label>
                <div id="an" class="box box-warning" style="border-radius:0;padding:12px;border:none;">
                  
                </div>
              </form>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!--/.col (right) -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
    
    <button id="button" type="button" class="btn btn-block btn-primary" disabled="disabled" style="width:80px;margin-left:26px;">提交</button>
    
    
  <script type="text/javascript">
  	$(function(){
	 	$.post("ttt5.do",null,function(data){
			var str = "<option>请选择教员</option>";
			for ( var i = 0; i < data.length; i++) {
				str += "<option value='"+data[i].teacherid+"'>";
				str += data[i].teacherName;
				str += "</option>";
			}
			$("#teacher").html(str);			
		},"json");
		
	 	$.post("ttt6.do",null,function(data){
			var str = "<option>请选择角色</option>";
			for ( var i = 0; i < data.length; i++) {
				str += "<option value='"+data[i].roleid+"'>";
				str += data[i].rolename;
				str += "</option>";
			}
			$("#role").html(str);			
		},"json");
		
		$("#teacher").change(function(){
			var teacherid = $(this).val();
			$.post("ttt7.do",{"teacherid" : teacherid},function(data){
				$("#role").children("option").each(function(){
		        	if($(this).val()==data.rid){
		        		$(this).attr("selected","selected");
		   			}
		 		});
		 		var str="";
		 		$.post("ttt3.do",{"rId":data.rid},function(data2){
		 			var d =data2;
		 			for(var i = 0; i < d.length; i++){
		            	if(d[i].jurisdiction.flag==0){
		            		str +="<p>"+d[i].jurisdiction.jname;
		            		if(d[i].jurisdiction.son.length!=0){
		            			str +="：";
								for(var j=0; j < d[i].jurisdiction.son.length; j++){
									str +=d[i].jurisdiction.son[j].jname+"&nbsp;&nbsp;";
								}
								str +="</P>"
		            		}
		            	}
            		}
            		$("#an").html(str);
		 		},"json");
			},"json");
    	});
    	
    	
    	$("#role").change(function(){
    		var rid = $("#role").val();
    		$("#button").removeAttr("disabled");
    		var str="";
	 		$.post("ttt3.do",{"rId":rid},function(data2){
	 			var d =data2;
	 			for(var i = 0; i < d.length; i++){
	            	if(d[i].jurisdiction.flag==0){
	            		str +="<p>"+d[i].jurisdiction.jname;
	            		if(d[i].jurisdiction.son.length!=0){
	            			str +="：";
							for(var j=0; j < d[i].jurisdiction.son.length; j++){
								str +=d[i].jurisdiction.son[j].jname+"&nbsp;&nbsp;";
							}
							str +="</P>"
	            		}
	            	}
           		}
           		$("#an").html(str);
	 		},"json");
    	});
    	
    	
    	$("#button").click(function(){
    		var teacherid = $("#teacher").val();
    		var rid = $("#role").val();
    		$.post("ttt8.do",{"rid":rid,"teacherid":teacherid},function(data){
    			if(parseInt(data)>0){
						alert("修改成功");
					}else{
						alert("修改失败");
					}
    		});
    	});
  	});
  
  </script>

</body>
</html>