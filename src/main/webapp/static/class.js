/**
 * 课程表基础元素
 */

$(function() {
	
	//阻止浏览器默认右键点击事件
	$(".className,.teacherName,.classInfo").bind("contextmenu", function(){
	    return false;
	});
	
	document.oncontextmenu = function() {
	    return false;
	}
	
	$("td").mousedown(function(e) {
	    console.log(e.which);
	    //右键为3
	    if (3 == e.which) {
	        alert('111');
	    } else if (1 == e.which) {
	       
	    }
	});
	
	
	
	//双击【班级名称】表格事件
			$(document).off('dblclick','.className,.teacherName,.classInfo').on('dblclick','.className,.teacherName,.classInfo',function(){
				var parentNode=$(this);
				//console.log($(this).text());
				//点击班级框，执行的事件
				if($(this).hasClass("className")){
					
					openSelect($(this));
					changeSelect(parentNode);
				}
				//点击课程框，执行的事件
				if($(this).hasClass("classInfo")){
					getTeacherBySubjectAndClass($(this));
					
				}
				//console.log("11111111111"+$(this).parent().html());

			});
			
			
			
	/**
	 * 通过科目和班级确定老师
	 * td 当前点击的.classInfo表格
	 */		
	
	var getTeacherBySubjectAndClass = function(td){
		if($(td).text()!=""){
			//获取班级名
			var className = $(td).prev().prev().text();
			var subjectName = $(td).text();	
			
			if(className!="" && subjectName!=""){
				$.ajax({
				url:'json/QueryTeacher2.do',
				type:'post',
				dataType:'json',
				data:{'className':className,'subjectName':subjectName},
				success:function(data){
					if(data.length>0){
						//如果双击的课程信息在上午
						if($(td).index()==4){
							//如果老师名出现在上午
								if($(td).prev().text()==data[0].teacherName){
									//alert('111');
									//获取上午的老师和下午的老师名
									var tname_am = $(td).prev().text();
									var tname_pm = $(td).next().next().text();
									//获取上午的课程和下午的课程名
									var class_am = $(td).text();
									var class_pm = $(td).next().next().next().text();
									//将上午的老师名和下午的老师名对调
									$(td).prev().text(tname_pm);
									$(td).next().next().text(tname_am);
									//将上午的课程名和下午的课程名对调
									$(td).text(class_pm);	
									$(td).next().next().next().text(class_am);
									//alert($(td).parent().html());
									//需要获取当前数组中的这一行，并修改
									createRowJson($(td));
									
									
								}
	
						}
						
						//如果双击的课程信息在下午
						if($(td).index()==7){
							//如果老师名出现在下午
								if($(td).prev().text()==data[0].teacherName){
									//alert('111');
									//获取上午的老师和下午的老师名
									var tname_am = $(td).prev().prev().prev().prev().text();
									var tname_pm = $(td).prev().text();
									//获取上午的课程和下午的课程名
									var class_am = $(td).text();
									var class_pm = $(td).prev().prev().prev().text();
									//将下午的老师名和上午的老师名对调
									$(td).prev().prev().prev().prev().text(tname_pm);
									$(td).prev().text(tname_am);
									//将下午的课程名和上午的课程名对调
									$(td).text(class_pm);	
									$(td).prev().prev().prev().text(class_am);
									
									//需要获取当前数组中的这一行，并修改
									createRowJson($(td));
								}
	
						}
						
						
					}
				}	
			});	
			}
			
		}
		
		
		
	}		
			
			
	
	/**
	 * 通过班级名称获取老师和科目
	 * className 班级名
	 * td 当前编辑表格
	 */
	var getTeacherAndSubjectByClass = function(td,className){
		//debugger;
		//console.log(">>>>>>>>>>>>>>>>>"+$(td));
		//console.log($(td).parent().children());
		//console.log(className);
		//上午下午的老师姓名联动显示
		$(td).parent().children().eq(2).html(className);
		$(td).parent().children().eq(5).html(className);
		var teacherName="";
		var subjectname="";
		//表格中老师名的位置
		var teacherNum=[3,6];
		//表格中课程的位置
		var subjectNum=[4,7];
		if(className!=""){
			$.ajax({
			url:'json/QueryTeacher.do',
			type:'post',
			dataType:'json',
			data:{'className':className},
			success:function(data){
				if(data.length>0){
					console.log(data.length);
					for (var int = 0; int < data.length; int++) {
						//根据班级获得上午老师姓名
						$(td).parent().children().eq(teacherNum[int]).html(data[int].teacherName);
						//根据班级获得上午课程名
						$(td).parent().children().eq(subjectNum[int]).html(data[int].subjectname);
					}
					//根据班级获得上午老师姓名
					//$(td).parent().children().eq(3).html(teacherName);
					//根据班级获得上午课程名
					//$(td).parent().children().eq(4).html(subjectname);
					
					//在老师名字和相关课程填充完毕后，获取当前行的数据
					createRowJson($(td));
				}
			}	
		});	

		}
		
	}
	
	
	/**
	 * 创建select选择框
	 */		
	var openSelect=function(td){
		//如果td中没有多选框，进行操作
		if($(td).find("select").length==0){
			//1.获取所有节点
			var allNode = $(".className,.teacherName,.classInfo");
			//2.遍历所有节点，取消所有其他节点的选中状态
			allNode.each(function(index,element){
				//获取所有含有select的表格
				if($(this).find("select").length!=0){
					//将select的值通过改变html的方式赋给表格，相当于取消上一个表格的编辑状态
					var val=$(this).find("option:selected").html();
					//console.log(val);
					if($(this).find("option:selected").val()!='chooseClass'){
						$(this).html(val);
						//changeSelect($(this));
						
					}
				}
				
			});
			
			//获取当前一行的教室名
			var className=$(td).parent().children(".roomName").text();
			//console.log(className);
			//获取当前编辑的表格
			var $this=$(td);
			
			//------获取当前双击行所在的星期数
			var weekdata=$this.prev().text();
			//通过[]符号拆分得出的字符串，取第二个，即当前星期数
			var nowWeek=weekdata.split(/\[|\]/)[1];
			//console.log(nowWeek);
			
			//判断如果年级表格框选择的值不为‘请选择班级’ 且 年级表格框没有被select选中的值，才执行异步
			if(($(".className").find("option:selected").val()!='chooseClass') && ($(".className").find("option:selected").length==0)){
				
				$.ajax({
					url:'json/QueryClass.do',
					type:'post',
					dataType:'json',
					data:{'className':className},
					success:function(data){
						var classBox="<select style=\"width:170px;\"><option value =\"chooseClass\">请选择</option>";

						for(var i=0 ; i<data.length ; i++){
							//判断如果表格框里有值的时候，双击表格框，select中应该选中表格之前的值
							if($this.text()!="" && $this.text()==data[i].classname){
								classBox+="<option class=\"optionClass\" selected=\"selected\" value =\""+data[i].classId+"\">"+data[i].classname+"</option>";
								continue;
							}
							
							classBox+="<option class=\"optionClass\"  value =\""+data[i].classId+"\">"+data[i].classname+"</option>";						
						}	
						classBox+="</select>";
						$this.html(classBox);
					}	
				});	
			}
			
		}
	}
	
	
	/**
	 * 选择select的值之后，关闭select框的编辑状态
	 * selectBox select多选框的值
	 */
	var changeSelect = function(selectBox){
		
		/*$(selectBox).text();*/
		//console.log("------------------"+$(selectBox).text());
		//调用事件之前先解除绑定，避免事件重复调用出现的多值问题
		$(document).off('click','.optionClass').on('click','.optionClass',function(){
			var clickVal = $(this).parent().parent().html();
			//如果点击的值不为请选择年级和空，赋值给td
			if($(this).text()!="请选择年级" && $(this).text()!=""){
				$(this).parent().parent().html($(this).text());
				//获得老师和课程信息
				getTeacherAndSubjectByClass(selectBox,$(this).text());
				
			}

		});
		
	}
	
	/**
	 * 点击保存将数据全度存储到数据库
	 */
	$(document).off('click','#save').on('click','#save',function(){
		var classTable=[];
		for (var int = 1; int < 8; int++) {
			//将拼接的字符串还原为数组
			var obj=eval("("+"day"+int+"Box"+")");

			if(obj.length>0){
				classTable.push(obj);
				judgeThird(classTable);
			}
		}
		//转换为json字符串
		var json = JSON.stringify(classTable);

		//alert(json);
		saveClassTable(json);

		
	});
	
	/**
	 * 点击保存将数据全度存储到数据库
	 */
	var saveClassTable=function(classTable){
		$.ajax({
			url:'saveClassTable.do',
			type:'post',
			data:{'classTable':classTable},
			success:function(data){
				
			}	
		});	
	}
	
	

	
	/**
	 * 分发数组装载每天的数据
	 * td 当前td
	 * dayJson 每行的json
	 */
	//用来装一天范围的所有json格式数据,分7天装载
	var day1Box=[],day2Box=[],day3Box=[],day4Box=[],day5Box=[],day6Box=[],day7Box=[];
	
	var distributeToDayArray = function(td,dayJson){
		//由JSON字符串转换为JSON对象
		var jsonObj = JSON.parse(dayJson); 
		//获取当前时间
		var week = jsonObj.weekday;
		//获取当前教室
		var classroom = jsonObj.classroom;
		//不同时间段，分发进不同数组
		switch(week)
		{
		case '星期一':
			console.log(day1Box);
			if(day1Box.length>0){	
				for (var int = 0; int < day1Box.length; int++) {
					//如果数组中存在当前行的数据，则将数组中原来的数据重新赋值（修改）
					if(JSON.parse(day1Box[int]).classroom==classroom){
						day1Box[int]=dayJson;
						//alert(day1Box);
						//获取是否符合 同一时间，只能老师出现一次的规则
						var x = second(day1Box);
						if(x!=undefined){
							if(x==false){
								var children = $(td).parent().children();
								for (var int = 2; int < children.length; int++) {
									$(children[int]).text("");
								}
								
							}
							
						}
						
						return;
					}
				}
			}
			
			day1Box.push(dayJson);
			//alert(day1Box);
			var x = second(day1Box);
			if(x!=undefined){
				if(x==false){
					var children = $(td).parent().children();
					for (var int = 2; int < children.length; int++) {
						$(children[int]).text("");
					}
				}
			}
			var classTable=[];
			for (var int = 1; int < 8; int++) {
				//将拼接的字符串还原为数组
				var obj=eval("("+"day"+int+"Box"+")");

				if(obj.length>0){
					classTable.push(obj);
					judgeThird($(td),classTable);
				}
			}
			
		  break;
		case '星期二':
			console.log(day2Box);
			if(day2Box.length>0){	
				for (var int = 0; int < day2Box.length; int++) {
					//如果数组中存在当前行的数据，则将数组中原来的数据重新赋值（修改）
					if(JSON.parse(day2Box[int]).classroom==classroom){
						day2Box[int]=dayJson;
						//获取是否符合 同一时间，只能老师出现一次的规则
						var x = second(day2Box);
						if(x!=undefined){
							if(x==false){
								var children = $(td).parent().children();
								for (var int = 2; int < children.length; int++) {
									$(children[int]).text("");
								}
							}
							
						}
						return;
					}
				}
			}
			day2Box.push(dayJson);
			//获取是否符合 同一时间，只能老师出现一次的规则
			var x = second(day2Box);
			if(x!=undefined){
				if(x==false){
					var children = $(td).parent().children();
					for (var int = 2; int < children.length; int++) {
						$(children[int]).text("");
					}
				}
				
			}
			
			var classTable=[];
			for (var int = 1; int < 8; int++) {
				//将拼接的字符串还原为数组
				var obj=eval("("+"day"+int+"Box"+")");

				if(obj.length>0){
					classTable.push(obj);
					judgeThird($(td),classTable);
				}
			}
		  break;
		  
		case '星期三':
			if(day3Box.length>0){	
				for (var int = 0; int < day3Box.length; int++) {
					//如果数组中存在当前行的数据，则将数组中原来的数据重新赋值（修改）
					if(JSON.parse(day3Box[int]).classroom==classroom){
						day3Box[int]=dayJson;
						//获取是否符合 同一时间，只能老师出现一次的规则
						var x = second(day3Box);
						if(x!=undefined){
							if(x==false){
								var children = $(td).parent().children();
								for (var int = 2; int < children.length; int++) {
									$(children[int]).text("");
								}
							}
							
						}
						return;
					}
				}
			}
			day3Box.push(dayJson);
			//获取是否符合 同一时间，只能老师出现一次的规则
			var x = second(day3Box);
			if(x!=undefined){
				if(x==false){
					var children = $(td).parent().children();
					for (var int = 2; int < children.length; int++) {
						$(children[int]).text("");
					}
				}
				
			}
			var classTable=[];
			for (var int = 1; int < 8; int++) {
				//将拼接的字符串还原为数组
				var obj=eval("("+"day"+int+"Box"+")");

				if(obj.length>0){
					classTable.push(obj);
					judgeThird($(td),classTable);
				}
			}
			
			  break;
		case '星期四':
			if(day4Box.length>0){	
				for (var int = 0; int < day4Box.length; int++) {
					//如果数组中存在当前行的数据，则将数组中原来的数据重新赋值（修改）
					if(JSON.parse(day4Box[int]).classroom==classroom){
						day4Box[int]=dayJson;
						//获取是否符合 同一时间，只能老师出现一次的规则
						var x = second(day4Box);
						if(x!=undefined){
							if(x==false){
								var children = $(td).parent().children();
								for (var int = 2; int < children.length; int++) {
									$(children[int]).text("");
								}
							}
							
						}
						return;
					}
				}
			}
			day4Box.push(dayJson);
			//获取是否符合 同一时间，只能老师出现一次的规则
			var x = second(day4Box);
			if(x!=undefined){
				if(x==false){
					var children = $(td).parent().children();
					for (var int = 2; int < children.length; int++) {
						$(children[int]).text("");
					}
				}
				
			}
			
			var classTable=[];
			for (var int = 1; int < 8; int++) {
				//将拼接的字符串还原为数组
				var obj=eval("("+"day"+int+"Box"+")");

				if(obj.length>0){
					classTable.push(obj);
					judgeThird($(td),classTable);
				}
			}
			  break;
		case '星期五':
			if(day5Box.length>0){	
				for (var int = 0; int < day5Box.length; int++) {
					//如果数组中存在当前行的数据，则将数组中原来的数据重新赋值（修改）
					if(JSON.parse(day5Box[int]).classroom==classroom){
						day5Box[int]=dayJson;
						//获取是否符合 同一时间，只能老师出现一次的规则
						var x = second(day5Box);
						if(x!=undefined){
							if(x==false){
								var children = $(td).parent().children();
								for (var int = 2; int < children.length; int++) {
									$(children[int]).text("");
								}
							}
							
						}
						return;
					}
				}
			}
			day5Box.push(dayJson);
			//获取是否符合 同一时间，只能老师出现一次的规则
			var x = second(day5Box);
			if(x!=undefined){
				if(x==false){
					var children = $(td).parent().children();
					for (var int = 2; int < children.length; int++) {
						$(children[int]).text("");
					}
				}
				
			}
			
			var classTable=[];
			for (var int = 1; int < 8; int++) {
				//将拼接的字符串还原为数组
				var obj=eval("("+"day"+int+"Box"+")");

				if(obj.length>0){
					classTable.push(obj);
					judgeThird($(td),classTable);
				}
			}
			  break;
		case '星期六':
			if(day6Box.length>0){	
				for (var int = 0; int < day6Box.length; int++) {
					//如果数组中存在当前行的数据，则将数组中原来的数据重新赋值（修改）
					if(JSON.parse(day6Box[int]).classroom==classroom){
						day6Box[int]=dayJson;
						//获取是否符合 同一时间，只能老师出现一次的规则
						var x = second(day6Box);
						if(x!=undefined){
							if(x==false){
								var children = $(td).parent().children();
								for (var int = 2; int < children.length; int++) {
									$(children[int]).text("");
								}
							}
							
						}
						return;
					}
				}
			}
			day6Box.push(dayJson);
			//获取是否符合 同一时间，只能老师出现一次的规则
			var x = second(day6Box);
			if(x!=undefined){
				if(x==false){
					var children = $(td).parent().children();
					for (var int = 2; int < children.length; int++) {
						$(children[int]).text("");
					}
				}
				
			}
			
			var classTable=[];
			for (var int = 1; int < 8; int++) {
				//将拼接的字符串还原为数组
				var obj=eval("("+"day"+int+"Box"+")");

				if(obj.length>0){
					classTable.push(obj);
					judgeThird($(td),classTable);
				}
			}
			  break;
		case '星期日':
			if(day7Box.length>0){	
				for (var int = 0; int < day7Box.length; int++) {
					//如果数组中存在当前行的数据，则将数组中原来的数据重新赋值（修改）
					if(JSON.parse(day7Box[int]).classroom==classroom){
						day7Box[int]=dayJson;
						//获取是否符合 同一时间，只能老师出现一次的规则
						var x = second(day7Box);
						if(x!=undefined){
							if(x==false){
								var children = $(td).parent().children();
								for (var int = 2; int < children.length; int++) {
									$(children[int]).text("");
								}
							}
							
						}
						return;
					}
				}
			}
			day7Box.push(dayJson);
			//获取是否符合 同一时间，只能老师出现一次的规则
			var x = second(day7Box);
			if(x!=undefined){
				if(x==false){
					var children = $(td).parent().children();
					for (var int = 2; int < children.length; int++) {
						$(children[int]).text("");
					}
				}
				
			}
			
			var classTable=[];
			for (var int = 1; int < 8; int++) {
				//将拼接的字符串还原为数组
				var obj=eval("("+"day"+int+"Box"+")");

				if(obj.length>0){
					classTable.push(obj);
					judgeThird($(td),classTable);
				}
			}
			  break;

		}
		
	}

	
	//json数组 初始化=================================================================================================
	/**
	 * 创建行数据的json格式
	 * td 当前行的td
	 */
	
	var createRowJson=function(td){
		$td=$(td);
		if($(td)!=""){
			//装字段的数组,装当前星期数，教室名，上午，下午，晚上的班级名，老师名，年级信息
			var box=["weekday","classroom","className_am","teachername_am","classInfo_am","className_pm","teachername_pm","classInfo_pm","className_eve","teachername_eve","classInfo_eve"];
			$(td).parent().each(function(){
				var json="{";
				for (var int = 0; int < $(this).children("td").length; int++) {
					//循环获取一行的值
					var tdVal=$(this).children("td").eq(int).text();
					if(int==0){
						json+="\""+box[int]+"\":\""+tdVal.substring(tdVal.length-4, tdVal.length-1)+"\",";
					}
					if(int!=0){
						json+="\""+box[int]+"\":\""+tdVal+"\",";
					}
					
					//console.log($(this).children("td").eq(int).text());
					
				}
				//去掉最后一个逗号
				var newJson = json.substring(0,json.length-1);
				newJson+="}";
				
				//将json数据装入当天的json数组中
				distributeToDayArray($td,newJson);
				return newJson;
			});
			
			//console.log($(td).parent());
	
		}
	}
	
	
	
	
	
	//创建表格 初始化=================================================================================================
	var innerTbody=null;
	//获得静态课程表格
	$('#jsTimeTable tbody').html(createTbody(innerTbody));
	//创建静态课程表格
	function createTbody(tbody){
	
				//所有机房
					var rooms = {
							"一机房":1,
							"二机房":2,
							"三机房":3,
							"四机房":4,
							"五机房":5,
							"六机房":6,
							"七机房":7,
							"八机房":8,
							"11楼机房":9
						};

		
		var jf=0;//机房
		var weekflag=0;//显示星期的角标
		var day=-7; //控制当前日期的角标  -7代表下周一  ，0代表本周开始的星期数
		var weekflag2="";
		var dateText="";
		for(var i=0;i<63;i++){
			tbody+="<tr>";
			
			if(!(i%9==0))
			tbody+="<td class=\"week\" align=\"center\" style=\"display:none;\">"+dateText+"</td>";

			for(var j=0;j<9;j++){

				//用于纵向合并星期数
				if(j==0 && i%9==0){
				//获取本周时间 调用weekControll.js中的函数
					dateText = getTime(day,weekflag);
					tbody+="<td class=\"week\" align=\"center\" style=\"height：258px;line-height:258px;\" rowspan='9'>"+dateText+"</td>";

					weekflag2=dateText;



					weekflag++;
					day--;
					day==-7 ? day==0 : day;
					weekflag==8 ? weekflag==0 : weekflag;
				}
				//显示教室
				if(j==0){
					//获取json中的key值
					tbody+="<td class=\"roomName\" align=\"center\">"+Object.keys(rooms)[jf]+"</td>";
					jf++;
					jf==9 ? jf=0 : jf;
					
				}
				//设置所有班级名称的class
				if(j%3==0){
					tbody+="<td style=\"width:180px;\" class=\"className\"></td>";
				}
				//设置所有老师的class
				if(j%4==0){
					tbody+="<td style=\"width:180px;\" class=\"teacherName\"></td>";
				}
				
				//设置所有课程的class
				if(j==2 || j==5 || j==8){
					tbody+="<td style=\"width:180px;\" class=\"classInfo\"></td>";
				}	
				
			}
			tbody+="</tr>";
		}
		return tbody;
	}

	
});
	
	
	
