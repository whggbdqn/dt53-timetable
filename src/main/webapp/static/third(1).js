/**
 * 三级规则by bellayn
 */
//定义一个判断三层的二维数组。

	/*var classes=["DT53","DT54","DT55","DT56","DT57","DT58","DT59","DT60","DT61","DT62"];
	var teachers=["王建兵","雯雯","111","老张","老王","文小妞"];*/
    
	
	
	//调用总函数
	//judgeThird(third,classes,teachers);
		
		//var currentClass;//当前班级



	/**
	 * 异步获得所有老师
	 */
		
	var getAllTeacher = function(){
		var teacherArray=[];
		$.ajax({
			url:'json/QueryAllTeacherAjax.do',
			type:'post',
			dataType:'json',
			data:null,
			//异步请求设置为同步请求,解决传值出去的问题 
			async:false,
			success:function(data){
				
				if(data.length>0){
					for (var int = 0; int < data.length; int++) {
						teacherArray.push(data[int].teacherName);
					}					
				}				
			}			
		});	
		return teacherArray;
	}	
	
	
	 
					
//判断不能连续休息两天
	function judgeThird(td,third){
		
		//alert($(td).parent().find('.className').html());
		//当前上课班级
		var currentClass=$(td).parent().children().eq(2).text();
		//当前班级上午上课老师
		var currentTeacher_am=$(td).parent().children().eq(3).text();
		//当前班级下午班级
		var currentTeacher_pm=$(td).parent().children().eq(3).text();
		//如果二维数组的值大于1
		if(third.length>=1){
			//judgeClasses(third,currentClass);
			//判断不能连续上课两天
			if(judgeClasses(third,currentClass)){
					//判断老师一周至少有一天休息
					if(judgeTeachers(third,currentTeacher_am,currentTeacher_pm)){
						//判断一个班一周不能超过4天课
						judgeClassesDay(third,currentClass)
					}
				}
			
		}//if判断
	}//总判断函数
	
	//=========================================老师一周至少休息一天========================================>
	
	
	function judgeTeachers(third,currentTeacher_am,currentTeacher_pm){
			var flag=0;
			var sleep=true;
			var avalibleTeacher;//当前老师
			//var teachers=["王建兵","雯雯","111","老张","老王","文小妞","陈冠男","吴智超"];
			var teachers=getAllTeacher();

				//几天
			for(var a=0;a<teachers.length;a++){
				//数组里面的可用的天
				avalibleTeacher=teachers[a];
				//alert(currentTeacher);
				
				
					for(var i=0;i<third.length;i++){
						//周几的那个班
						for(var j=0;j<third[i].length;j++){
							var teacher_am=JSON.parse(third[i][j]).teachername_am;//获取所有上午上课的老师
							var teacher_pm=JSON.parse(third[i][j]).teachername_pm;//获取所有下午上课的老师
							//alert(teacher_am);
							//如果每个老师上午下午都没课就休息一天，满足老师至少有一天休息
							//alert(JSON.parse(third[i][j]).teachername_am);
							if(teacher_am!=avalibleTeacher&&teacher_pm!=avalibleTeacher){
								flag=0;//如若都不相等，符合老师休息一天，直接跳出二层循环，判断下一个老师。
								break;
							}else{//如果相等则跳出本次循环，判断下一天。
								flag=1;
								break;
							}//判断周几
							
							
						}//一层循环
						   if(flag==0){
							   sleep=true;
							   break;//符合老师休息一天,直接跳出二层循环，判断下一个老师
						   }else{
							   sleep=false;
							   continue;//不符合老师休息一天，判断下一个天
						   }
						
					}//二层循环
				if(sleep==false){
					if(third.length>=7)
					alert("请保证"+avalibleTeacher+"老师至少休息一天");
					continue;
				}
				
			}//三层循环
			 return true;
			}
				
		
	//判断班级不能连上2天课========================================================================》
	var defaultDay=2;
	var classDay=0;
	function judgeClasses(third,currentClass){
		var class_am;
		var weekDay;
		var truth=true;
		var secondFloor=0;
		
			var lesson=0;//记录是否上课
			var flagS=0;
			var classes=["星期一","星期二","星期三","星期四","星期五","星期六","星期日"];
				//几天
			for(var a=0;a<classes.length;a++){
				//数组里面的可用的天
				var avalibleDay=classes[a]
				
				for(var i=0;i<third.length;i++){
					//周几的那个班
					for(var j=0;j<third[i].length;j++){
						//获取当前周几
						weekDay=JSON.parse(third[i][j]).weekday;
						//获取当前班
						class_am=JSON.parse(third[i][j]).className_am;
						if(avalibleDay==weekDay){
							if(currentClass==class_am){
								classDay++;
									if(classDay>=2){
										
										lesson=1;//弹框标志
										break;
									}else{
										
										break;
									}
							}else{
								classDay=0;
								
							}//判断周几的课程
						}else{
							//classDay=0;
							secondFloor=1;
						}//判断周几
					}//一层循环
					
					   if(lesson==1){
						   truth=false;
						   continue;
					   }
					   if(secondFloor==1){
						   break;
					   }
					
				}//二层循环
				
				if(truth==false){
					alert(currentClass+"班一周内连续上课"+classDay+"天");
					break;
					//classDay=0;
				}
				
			}//三层循环
			return true;
		}

	

	//判断班级不能连续休息两天========================================================================》
	function judgeClassesSleep(third){
		var classes=["DT53","DT54","DT55","DT56","DT57","DT58","DT59","DT60","DT61","DT62"];
		var classes=getAllClasses();
		var class_am;
		var truth=true;
		//传过来的班级数组的长度
		for(var a=0;a<classes.length;a++){
			var currentClass=classes[a]; //循环数组里面的班级，判断该班级在每一天中是否有课
			var free=0;//二层循环判断标志
			var num=0;//一层循环判断的标志
			var sleepDay=0;//上课天数
			for(var i=0;i<third.length;i++){
				//星期几哪一个班
				for(var j=0;j<third[i].length;j++){
					class_am=JSON.parse(third[i][j]).className_am;//每一天中的每个班
					if(currentClass==class_am){
						sleepDay=0;
						num=0;
						break;
					}else{
						
						num=1;
						
					}
				}//一层for循环
				if(num==0){
					sleepDay=0;
					continue;
				}
				if(num==1){
					sleepDay++;
					//alert(currentClass+"....."+sleepDay);
					if(sleepDay>=2){
						free=1;
						break;
					}else{
						continue;
					}
				}
			}//二层for循环
			if(free==1){
				//if(third.length>=7)
				alert(currentClass+"班一周内不能连续休息"+sleepDay+"天");
				break;
			}
		}//三层
		return true;
	}
	
	
	//判断班级每个班一周只能四天课========================================================================》
	function judgeClassesDay(third,currentClass){
		var class_am;
		var truth=true;
		//传过来的班级数组的长度
		//for(var a=0;a<classes.length;a++){
			//currentClass=classes[a]; //循环数组里面的班级，判断该班级在每一天中是否有课
			var classDay=0;
			for(var i=0;i<third.length;i++){
				//星期几哪一个班
				for(var j=0;j<third[i].length;j++){
					class_am=JSON.parse(third[i][j]).className_am;//每一天中的每个班
					if(currentClass==class_am){
						classDay++;
						break;
					}
				}//一层for循环
				if(classDay>=4){
					alert(class_am+"班一周内上课不能超过"+classDay+"天");
					break;
					}
				
			}//二层for循环
			if(classDay>=4){
				truth=false;
				//break;
			}
		//}//三层
		if(truth==false){
			return false;
		}else{
			return true;
		}
	}
	