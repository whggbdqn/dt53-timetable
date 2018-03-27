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

	@Override
	public List<Teacher> getTeacherFuzzyQuery(String name) {
		// TODO Auto-generated method stub
		return teacherMapper.getTeacherFuzzyQuery(name);
	}

	@Override
	public List<Teacher> getTname(String classname) {
		// TODO Auto-generated method stub
		return teacherMapper.getTname(classname);
	}

	@Override
	public List<Teacher> getTname2(String classname, String subjectname) {
		// TODO Auto-generated method stub
		return teacherMapper.getTname2(classname, subjectname);
	}

	
}
