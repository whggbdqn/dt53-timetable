package com.service;

import java.util.List;

import com.entity.Classroom;
import com.entity.Class;

/**
 * 手动添加课表业务
 * @author 沈哲曦
 *
 */
public interface ClasstableService {
	
	/**
	 * 获取每种教室可以容纳的班级
	 * @param classroom 教室实体
	 * @return 可容纳班级 
	 */
	List<Class> getClassesCanSetInClassRoom(Classroom classroom);
	
}
