package com.dao;

import com.entity.Class;

public interface ClassMapper {

	int deleteByPrimaryKey(Integer classid);

	int insert(Class record);

	int insertSelective(Class record);

	Class selectByPrimaryKey(Integer classid);

	int updateByPrimaryKeySelective(Class record);

	int updateByPrimaryKey(Class record);
}