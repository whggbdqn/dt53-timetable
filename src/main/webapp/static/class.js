/**
 * 课程表基础元素
 */

$(function() {
	//双击【班级名称】表格事件
			$(document).on('dblclick','.className,.teacherName,.classInfo',function(){
				//console.log($(this));
				//createRowJson($(this));
				openSelect($(this));
				changeSelect($(this));
			});
	
	/**
	 * 通过班级名称获取老师和科目
	 * className 班级名
	 */
	var getTeacherAndSubjectByClass = function(className){
		if(className!=""){
			$.ajax({
			url:'json/QueryClass.do',
			type:'post',
			dataType:'json',
			data:{'className':className},
			success:function(data){
				
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
						var classBox="<select style=\"width:170px;\"><option value =\"chooseClass\">请选择班级</option>";

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
		/*$(selectBox).text();
		console.log($(selectBox).text());*/
		$(document).on('click','.optionClass',function(){
			var clickVal = $(this).parent().parent().text();
			//如果点击的值不为请选择年级和空，赋值给td
			if($(this).text()!="请选择年级" && $(this).text()!=""){
				$(this).parent().parent().html($(this).text());
			}
	
		});
		
	}

	
	//json数组 初始化=================================================================================================
	/**
	 * 创建行数据的json格式
	 * td 当前行的td
	 */
	var createRowJson=function(td){
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
				
				console.log(newJson);
				
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
	
	
	
