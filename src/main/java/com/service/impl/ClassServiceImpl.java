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

	public List<Class> getAllClassByState(Integer state,Integer availableNum) {
		Param p=new Param(state, availableNum);
		return classMapper.getAllClassByState(p);
	}

	public int updateClassStateByName(Param p) {
		return classMapper.updateClassStateByName(p);
	}

	public List<Class> getAllClassBySzx() {
		// TODO Auto-generated method stub
		return classMapper.getAllClassBySzx();
	}

	@Override
	public int insert(Class record){
		return classMapper.insert(record);
	}
	
	@Override
	public int deleteByPrimaryKey(Integer classid){
		return classMapper.deleteByPrimaryKey(classid);
	}
	
	@Override 
	public int updateByPrimaryKey(Class record){
		return classMapper.updateByPrimaryKey(record);
	}
	
	@Override
	public 	List<Class> getAllClass(){
		List<Class> classs = classMapper.getAllClass();
		return classs;
	}

	@Override
	public List<Class> getAllClassByState(Integer state) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insertSelective(Class record) {
		// TODO Auto-generated method stub
		return classMapper.insertSelective(record);
	}
}
