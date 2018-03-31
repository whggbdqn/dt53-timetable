package com.service;

import java.util.List;

import com.entity.Classroom;

public interface ClassroomService {
	
	/**
	 * 得到指定状态的教室
	 * @param state 教室状态
	 * @return 所有对应状态的教室
	 */
	List<Classroom> getAllRoomByState(Integer state);
	
	
	List<Classroom> getAllRoom();
}
