package com.dao;

import com.entity.Teacherclass;

public interface TeacherclassMapper {

	int deleteByPrimaryKey(Integer teacherclassid);

	int insert(Teacherclass record);

	int insertSelective(Teacherclass record);

	Teacherclass selectByPrimaryKey(Integer teacherclassid);

	int updateByPrimaryKeySelective(Teacherclass record);

	int updateByPrimaryKey(Teacherclass record);
}