/**
 * 课程表初始化
 */

$(function() {
		//存储每天班级状态信息的数组 , 周一-周天
		var one,two,three,four,five,six,seven=[];
		
	
	
	

		//双击【班级名称】表格事件
		$(document).on('dblclick','.className',function(){
			//遍历所有节点，取消其他节点的可编辑状态
			//1.获取所有节点
			var allNode = $(".className,.teacherName,.classInfo");
			//2.遍历所有节点，取消所有其他节点的选中状态
			allNode.each(function(index,element){
				//获取所有含有select的表格
				if($(this).find("select").length!=0){
					//将select的值通过改变html的方式赋给表格，相当于取消上一个表格的编辑状态
					var val=$(this).find("option:selected").html();
					$(this).html(val);
					
					//获取取消编辑的表格所在的时间范围
					//1.得到取消编辑标签的父标签tr标签第一个td的值，用于取到当前时星期几
					//var nowdate= $(this).parent().parent().children(":first").text();
					var nowdate= $(this).parent().parent().html();
					console.log(nowdate);
					//var nowWeek=nowdate.split(/\[|\]/)[1];
					//console.log(nowWeek);
					//将已经修改的值，通过改变班级的状态，回传给服务器
					
					
					
				}
			});
			
			
			
			
			
			//获取当前一行的教室名
			var className=$(this).parent().children(".roomName").html();
			//获取当前编辑的表格
			var $this=$(this);
			
			$.ajax({
				url:'json/QueryClass.do',
				type:'post',
				dataType:'json',
				data:{'className':className},
				success:function(data){
					var classBox="<select style=\"width:170px;\">";
					for(var i=0 ; i<data.length ; i++){
						classBox+="<option value =\""+data[i].classId+"\">"+data[i].classname+"</option>";						
					}	
					classBox+="</select>";
					$this.html(classBox);
				}	
			});	
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
					tbody+="<td class=\"week\" align=\"center\" style=\"display:none;\">"+dateText+"</td>";
					for(var j=0;j<9;j++){
		
						//用于纵向合并星期数
						if(j==0 && i%9==0){
						//获取本周时间 调用weekControll.js中的函数
							var dateText = getTime(day,weekflag);
							tbody+="<td class=\"week\" align=\"center\" style=\"height：258px;line-height:258px;\" rowspan='9'>"+dateText+"</td>";

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
		
		