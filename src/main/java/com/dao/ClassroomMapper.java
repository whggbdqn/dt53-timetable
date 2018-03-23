package com.dao;

import java.util.List;

import com.entity.Classroom;

public interface ClassroomMapper {

	int deleteByPrimaryKey(Integer classroomid);

	int insert(Classroom record);

	int insertSelective(Classroom record);

	Classroom selectByPrimaryKey(Integer classroomid);

	int updateByPrimaryKeySelective(Classroom record);

	int updateByPrimaryKey(Classroom record);
	
	/**
	 * 得到指定状态的教室
	 * @param state 教室状态
	 * @return 所有对应状态的教室
	 */
	List<Classroom> getAllRoomByState(Integer state);
}