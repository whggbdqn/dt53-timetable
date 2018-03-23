package com.dao;

import java.util.List;

import com.entity.Class;

public interface ClassMapper {

	int deleteByPrimaryKey(Integer classid);

	int insert(Class record);

	int insertSelective(Class record);

	Class selectByPrimaryKey(Integer classid);

	int updateByPrimaryKeySelective(Class record);

	int updateByPrimaryKey(Class record);
	
	/**
	 * 得到所有指定状态的班级
	 * @param state 班级状态
	 * @return 指定状态班级
	 */
	List<Class> getAllClassByState(Integer state);
}