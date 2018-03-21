/**
 * 将 Date 转化为指定格式的String <br>
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)可以用 1-2 个占位符<br>
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)<br>
 * eg: <br>
 * (new Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423<br>
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04<br>
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04<br>
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04<br>
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18<br>
 */
Date.prototype.format=function(fmt) {
	var o = {
		"M+" : this.getMonth()+1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, // 小时
		"H+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth()+3)/3), // 季度
		"S" : this.getMilliseconds() // 毫秒
	};
	var week = {
		"0" : "日"/*"/u65e5"*/,
		"1" : "一"/*"/u4e00"*/,
		"2" : "二"/*"/u4e8c"*/,
		"3" : "三"/*"/u4e09"*/,
		"4" : "四"/*"/u56db"*/,
		"5" : "五"/*"/u4e94"*/,
		"6" : "六"/*"/u516d"*/
	};
	if(/(y+)/.test(fmt)){
		fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
	}
	if(/(E+)/.test(fmt)){
		fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "星期"/*"/u661f/u671f"*/ : "周"/*"/u5468"*/) : "")+week[this.getDay()+""]);
	}
	for(var k in o){
		if(new RegExp("("+ k +")").test(fmt)){
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
		}
	}
	return fmt;
};

/**
 * 在当前日期的基础上，加指定天数
 */
Date.prototype.add = function(num){
	return new Date(this.getTime()+24*60*60*1000*num);
};
/**
 * 获取当前周一日期数据
 */
Date.prototype.getFirstDate = function(){
	var index = this.getDay();
	var num = index -1;
	if(index == 0){
		num = 6;
	}
	
	return new Date(this.getTime()).add(-num);
};
+function(win,$) {
var weekName = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
var period = ["AM","PM","EM"];
var period_cn = {
	"AM":2,
	"PM":5,
	"EM":8
};
var rooms = {
	"一机房":0,
	"二机房":1,
	"三机房":2,
	"四机房":3,
	"五机房":4,
	"六机房":5,
	"七机房":6,
	"八机房":7
};
/**班级、教师、课程*/
var attrib = ["CG","TC","CS"];
var urls = ["classList.do",
	"teacherList.do",
	"courseList.do"
	];
function printWeeks(data){
	var ary = data.classTime4day;
	var len = ary.length;
	var html = "";
	for(var i=0;i<len;i++){
		html += printDay(ary[i]);
	}
	return html;
}
function printDay(data){
	var ary = data.classRooms;
	var len = ary.length;
	var html = "";
	var dateText = new Date(data.date).format("yyyy-MM-dd<br>EEE");
	var tr_td0 = "<tr class=\"first_line\"><td rowspan=\""+len+"\" class=\"center middle\">"+dateText+"</td>";
	html += printTR(ary[0],tr_td0);
	for(var i=1;i<len;i++){
		html += printTR(ary[i],"<tr>");
	}
	return html;
}
function printTR(data,html){
	html +="<td class=\"center middle classroom\">"+data.name+"</td>";
	var ary = data.classTimes;
	for(var i=0;i<ary.length;i++){
		html += printClassTime(ary[i],period[i]);
	}
	html += "</tr>";
	return html;
}

function printClassTime(data,period){
	if(data == null){
		return printTD(null,period,attrib[0])
		+printTD(null,period,attrib[1])
		+printTD(null,period,attrib[2]);
	}
	
	return printTD(data.clazz,period,attrib[0])
	+printTD(data.teacher,period,attrib[1])
	+printTD(data.teacher,period,attrib[2]);
}

function printTD(data,period,type){
	var html = "<td class=\""+period+" "+type+"\">";
	if(data == null || data.name == null){
		return html + "</td>";
	}
	
	return html+data.name+"</td>";
}

function getOptionData(entry){
	var info = {};
	info.text = entry.text||entry.name;
	info.val = entry.id||entry.value;
	return info;
}

function createSelectTo(td,items){
	var oldText = td.text();
	td.empty();
	var defaultVal = null;
	var html = "<select>";
	html += "<option value=\"\"></option>";
	for(var i=0;i<items.length;i++){
		var option = getOptionData(items[i]);
		if(oldText == option.text){
			html += "<option value=\""+option.val+"\" selected=\"selected\">"+option.text+"</option>";
			defaultVal = option.val;
		}else{
			html += "<option value=\""+option.val+"\">"+option.text+"</option>";
		}
	}
	html += "</select>";
	
	if(defaultVal == null){
		defaultVal = getOptionData(items[0]).val;
	}
	td.append(html);
}

win.timetable = function(cfg){
	var box = $("#"+cfg.id);
	
	//绑定点击事件
	box.find("table>tbody").bind("click",function(event){
		var elem = $(event.target);
		//单元格已被占用的没有点击效果
		if(elem.tab()[0].tagName == "TD" && elem.find("select").length == 0 && getCellIndex(elem).x>-1){
			showClassSelect(elem,false);
		}else if(elem.tab()[0].tagName="SELECT"){
			//debugger;
			var cellIndex = getCellIndex(elem);
//			console.log(cellIndex);
			//TODO 再次点击select控件
			var objTD = elem.parent();
			//showClassSelect(objTD,true);
		}
	});
	/**
	 * 第一次加载课表
	 */
	cfg.refresh=function(){
		$.post(this.url, {date:this.date},
		function(data){
			box.find("table>tbody").append(printWeeks(data));
		});
	};
	/**
	 * 加载课表数据
	 */
	cfg.loadJsonData=function(jsonData){
		var tbody = box.find("table>tbody");
		$.each(jsonData,function(){
			loadClassTime(this,tbody);
		});
	}
	/**
	 * 获取页面中的课表数据
	 */
	cfg.readJsonData = function(){
		var trs = box.find("table>tbody").children();
		var firstDate = new Date(this.date);
		var jsonData = [];
		$.each(trs,function(){
			readDayClassTime($(this),jsonData,firstDate);
		});
		return jsonData;
	}
	/**
	 * 清除课表数据
	 */
	cfg.clean=function(){
		var tbody = box.find("table>tbody");
		$.each(tbody.children(),function(){
			if($(this).index()%8==0){
				$(this).children("td:gt(1)").text("");
			}else{
				$(this).children("td:gt(0)").text("");
			}
		});
	}
	//win.renderDate = renderDate;
	return cfg;	
}

function readDayClassTime(tr,jsonData,firstDate){
	var rowIndex = tr.index();
	
	var offset = 0;
	if(rowIndex%8 == 0){
		offset = 1;
	}
	for(var i=0;i<3;i++){
		var classTime = readClassTime(tr,offset+i*3+1);
		if(classTime != null){
			var newDate = firstDate.add(Math.floor(rowIndex/8));
			classTime.date=newDate;
			classTime.schtime=period[i];
			//var text = newDate.format("yyyy-MM-dd");
			//classTime.date=text;
			jsonData.push(classTime);
		}
	}
}
function readClassTime(tr,index){
	var td = tr.find("td:eq("+index+")");
	
	var clazz = td.text();
	var teacher = td.next().text();
	var course = td.next().next().text();
	if(clazz != "" || teacher != "" || course != ""){
		return {	
			'week':"周"+index%24,
			'room':index%8,
			'clazz':clazz,
			'teacher':teacher,
			'course':course
		};
	}else{
		return null;
	}
}
function loadClassTime(item,tbody){
	//教室
	//班级
	//老师
	//课程
	//item.room.roomName;
	//item.room.roomId;
	//item.schTime;//上午、下午、晚上
	//item.schDate//班次日期
	//var date = new Date(item.schDate);
	var day = new Date(item.schDate).getDay();
	//debugger
	if(item.room==null||item.room.roomName==null){
		return;
	}
	var rows = (day-1)*8 + rooms[item.room.roomName];
	if(day==0){//如果周日，在最后显示
		rows = 48 + rooms[item.room.roomName];
	}
	
	var cols=period_cn[item.schTime];	
	if(item.room.roomId == 1){//一教室要多算一单元格
		cols++;
	}
	
	var cell = tbody.find("tr:eq("+rows+")>td:nth-child("+cols+")");
	cell.text(item.classes.className);
	cell.next().text(item.teacher.name);
	cell.next().next().text(item.course.courseContent);
}
//以上为表格布局，无数据交互

function getCellIndex(cell){
	var x = cell.index();//获取实际列索引
	var y = cell.parent().index();//获取实际行索引
	
	var cellIndex = {};
	if(y%8==0){
		cellIndex.isFirstRoom = true;
		cellIndex.x = x-2;
	}else{
		cellIndex.isFirstRoom = false;
		cellIndex.x = x-1;
	}
	cellIndex.y = y;
	//cellIndex.x0 = x;
	//cellIndex.y0 = y;
	
	return cellIndex;
}


function showClassSelect(td,clear){
	if(clear){
		//td.empty();
	}
	
	var params = {};
	var cellIndex = getCellIndex(td);
	
	//console.log(params);
	//1、获取当前单元格数据；
	//2、获取相关单元格数据（关联参数）；
	
	var ctInfo = getClassTimeInfo(td);
	
	$.extend(params,ctInfo);
	
//	params.classId=1;
//	params.teacherId=2;
//	params.courseId=3;
	var attrIndex = cellIndex.x%3;
	if(attrIndex==0){//班级
		//已指定老师
		//params.teacherId=
		//未指定老师
	}else if(attrIndex==1){//老师
		//已选择班级:>
		//params.classId=
		//未选择班级:>显示全部老师
		
		
		//后置影响
		//如果选择教员，课程就已确定：设置课程项为确定值，并且为不可修改状态
		//
	}else{//课程
		//班级必须已选择，否则不能选择课程
		
		//已指定老师
		
		//未指定老师
		
	}
	//后置影响
	//一个班次确定，对应的上午或者下午的班次也可以确定，晚自习也可以一键确定
	
	var url = urls[attrIndex];
	
	$.post(url,params,
	function(data){
		//过滤已
		data = rule.rule1(td,data);
		
		//下拉列表显示可选数据
		createSelectTo(td,data);
		//绑定
		td.find("select").on("change",function(event){
			//TODO bjw 修改数据
			var objSelect = $(event.target);
			
			//var val = objSelect.val();
			//获取选中数据
			var text = objSelect.find("option:selected").text();
			//清空当前单元格
			td.empty();
			//重写选中数据到单元格
			td.text(text);
			
			var attrIndex = cellIndex.x%3;
			if(attrIndex==0){//班级
				var objTR = td.parent();
				if(cellIndex.isFirstRoom){
					//设置班级数据
					objTR.children("td:nth-child(3)").text(text);
					objTR.children("td:nth-child(6)").text(text);
//					objTR.children("td:nth-child(9)").text(text);
				}else{
					objTR.children("td:nth-child(2)").text(text);
					objTR.children("td:nth-child(5)").text(text);
//					objTR.children("td:nth-child(8)").text(text);
				}
				//选择班级后，老师项联动
				getTeacher(td,"content.do");
			}
			if(attrIndex == 1){//老师
				
				
			}
			//storeCellText(cellIndex,text);
			
			
			
		});
		//td.find("select").click();
		//td.find("select").trigger("click");
		//td.find("select").triggerHandler("click");
		//showOptions(td.find("select"));
	});
	
	//向后台发送请求根据前面一个单元格的内容查询后面一个单元格的内容
	if(cellIndex.x == 0){
		
	}
//	var con = td.prev().text();
//	$.post("getContent.do",{"con":con},function(result){
//		
//		
//	});
}


var rule = {
		/**1、班级一天只能选择一次*/
		'rule1':function(cell,data){
			var cellIndex = getCellIndex(cell);
			if(cellIndex.x%3 == 0){
				var tr = getFirstTr(cell);			
				//获取当天已排课班级
				for(var i=0;i<8;i++){
					var text = tr.children("td:nth-child(1)").text();
				}
				//
				return data;
			}else{
				return data;
			}
		}
		,/**2、教员一天只能排两次课，*/
		'rule2':function(cell,data){
			
		}
		/**3、班级一周四次课，放假不能连续两天*/
		/**4、班级人数不能超过教室人数*/
		/**5、一天只能有一次正课*/
		/**6、晚上只能上自习课*/
		
		/**7、一个班一天的课在同一教室*/
		,'rule7':function(cell,data){
			//控制
			//处理
			
			/**
			 * 1、如果该教室已选择了班级，再点击其它班级列时，自动带出已选择班级（下拉列只有两项：已选班级｜置空） 
			 * 2、
			 */
		}
		/**8、修改班级信息，同时清空教师和课程信息；修改老师信息，更新课程下拉列表；教员课程按班级课程节点自动设定；班主任课程，默认自习课*/
		/**9、*/
	};

function getClassTimeInfo(cell){
	var cellData = getCellIndex(cell);
	//debugger;
	var info = {};
	if(cellData.x % 3 == 0){
		//info.classText=1;
		info.teacherText=cell.next().text();
		info.courseText=cell.next().next().text();
	}else if(cellData.x % 3 == 1){
		info.classText=cell.prev().text();
		//info.teacherText=2;
		info.courseText=cell.next().text();
	}else if(cellData.x % 3 == 2){
		info.classText=cell.prev().prev().text();
		info.teacherText=cell.prev().text();
		//info.courseText=3;
	}
	
	return info;
		
}

function getFirstTr(td){
	var objTR = td.parents("tr");
	if(objTR.hasClass("first_line")){		
		return objTR;
	}else{
		return objTR.prevAll(".first_line");
	}
}

//根据班级名称查询老师和课程
function getTeacher(td,urls){
	var con = td.text();
	$.post(urls,{"con":con},function(result){
		createSelectTo(td.next(),result);
		
		var tea1 = result[0].name;//教员
		var tea2 = result[1].name;//班主任
		var major1 = result[0].course.courseContent;//主课程
//		var major2 = result[1].scheduleName;//cot
		var major2 = "自习";
		
		td.next().find("select").on("change",function(event){
			var objSelect = $(event.target);
			//获取选中数据
			var text = objSelect.find("option:selected").text();
			//清空当前单元格
			td.next().empty();
			//重写选中数据到单元格
			td.next().text(text);
			
			var cellIndex = getCellIndex(td.next());
				var objTR = td.parent();
				if(cellIndex.isFirstRoom){
					if(text == tea2){//如果当前内容为班主任
						objTR.children("td:nth-child(7)").text(tea1);
						objTR.children("td:nth-child(4)").text(tea2);
						objTR.children("td:nth-child(5)").text(major2);
						objTR.children("td:nth-child(8)").text(major1);						
					}else{
						objTR.children("td:nth-child(7)").text(tea2);
						objTR.children("td:nth-child(4)").text(tea1);
						objTR.children("td:nth-child(5)").text(major1);
						objTR.children("td:nth-child(8)").text(major2);
					}				
				}else{
					if(text == tea1){
						objTR.children("td:nth-child(6)").text(tea2);
						objTR.children("td:nth-child(3)").text(tea1);
						objTR.children("td:nth-child(4)").text(major1);
						objTR.children("td:nth-child(7)").text(major2);
					}else{
						objTR.children("td:nth-child(6)").text(tea1);
						objTR.children("td:nth-child(3)").text(tea2);
						objTR.children("td:nth-child(4)").text(major2);
						objTR.children("td:nth-child(7)").text(major1);
					}
				}
		});
		
		});
	
}

//function getCourse(td,urls){
//	var con = td.selected;
//	alert(con);
//	$.post(urls,{"con":con},function(result){
//		console.log(result);
//	});
//}


}(window,jQuery);