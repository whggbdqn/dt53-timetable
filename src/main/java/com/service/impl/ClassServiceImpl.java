package com.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.ClassMapper;
import com.entity.Class;
import com.entity.Param;
import com.service.ClassService;


@Service("classService")
public class ClassServiceImpl implements ClassService {
	
	@Autowired
	private ClassMapper classMapper;

	@Override
	public List<Class> getAllClassByState(Integer state,Integer availableNum) {
		Param p=new Param(state, availableNum);
		return classMapper.getAllClassByState(p);
	}

	@Override
	public int updateClassStateByName(Param p) {
		return classMapper.updateClassStateByName(p);
	}

}
