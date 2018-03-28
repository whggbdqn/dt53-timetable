/**
 * 三级规则by bellayn
 */
//定义一个判断三层的二维数组。
/*var third=[[
          {"weekday":"星期一","classroom":"一机房","className_am":"DT58","teachername_am":"王建兵","classInfo_am":"正课","className_pm":"DT53","teachername_pm":"雯雯","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
          {"weekday":"星期一","classroom":"二机房","className_am":"DT54","teachername_am":"雯雯","classInfo_am":"自习","className_pm":"DT53","teachername_pm":"王建兵","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""},
          {"weekday":"星期一","classroom":"三机房","className_am":"DT55","teachername_am":"111","classInfo_am":"正课","className_pm":"DT55","teachername_pm":"老刘","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
          {"weekday":"星期一","classroom":"四机房","className_am":"DT57","teachername_am":"老张","classInfo_am":"自习","className_pm":"DT56","teachername_pm":"111","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""}
    ],[
       {"weekday":"星期二","classroom":"二机房","className_am":"DT58","teachername_am":"王建兵","classInfo_am":"正课","className_pm":"DT53","teachername_pm":"雯雯","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
       {"weekday":"星期二","classroom":"二机房","className_am":"DT54","teachername_am":"雯雯","classInfo_am":"自习","className_pm":"DT53","teachername_pm":"王建兵","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""},
       {"weekday":"星期二","classroom":"三机房","className_am":"DT55","teachername_am":"111","classInfo_am":"正课","className_pm":"DT55","teachername_pm":"老刘","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
       {"weekday":"星期二","classroom":"四机房","className_am":"DT58","teachername_am":"老张","classInfo_am":"自习","className_pm":"DT56","teachername_pm":"111","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""}
 ],[
    {"weekday":"星期三","classroom":"三机房","className_am":"DT53","teachername_am":"王建兵","classInfo_am":"正课","className_pm":"DT53","teachername_pm":"雯雯","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
    {"weekday":"星期三","classroom":"二机房","className_am":"DT54","teachername_am":"雯雯","classInfo_am":"自习","className_pm":"DT53","teachername_pm":"王建兵","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""},
    {"weekday":"星期三","classroom":"三机房","className_am":"DT55","teachername_am":"111","classInfo_am":"正课","className_pm":"DT55","teachername_pm":"老刘","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
    {"weekday":"星期三","classroom":"四机房","className_am":"DT58","teachername_am":"老张","classInfo_am":"自习","className_pm":"DT56","teachername_pm":"111","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""}
],[
   {"weekday":"星期四","classroom":"四机房","className_am":"DT53","teachername_am":"王建兵","classInfo_am":"正课","className_pm":"DT56","teachername_pm":"雯雯","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
   {"weekday":"星期四","classroom":"二机房","className_am":"DT54","teachername_am":"雯雯","classInfo_am":"自习","className_pm":"DT53","teachername_pm":"王建兵","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""},
   {"weekday":"星期四","classroom":"三机房","className_am":"DT55","teachername_am":"111","classInfo_am":"正课","className_pm":"DT55","teachername_pm":"老刘","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
   {"weekday":"星期四","classroom":"四机房","className_am":"DT58","teachername_am":"老张","classInfo_am":"自习","className_pm":"DT56","teachername_pm":"111","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""}
],[
   {"weekday":"星期五","classroom":"五机房","className_am":"DT56","teachername_am":"王建兵","classInfo_am":"正课","className_pm":"DT56","teachername_pm":"333","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
   {"weekday":"星期五","classroom":"二机房","className_am":"DT54","teachername_am":"雯雯","classInfo_am":"自习","className_pm":"DT53","teachername_pm":"222","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""},
   {"weekday":"星期五","classroom":"三机房","className_am":"DT55","teachername_am":"111","classInfo_am":"正课","className_pm":"DT55","teachername_pm":"老刘","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
   {"weekday":"星期五","classroom":"四机房","className_am":"DT58","teachername_am":"老张","classInfo_am":"自习","className_pm":"DT56","teachername_pm":"111","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""}
],[
   {"weekday":"星期五","classroom":"五机房","className_am":"DT56","teachername_am":"王建兵","classInfo_am":"正课","className_pm":"DT56","teachername_pm":"333","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
   {"weekday":"星期五","classroom":"二机房","className_am":"DT54","teachername_am":"雯雯","classInfo_am":"自习","className_pm":"DT53","teachername_pm":"222","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""},
   {"weekday":"星期五","classroom":"三机房","className_am":"DT55","teachername_am":"111","classInfo_am":"正课","className_pm":"DT55","teachername_pm":"老刘","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
   {"weekday":"星期五","classroom":"四机房","className_am":"DT58","teachername_am":"老张","classInfo_am":"自习","className_pm":"DT56","teachername_pm":"111","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""}
],[
   {"weekday":"星期五","classroom":"五机房","className_am":"DT56","teachername_am":"王建兵","classInfo_am":"正课","className_pm":"DT56","teachername_pm":"333","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
   {"weekday":"星期五","classroom":"二机房","className_am":"DT54","teachername_am":"雯雯","classInfo_am":"自习","className_pm":"DT53","teachername_pm":"222","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""},
   {"weekday":"星期五","classroom":"三机房","className_am":"DT55","teachername_am":"111","classInfo_am":"正课","className_pm":"DT55","teachername_pm":"老刘","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
   {"weekday":"星期五","classroom":"四机房","className_am":"DT58","teachername_am":"老张","classInfo_am":"自习","className_pm":"DT56","teachername_pm":"111","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""}
]];
*/

	/*var classes=["DT53","DT54","DT55","DT56","DT57","DT58","DT59","DT60","DT61","DT62"];
	var teachers=["王建兵","雯雯","111","老张","老王","文小妞"];*/
    
	
	
	//调用总函数
	//judgeThird(third,classes,teachers);
		var flag=0;
		
		var currentTeacher;//当前老师
		var currentClass;//当前班级
	function judgeThird(td,third){
		//alert($(td).parent().find('.className').html());
		//当前上课班级
		var currentClass=$(td).parent().children().eq(2).text();
		//当前班级上午上课老师
		var currentTeacher_am=$(td).parent().children().eq(2).text();
		//当前班级下午班级
		var currentTeacher_pm=$(td).parent().children().eq(2).text();
		//var classes=["DT53","DT54","DT55","DT56","DT57","DT58","DT59","DT60","DT61","DT62"];
		//var teachers=["王建兵","雯雯","111","老张","老王","文小妞"];
		
		//如果二维数组的值大于1
		if(third.length>1){
			
			//判断老师一周至少有一天休息
			//judgeTeachers(third,teachers);
			if(judgeTeachers(third,currentTeacher_am,currentTeacher_pm)){
				//判断不能连续上课两天
				if(judgeClasses(third,currentClass)){
					//判断不能连续休息两天
					//judgeClassesSleep(third,classes);
					if(judgeClassesSleep(third,currentClass)){
						//判断一个班一周不能超过4天课
						//judgeClassesDay(third,classes);
						judgeClassesDay(third,currentClass)
					}
				}
			}
		}//if判断
	}//总判断函数
	
	//先判断老师一周至少有一天休息===========================================================》
	
	function judgeTeachers(third,currentTeacher_am,currentTeacher_pm){
		var truth=true;
		//for(var a=0;a<teachers.length;a++){
			//遍历所有的老师，看上课的老师与这个老师是否匹配，如果不匹配就说明该老师今天休息，符合。
			 //currentTeacher=teachers[a];
			for (var i=0; i < third.length; i++) {
				for(var j=0;j<(third[i].length);j++){
					var teacher_am=JSON.parse(third[i][j]).teachername_am;//获取所有上午上课的老师
					var teacher_pm=JSON.parse(third[i][j]).teachername_pm;//获取所有下午上课的老师
					if(teacher_am!=currentTeacher_am&&teacher_pm!=currentTeacher_am){
						//如果每个老师上午下午都没课就休息一天，满足老师至少有一天休息
						flag=0;
					}else{
						//说明该老师每天都上课，给出提示，结束当前循环
						flag=1;
						break;
					}
				}//一层
			}//二层
			if(flag==1){
				alert("请保证"+currentTeacher_am+"老师至少休息一天");
				truth=false;
				//break;
			}
			
			
			
			
			for (var i=0; i < third.length; i++) {
				for(var j=0;j<(third[i].length);j++){
					var teacher_am=JSON.parse(third[i][j]).teachername_am;//获取所有上午上课的老师
					var teacher_pm=JSON.parse(third[i][j]).teachername_pm;//获取所有下午上课的老师
					if(teacher_am!=currentTeacher_pm&&teacher_pm!=currentTeacher_pm){
						//如果每个老师上午下午都没课就休息一天，满足老师至少有一天休息
						flag=0;
					}else{
						//说明该老师每天都上课，给出提示，结束当前循环
						flag=1;
						break;
					}
				}//一层
			}//二层
			if(flag==1){
				alert("请保证"+currentTeacher_pm+"老师至少休息一天");
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
	
	//判断班级不能连上2天课========================================================================》
	function judgeClasses(third,currentClass){
		var class_am;
		var truth=true;
		//传过来的班级数组的长度
		//for(var a=0;a<classes.length;a++){
			var lesson=0;
			var free=0;
			var classDay=0;
			var sleepDay=0;
			//currentClass=classes[a]; 
			//星期几
			for(var i=0;i<third.length;i++){
				//星期几哪一个班
				for(var j=0;j<third[i].length;j++){
					class_am=JSON.parse(third[i][j]).className_am;
					if(currentClass==class_am){
						classDay++;
						sleepDay=0;
						if(classDay>=2){
							lesson=1;
							break;
						}
					}
				}//一层for循环
			}//二层for循环
			if(lesson==1){
				alert(class_am+"班一周内连续上课"+classDay+"天");
				//truth=false;
				return false;
			}
		//}//三层
		
		}	
	
	//判断班级不能连续休息两天========================================================================》
	function judgeClassesSleep(third,currentClass){
		var class_am;
		var truth=true;
		//传过来的班级数组的长度
		//for(var a=0;a<classes.length;a++){
			//currentClass=classes[a]; //循环数组里面的班级，判断该班级在每一天中是否有课
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
						///////
						break;
					}
				}//一层for循环
				if(num==0){
					sleepDay=0;
					//continue;
				}
				if(num==1){
					sleepDay++;
					//alert(currentClass+"....."+sleepDay);
					if(sleepDay>=2){
						free=1;
						break;
					}
				}
			}//二层for循环
			if(free==1){
				alert(currentClass+"班一周内不能连续休息"+sleepDay+"天");
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