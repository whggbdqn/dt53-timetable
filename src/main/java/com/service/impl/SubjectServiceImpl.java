package com.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.SubjectMapper;
import com.entity.Subject;
import com.service.SubjectService;

@Service
public class SubjectServiceImpl implements SubjectService {

	@Autowired
	private SubjectMapper subjectMapper;
	@Override
	public List<Subject> getAllsubject() {
		// TODO Auto-generated method stub
		return subjectMapper.getAllsubject();
	}

}
