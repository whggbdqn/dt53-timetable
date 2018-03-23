package com.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.ClassMapper;
import com.entity.Class;
import com.service.ClassService;


@Service("classService")
public class ClassServiceImpl implements ClassService {
	
	@Autowired
	private ClassMapper classMapper;

	@Override
	public List<Class> getAllClassByState(Integer state) {
		return classMapper.getAllClassByState(state);
	}

}
