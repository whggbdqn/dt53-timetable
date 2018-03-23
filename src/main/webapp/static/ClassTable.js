/**
 * 课程表初始化
 */

$(function() {

		$(document).on('click','.className',function(){
			
		});
	
			
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
				for(var i=0;i<63;i++){
					tbody+="<tr>";
					for(var j=0;j<9;j++){
		
						//用于纵向合并星期数
						if(j==0 && i%9==0){
						//获取本周时间 调用weekControll.js中的函数
							var dateText = getTime(day,weekflag);
							tbody+="<td align=\"center\" style=\"height：258px;line-height:258px;\" rowspan='9'>"+dateText+"</td>";
							weekflag++;
							day--;
							day==-7 ? day==0 : day;
							weekflag==8 ? weekflag==0 : weekflag;
						}
						//显示教室
						if(j==0){
							//获取json中的key值
							tbody+="<td align=\"center\">"+Object.keys(rooms)[jf]+"</td>";
							jf++;
							jf==9 ? jf=0 : jf;
							
						}
						//设置所有班级名称的class
						if(j%3==0){
							tbody+="<td class=\"className\"></td>";
						}
						//设置所有老师的class
						if(j%4==0){
							tbody+="<td class=\"teacherName\"></td>";
						}
						
						//设置所有课程的class
						if(j==2 || j==5 || j==8){
							tbody+="<td class=\"classInfo\"></td>";
						}	
						
					}
					tbody+="</tr>";
				}
				return tbody;
			}
			
		});
		
		