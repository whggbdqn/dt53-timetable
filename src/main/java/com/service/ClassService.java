package com.service;

import java.util.List;

import com.entity.Class;

public interface ClassService {

	/**
	 * 得到所有指定状态的班级
	 * @param state 班级状态
	 * @return 指定状态班级
	 */
	List<Class> getAllClassByState(Integer state);
	
}
