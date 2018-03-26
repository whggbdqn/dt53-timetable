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


		List<Class> classes = classService.getAllClassByState(0, classroom.getAvailablenum());
	
	return classes;


	}
}
