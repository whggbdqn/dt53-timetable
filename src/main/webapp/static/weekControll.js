/**
 * 本周,上周的开始结束时间
 * week:week数组的角标值，用于表现星期几
 */

function getTime(n,week){
	
	//周			
	var weekName = ["星期一","星期二","星期三","星期四","星期五","星期六","星期日"];
	
var now=new Date();
var year=now.getFullYear();
//因为月份是从0开始的,所以获取这个月的月份数要加1才行
var month=now.getMonth()+1;
var date=now.getDate();
var day=now.getDay();
//console.log(date);
//判断是否为周日,如果不是的话,就让今天的day-1(例如星期二就是2-1)
if(day!==0){
n=n+(day-1);
}
else{
n=n+day;
}
if(day){
//这个判断是为了解决跨年的问题
if(month>1){
month=month;
}
//这个判断是为了解决跨年的问题,月份是从0开始的
else{
year=year-1;
month=12;
}
}
now.setDate(now.getDate()-n);
year=now.getFullYear();
month=now.getMonth()+1;
date=now.getDate();
//console.log(n);

s=year+"-"+(month<10?('0'+month):month)+"-"+(date<10?('0'+date):date)+" ["+weekName[week]+"]";

return s;
}

/***参数都是以周一为基准的***/
//上周的开始时间
//console.log(getTime(7));
//上周的结束时间
//console.log(getTime(1));
//本周的开始时间
//console.log(getTime(0));
//本周的结束时间
//console.log(getTime(-6));