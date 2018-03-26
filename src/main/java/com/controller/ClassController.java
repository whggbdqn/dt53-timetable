package com.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.entity.Param;
import com.service.ClassService;

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
	
	
	
	
}
