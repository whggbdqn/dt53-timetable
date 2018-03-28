/**
 * 一天所有班级的json格式数组数组
 */
/*var json=[
          {"weekday":"星期一","classroom":"一机房","className_am":"DT53","teachername_am":"王建兵","classInfo_am":"正课","className_pm":"DT53","teachername_pm":"雯雯","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
          {"weekday":"星期一","classroom":"二机房","className_am":"DT54","teachername_am":"雯雯","classInfo_am":"自习","className_pm":"DT53","teachername_pm":"王建兵","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""},
          {"weekday":"星期一","classroom":"三机房","className_am":"DT55","teachername_am":"111","classInfo_am":"正课","className_pm":"DT55","teachername_pm":"老刘","classInfo_pm":"自习","className_eve":"","teachername_eve":"","classInfo_eve":""},
          {"weekday":"星期一","classroom":"四机房","className_am":"DT56","teachername_am":"老张","classInfo_am":"自习","className_pm":"DT56","teachername_pm":"111","classInfo_pm":"正课","className_eve":"","teachername_eve":"","classInfo_eve":""}
    ];*/
/*var json=[{\"weekday":\"星期一\",\"classroom\":\"一机房\",\"className_am\":\"DT59\",\"teachername_am\":\"徐士甲\",\"classInfo_am\":\"java\",\"className_pm\":\"DT59\",\"teachername_pm\":\"汪文妮\",\"classInfo_pm\":\"cot\",\"className_eve\":\"\",\"teachername_eve\":\"\",\"classInfo_eve\":\"\"}",
		​
		"{\"weekday\":\"星期一\",\"classroom\":\"二机房\",\"className_am\":\"DT58\",\"teachername_am\":\"丁鹏\",\"classInfo_am\":\"java\",\"className_pm\":\"DT58\",\"teachername_pm\":\"\",\"classInfo_pm\":\"\",\"className_eve\":\"\",\"teachername_eve\":\"\",\"classInfo_eve\":\"\"}",
		​
		"{\"weekday\":\"星期一\",\"classroom\":\"三机房\",\"className_am\":\"DT60\",\"teachername_am\":\"郑韦韦\",\"classInfo_am\":\"cot\",\"className_pm\":\"DT60\",\"teachername_pm\":\"\",\"classInfo_pm\":\"\",\"className_eve\":\"\",\"teachername_eve\":\"\",\"classInfo_eve\":\"\"}",
		​
		"{\"weekday\":\"星期一\",\"classroom\":\"四机房\",\"className_am\":\"DT56\",\"teachername_am\":\"吴智超\",\"classInfo_am\":\"java\",\"className_pm\":\"DT56\",\"teachername_pm\":\"陈冠男\",\"classInfo_pm\":\"java\",\"className_eve\":\"\",\"teachername_eve\":\"\",\"classInfo_eve\":\"\"}",
		​
		"{\"weekday\":\"星期一\",\"classroom\":\"五机房\",\"className_am\":\"DT54\",\"teachername_am\":\"文雯\",\"classInfo_am\":\"cot\",\"className_pm\":\"DT54\",\"teachername_pm\":\"孙子鉴\",\"classInfo_pm\":\"java\",\"className_eve\":\"\",\"teachername_eve\":\"\",\"classInfo_eve\":\"\"}"
];*/
/*second(json);*/
function second(json){
	//alert(JSON.parse(json[0]));
	if(json.length>1){
		var targ=1;
		//依次取上午对应的老师
		for (var i = 0; i < json.length; i++) {
			var teachername_am1=JSON.parse(json[i]).teachername_am;
			var teachername_pm1=JSON.parse(json[i]).teachername_pm;
			var className_am1=JSON.parse(json[i]).className_am;
			var className_pm1=JSON.parse(json[i]).className_pm;
			
			if(teachername_am1!=""&&teachername_pm1!=""&&teachername_pm1!=""&&teachername_pm1!=""){
				//取所有上午在需要比较的后面的老师
				for (var j = i+1; j < json.length; j++) {
					var teachername_am2=JSON.parse(json[j]).teachername_am;
					if(teachername_am1==teachername_am2){
						targ=0;
						json.splice(j, 1);
						break;
					}
				}
				
				//取所有下午在需要比较的后面的老师
				for (var j = i+1; j < json.length; j++) {
					var teachername_pm2=JSON.parse(json[j]).teachername_pm;
					if(teachername_pm1==teachername_pm2){
						targ=0;
						json.splice(j, 1);
						break;
					}
				}
				
				//取所有下午在需要比较的后面的班级
				for (var j = i+1; j < json.length; j++) {
					var className_pm2=JSON.parse(json[j]).className_pm;
					if(className_pm1==className_pm2){
						targ=0;
						json.splice(j, 1);
						break;
					}
				}
				
				//取所有上午在需要比较的后面的班级
				for (var j = i+1; j < json.length; j++) {
					var className_am2=JSON.parse(json[j]).className_am;
					if(className_am1==className_am2){
						targ=0;
						json.splice(j, 1);
						break;
					}
				}
			}
			//如果出现targ==0，则违反同一个时间段，老师不带两个班的规则
			if(targ==0){
				alert("同一个时间段，老师不能带两个班");
				return false;
			}
			
		}
		
		//当全都循环后，如果targ!=0，则符合同一个时间段，老师不带两个班的规则
		if(targ!=0){
			//alert("222");
			return true;
		}
	}
}