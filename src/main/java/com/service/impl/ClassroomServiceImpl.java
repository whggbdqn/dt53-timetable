package com.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.ClassroomMapper;
import com.entity.Classroom;
import com.service.ClassroomService;

@Service("classroomService")
public class ClassroomServiceImpl implements ClassroomService {
	@Autowired
	private ClassroomMapper classroomMapper;

	@Override
	public List<Classroom> getAllRoomByState(Integer state) {
		return classroomMapper.getAllRoomByState(state);
	}

	@Override
	public List<Classroom> getAllRoom() {
		// TODO Auto-generated method stub
		return classroomMapper.getAllRoom();
	}

}
