package com.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.TeacherclassMapper;
import com.entity.Teacherclass;
import com.service.TeacherClassService;

@Service
public class TeacherClassServiceImpl implements TeacherClassService {

	
	@Autowired
	private TeacherclassMapper teacherClassMapper;
	
	
	@Override
	public List<Teacherclass> getAllTeacherclass() {
		// TODO Auto-generated method stub
		return teacherClassMapper.getAllTeacherclass();
	}

	@Override
	public int deleteByPrimaryKey(Integer teacherclassid) {
		// TODO Auto-generated method stub
		return teacherClassMapper.deleteByPrimaryKey(teacherclassid);
	}

	@Override
	public int insert(Teacherclass record) {
		// TODO Auto-generated method stub
		return teacherClassMapper.insert(record);
	}

	@Override
	public int insertSelective(Teacherclass record) {
		// TODO Auto-generated method stub
		return teacherClassMapper.insertSelective(record);
	}

	@Override
	public Teacherclass selectByPrimaryKey(Integer teacherclassid) {
		// TODO Auto-generated method stub
		return teacherClassMapper.selectByPrimaryKey(teacherclassid);
	}

	@Override
	public int updateByPrimaryKeySelective(Teacherclass record) {
		// TODO Auto-generated method stub
		return teacherClassMapper.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKey(Teacherclass record) {
		// TODO Auto-generated method stub
		return teacherClassMapper.updateByPrimaryKey(record);
	}

}
