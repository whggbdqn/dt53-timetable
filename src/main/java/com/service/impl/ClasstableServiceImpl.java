package com.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.ClassMapper;
import com.dao.ClassroomMapper;
import com.entity.Class;
import com.entity.Classroom;
import com.service.ClassService;
import com.service.ClasstableService;

@Service("classtableService")
public class ClasstableServiceImpl implements ClasstableService {
	
	@Autowired
	private ClassroomMapper classroomMapper;
	@Autowired

	private ClassMapper classMapper;
	@Autowired
	private ClassService classService;
	

	/**
	 * 获取每种教室可以容纳的班级
	 * @param classroom 教室实体
	 * @return 可容纳班级 
	 */
	public List<Class> getClassesCanSetInClassRoom(Classroom classroom) {
		/*//获得可以装在教室中的班级
		List<Class> clazz = new ArrayList<Class>();	*/	
		//获取所有可使用的班级

//		List<Class> classes = classService.getAllClassByState(0);
//		for (Class c : classes) {
//
//		List<Class> classes = classService.getAllClassByState(0, classroom.getAvailablenum());
//		/*for (Class c : classes) {
//
//			//如果班级人数小于教室人数,装入clazz集合
//			if(c.getClassnum() <= classroom.getAvailablenum()){
//				clazz.add(c);
//			}
//		}*/
//		
//		return classes;
//		
//	}

	}
}
