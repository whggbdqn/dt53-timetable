package com.controller;


import static org.hamcrest.CoreMatchers.nullValue;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.entity.ClassTableJson;
import com.entity.Param;
import com.service.ClassService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * 处理课程交互数据
 * @author 沈哲曦
 *
 */


@Controller
public class ClassController {
	
	@Autowired
	private ClassService classService;

	
	@RequestMapping("changeCnameByCstate")
	@ResponseBody
	/**
	 * 通过班级名字改变班级状态
	 * @param className 班级名
	 * @param state 班级状态
	 * @return 影响行数
	 */
	public Integer changeClassStateByClassName(HttpServletRequest request){
		String classAry = request.getParameter("classAry");
		System.out.println(classAry);
		//String[] split = classAry.split("/");
		int update=-1;
			JSONObject jsonObject=JSON.parseObject(classAry);
			//获取班级名称
			String className = (String)jsonObject.get("className");
			//获取班级状态
			Integer state = Integer.parseInt((String)jsonObject.get("state"));
			update = classService.updateClassStateByName(new Param(state,className));
		
		return update;		
	}
	
	@RequestMapping("saveClassTable")
	public void saveClassTable(String classTable){
		//System.out.println(classTable);
		JSONArray jsonArray = JSONArray.fromObject(classTable);
		Object[] os = jsonArray.toArray();
		List<ClassTableJson> classList=new ArrayList<ClassTableJson>();
		for (int i = 0; i < os.length; i++) {
			Object[] os0 = JSONArray.fromObject(os[i]).toArray();
			for (int j = 0; j < os0.length; j++) {
				System.out.println(os0[j]);
				ClassTableJson classTableJson = (ClassTableJson)JSONObject.toBean((JSONObject)os0[j],ClassTableJson.class);
				System.out.println(classTableJson.getWeekday());
				classList.add(classTableJson);
			}
		}
		//获取所有提交表格的集合
		System.out.println(classList);
		
		
		
		/*for (int i = 0; i < os.length; i++) {
			os2.add(JSONArray.fromObject(os[i]).toArray());
		}*/
		//System.out.println(os2.get(0));
	}
	
	
	
	
}
