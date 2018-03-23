package com.dao;

import java.util.List;

import com.entity.Teachertime;

public interface TeachertimeMapper {

	// 查询全部
	List<Teachertime> getAllTeachertimer();

	int deleteByPrimaryKey(Integer teachertimeid);

	int insert(Teachertime record);

	int insertSelective(Teachertime record);

	Teachertime selectByPrimaryKey(Integer teachertimeid);

	int updateByPrimaryKeySelective(Teachertime record);

	int updateByPrimaryKey(Teachertime record);
}