package com.controller;


import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.entity.ClassTableJson;
import com.entity.Param;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.service.ClassService;
import com.service.ScheduleinfoService;




/**
 * 处理课程交互数据
 * @author 沈哲曦
 *
 */

@SuppressWarnings("unchecked")
@Controller
public class ClassController {
	
	@Autowired
	private ClassService classService;
	@Autowired
	private ScheduleinfoService scheduleinfoService;

	
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
		
		if(null!=classTable){

			//将json二维数组循环映射到实体
			ObjectMapper objectMapper = new ObjectMapper();
				try {
			        List<ArrayList<String>> list = objectMapper.readValue(classTable,List.class);
			        //删除原课表 
			        scheduleinfoService.deleteAllSchedule();
			        
			        for (int i = 0; i < list.size(); i++) {
			        	for (int j = 0; j < list.get(i).size(); j++) {
			        		System.out.println(list.get(i).get(j));
			        		 ClassTableJson classTableJson = objectMapper.readValue(list.get(i).get(j), ClassTableJson.class);
			        	     System.out.println(classTableJson.getWeekday());
							//调方法存入数据库
			        	     scheduleinfoService.insertSelective(classTableJson);
		   	     
						}
			        }
			        
			    } catch (JsonParseException e) {
			        e.printStackTrace();
			    } catch (JsonMappingException e) {
			        e.printStackTrace();
			    } catch (IOException e) {
			        e.printStackTrace();
			    }
		
	}

	}
	
	
	
	
}
