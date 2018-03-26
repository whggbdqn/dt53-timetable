package com.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.entity.Class;
import com.entity.Classroom;
import com.service.ClassroomService;
import com.service.ClasstableService;
/**
 * 为手动添加课表前台提供json数据
 * @author 沈哲曦
 *
 */

@Controller
public class ClassJsonController {
	
	@Autowired
	private ClassroomService classroomService;
	
	@Autowired
	private ClasstableService classtableService;
	
	@RequestMapping("json/QueryClass")
	@ResponseBody
	public List<Class> getAllClassCanSetInRoom(String className){
		//将查询出来符合教室的班级放在map中，key为教室名，value为该教室下所有班级
				Map<String, List<Class>> maps=new HashMap<String, List<Class>>();
				//通过教室名找到该教室可容纳人数
				//System.err.println(className);
				List<Classroom> roomByState = classroomService.getAllRoomByState(0);
				for (Classroom classroom : roomByState) {
					List<Class> enableClass = classtableService.getClassesCanSetInClassRoom(classroom);
					if(null!=enableClass)
					maps.put(classroom.getRoomName(), enableClass);
					//System.out.println(classroom.getRoomName());
				}
				List<Class> lists = maps.get(className);
				for (Class class1 : lists) {
					//System.out.println(class1.getClassname());
				}
				return lists;
	}

}
