/**
 * 
 */
//为每天课表创建一个数组
		var day1Box=[],day2Box=[],day3Box=[],day4Box=[],day5Box=[],day6Box=[],day7Box=[];
$(function(){
	$.post("getAllSchedule.do",null,function(date){
		
		for(var i=0;i<date.length;i++){
			
			var week=date[i].weekday;
			switch (week) {
			//将每天的课表添加到对应的数组
			case '星期一':
				day1Box.push(JSON.stringify(date[i]));
				break;
			case '星期二':
				day2Box.push(JSON.stringify(date[i]));
				break;
			case '星期三':
				day3Box.push(JSON.stringify(date[i]));
				break;
			case '星期四':
				day4Box.push(JSON.stringify(date[i]));
				break;
			case '星期五':
				day5Box.push(JSON.stringify(date[i]));
				break;
			case '星期六':
				day6Box.push(JSON.stringify(date[i]));
				break;
			case '星期日':
				day7Box.push(JSON.stringify(date[i]));
				break;
			}
		}
		//创建一个数组将一个星期的数组装起来
		var classTable=[];
		
		for(var i=1;i<8;i++){
			var obj=eval("("+"day"+i+"Box"+")");
			
			classTable.push(obj);
			
		}
		console.log(classTable);
		show(classTable);
	});
	
	var show=function(week){
		$.post("getAllRoom.do",null,function(date){
			//取出表单里面的所有的行tr
			var len=$('#jsTimeTable tbody').find("tr").length;
			for(var i=0;i<len;i++){
				//遍历所有的行tr
				var tr=$('#jsTimeTable tbody').find("tr").eq(i);
				var name=$('#jsTimeTable tbody').find("tr").eq(i).text();
				//取出当前行的教室名称
				var roomName=name.substr(name.length-3,3);
				//取出当前行的星期值
				var data=name.split(/\[|\]/)[1];
				for(var j=0;j<week.length;j++){
					for(var t=0;t<week[j].length;t++){
						var roomName2=JSON.parse(week[j][t]).classroom;
						var data2=JSON.parse(week[j][t]).weekday;
						//如果数据库的教室名称，星期值同时与数组中的教室名称，星期值一致
						if(roomName==roomName2&&data==data2){
							
							//取数据库中的值
							var classinfoAm=JSON.parse(week[j][t]).classInfo_am;
							var classinfoPm=JSON.parse(week[j][t]).classInfo_pm;
							var classinfoEve=JSON.parse(week[j][t]).classInfo_eve;
							var classnameAm=JSON.parse(week[j][t]).className_am;
							var classnameEve=JSON.parse(week[j][t]).className_eve;
							var classnamePm=JSON.parse(week[j][t]).className_pm;
							var teachernameAm=JSON.parse(week[j][t]).teachername_am;
							var teachernameEve=JSON.parse(week[j][t]).teachername_eve;
							var teachernamePm=JSON.parse(week[j][t]).teachername_pm;
							
							//存数据库的值到网页
							$(tr).children().eq(2).text(classnameAm);
							$(tr).children().eq(3).text(teachernameAm);
							$(tr).children().eq(4).text(classinfoAm);
							$(tr).children().eq(5).text(classnamePm);
							$(tr).children().eq(6).text(teachernamePm);
							$(tr).children().eq(7).text(classinfoPm);
							$(tr).children().eq(8).text(classnameEve);
							$(tr).children().eq(9).text(teachernameEve);
							$(tr).children().eq(10).text(classinfoEve);
							
							
							
							
							
						}
					}
				}
				
				
			}
		});
	}
	
});