package com.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.TeacherMapper;
import com.entity.Teacher;
import com.service.TeacherService;


@Service("teacherService")
public class TeacherServiceImpl implements TeacherService {
	
	@Autowired
	private TeacherMapper teacherMapper;
	
	@Override
	public	List<Teacher> getAllTeacher(){
		 
		List<Teacher> teachers = teacherMapper.getAllTeacher();
		return teachers;
	}

	@Override
	public int deleteByPrimaryKey(Integer teacherid) {

		return teacherMapper.deleteByPrimaryKey(teacherid);
	}

	@Override
	public int insert(Teacher record) {

		return teacherMapper.insert(record);
	}

	@Override
	public Teacher selectByPrimaryKey(Integer teacherid) {
	
		return teacherMapper.selectByPrimaryKey(teacherid);
	}

	@Override
	public int updateByPrimaryKey(Teacher record) {
		
		return teacherMapper.updateByPrimaryKey(record);
	}

	
}