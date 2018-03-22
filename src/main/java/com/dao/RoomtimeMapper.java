package com.dao;

import com.entity.Roomtime;

public interface RoomtimeMapper {

	int deleteByPrimaryKey(Integer classtimeid);

	int insert(Roomtime record);

	int insertSelective(Roomtime record);

	Roomtime selectByPrimaryKey(Integer classtimeid);

	int updateByPrimaryKeySelective(Roomtime record);

	int updateByPrimaryKey(Roomtime record);
}