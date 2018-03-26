/**
 * 课程表初始化
 */

$(function() {

	//存储每天班级状态信息的数组 , 周一-周天
	var one=[],two=[],three=[],four=[],five=[],six=[],seven=[];
	

	
		/**
		 * 向后台改变班级状态信息
		 * classAry 班级名和状态对象
		 */
		
		function changeClassRoomInfoAjax(classAry){
			var x="";
			//将对象数组中的对象循环出来，转为json格式
/*			for (var int = 0; int < classAry.length; int++) {

				x += JSON.stringify(classAry[int])+"/";
			}
			var newX=x.substring(0, x.length-1);*/
			x = JSON.stringify(classAry);
			//console.log(x);
			$.ajax({
				url:"changeCnameByCstate.do",
				type:'post',
				//datatype:'json',
				data:{'classAry':x},
				//traditional: true,
				success:function(data){
					
					
					
				}
							
			});
		}
		
		
		/**
		 * 改变班级状态
		 * className 班级名称
		 * weekday 当前星期数
		 */
		function changeClassRoomInfo(className,weekday){

			
			
			//通过星期数判断
			switch(weekday)
			{
			case '星期一':
				//数组不为空的时候，循环数组，查看是否已经存入班级信息，如果有班级信息，只用改变状态
			if(null!=one){
				for (var i = 0; i < one.length; i++) {
					if(className==one[i].className){
						
						
						return false;
					}
/*					one.map(({classroom, state}) => {
						console.log(classroom,state);
					    return {classroom,state};
					});*/
					//如果班级状态为1
					if(one[i].state==1){
						//console.log(one[i].className);
					}
					
				}
				//console.log('111');
			}
				
			
			  one.push({'className':""+className+"",'state':'1'});
			  //取最近添加的一条数据，保存状态
			  changeClassRoomInfoAjax(one[one.length-1]);
			  break;
			case '星期二':
			console.log('222'+className);
			  break;
			default:
				console.log('333'+className);
			}
		}

		//存储每天班级状态信息的数组 , 周一-周天
		var one,two,three,four,five,six,seven=[];
		
	
		//双击【班级名称】表格事件
		$(document).on('dblclick','.className',function(){
			//遍历所有节点，取消其他节点的可编辑状态
			//1.获取所有节点
			var allNode = $(".className,.teacherName,.classInfo");
			//将当前对象状态初始化
			//console.log($(this).text());
			if($(this).text()!=""){
				changeClassRoomInfoAjax({'className':""+$(this).text()+"",'state':'0'});
			}
			
			
			
			
			
			
			
			//2.遍历所有节点，取消所有其他节点的选中状态
			allNode.each(function(index,element){
				//获取所有含有select的表格
				if($(this).find("select").length!=0){
					//将select的值通过改变html的方式赋给表格，相当于取消上一个表格的编辑状态
					var val=$(this).find("option:selected").html();
					if($(this).find("option:selected").val()!='chooseClass'){
						$(this).html(val);
					}
					
					
					//获取取消编辑的表格所在的时间范围
					//1.得到取消编辑标签的父标签tr标签第一个td的值，用于取到当前时星期几
					//var nowdate= $(this).parent().parent().children(":first").text();
					var nowdate= $(this).parent().parent().html();
					//console.log(nowdate);
					//var nowWeek=nowdate.split(/\[|\]/)[1];
					//console.log(nowWeek);
					//将已经修改的值，通过改变班级的状态，回传给服务器
					
									
					//将选择的班级名称 存入数组中，确保该班同一天只能选择一次
					//获取上个编辑框所在的星期
					var beforeEdit = $(this).prev().text();
					//拆分查到的值，获取星期数
					var beforeWeek = beforeEdit.split(/\[|\]/)[1];
					//获取教室名
					var classroomName = $(this).prev().prev().text();
					//调用函数
					changeClassRoomInfo($(this).text(),beforeWeek);
				}
				
			});
			
			
			
			
			
			//获取当前一行的教室名
			var className=$(this).parent().children(".roomName").html();
			//获取当前编辑的表格
			var $this=$(this);
			
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
						var classBox="<select style=\"width:170px;\"><option value =\"chooseClass\">请选择班级</option>";

						for(var i=0 ; i<data.length ; i++){
							//判断如果表格框里有值的时候，双击表格框，select中应该选中表格之前的值
							if($this.text()!="" && $this.text()==data[i].classname){
								classBox+="<option selected=\"selected\" value =\""+data[i].classId+"\">"+data[i].classname+"</option>";
								continue;
							}
							
							classBox+="<option value =\""+data[i].classId+"\">"+data[i].classname+"</option>";						
						}	
						classBox+="</select>";
						$this.html(classBox);
					}	
				});	
			}
			
			/**
			 * 点击select框的值，选择该值，退出编辑效果??????
			 */
			console.log($(this).text());
			$(this).change(function(){
				console.log($(this).find("option:selected").text());
				//执行change事件，班级状态变为1
				changeClassRoomInfoAjax({'className':""+$(this).find("option:selected").text()+"",'state':'1'});
				//如果点击的值和原有的值相同，状态不改变？？？？？
				
				
				
				
				if($(this).find("td").text()!=""){
					$(this).html($(this).find("td").text());
				}
				if($(this).find("option:selected").text()!=""){
					$(this).html($(this).find("option:selected").text());
				}
				
				
				
			});
			
			/*if($(this).text()!='chooseClass'){
				$(this).html($(this).text());
				
			}
*/
		});
	
		
		
		
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
				for(var i=0;i<63;i++){
					tbody+="<tr>";

					tbody+="<td class=\"week\" align=\"center\" style=\"display:none;\">"+dateText+"</td>";

					for(var j=0;j<9;j++){
		
						//用于纵向合并星期数
						if(j==0 && i%9==0){
						//获取本周时间 调用weekControll.js中的函数
							var dateText = getTime(day,weekflag);
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
							tbody+="<input type=\"hidden\" value=\""+weekflag2+"\"/><td class=\"roomName\" align=\"center\">"+Object.keys(rooms)[jf]+"</td>";
							jf++;
							jf==9 ? jf=0 : jf;
							
						}
						//设置所有班级名称的class
						if(j%3==0){
							tbody+="<td style=\"display:none;\">"+weekflag2+"</td><td style=\"width:180px;\" class=\"className\"></td>";
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
		
		