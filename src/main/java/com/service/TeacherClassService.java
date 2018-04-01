package com.service;

import java.util.List;

import com.entity.Teacherclass;

public interface TeacherClassService {

	//查询全部
	List<Teacherclass> getAllTeacherclass();
		
	int deleteByPrimaryKey(Integer teacherclassid);

	int insert(Teacherclass record);

	int insertSelective(Teacherclass record);

	Teacherclass selectByPrimaryKey(Integer teacherclassid);

	int updateByPrimaryKeySelective(Teacherclass record);

	int updateByPrimaryKey(Teacherclass record);
}
