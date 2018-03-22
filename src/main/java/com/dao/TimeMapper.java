package com.dao;

import com.entity.Time;

public interface TimeMapper {

	int deleteByPrimaryKey(Integer timeid);

	int insert(Time record);

	int insertSelective(Time record);

	Time selectByPrimaryKey(Integer timeid);

	int updateByPrimaryKeySelective(Time record);

	int updateByPrimaryKey(Time record);
}