package com.dao;

import com.entity.Classandroom;

public interface ClassandroomMapper {
	//通过主键删除
	int deleteByPrimaryKey(Integer classandroomid);

	int insert(Classandroom record);

	int insertSelective(Classandroom record);

	Classandroom selectByPrimaryKey(Integer classandroomid);

	int updateByPrimaryKeySelective(Classandroom record);

	int updateByPrimaryKey(Classandroom record);
}