package com.dao;

import com.entity.Teacher;

public interface TeacherMapper {

	int deleteByPrimaryKey(Integer teacherid);

	int insert(Teacher record);

	int insertSelective(Teacher record);

	Teacher selectByPrimaryKey(Integer teacherid);

	int updateByPrimaryKeySelective(Teacher record);

	int updateByPrimaryKey(Teacher record);
}