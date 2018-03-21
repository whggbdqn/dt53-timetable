package com.dao;

import com.entity.Teachertime;

public interface TeachertimeMapper {

	int deleteByPrimaryKey(Integer teachertimeid);

	int insert(Teachertime record);

	int insertSelective(Teachertime record);

	Teachertime selectByPrimaryKey(Integer teachertimeid);

	int updateByPrimaryKeySelective(Teachertime record);

	int updateByPrimaryKey(Teachertime record);
}