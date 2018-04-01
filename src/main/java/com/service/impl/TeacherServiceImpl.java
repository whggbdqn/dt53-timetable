package com.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.TeacherMapper;
import com.entity.Teacher;
import com.service.TeacherService;


@Service("teacherService")
public class TeacherServiceImpl implements TeacherService {
	
	/*@Autowired
	private TeacherMapper teacherMapper;
	
	public	List<Teacher> getAllTeacher(){
		 
		List<Teacher> teachers = teacherMapper.getAllTeacher();
		return teachers;
	}

	public int deleteByPrimaryKey(Integer teacherid) {

		return teacherMapper.deleteByPrimaryKey(teacherid);
	}
	public int insert(Teacher record) {

		return teacherMapper.insert(record);
	}

	public Teacher selectByPrimaryKey(Integer teacherid) {
	
		return teacherMapper.selectByPrimaryKey(teacherid);
	}

	public int updateByPrimaryKey(Teacher record) {
		
		return teacherMapper.updateByPrimaryKey(record);
	}

	public List<Teacher> getTeacherFuzzyQuery(String name) {
		// TODO Auto-generated method stub
		return teacherMapper.getTeacherFuzzyQuery(name);
	}

	public List<Teacher> getTname(String classname) {
		// TODO Auto-generated method stub
		return teacherMapper.getTname(classname);
	}

	public List<Teacher> getTname2(String classname, String subjectname) {
		// TODO Auto-generated method stub
		return teacherMapper.getTname2(classname, subjectname);
	}
*/
	
	@Autowired
	private TeacherMapper teacherMapper;
	
	public	List<Teacher> getAllTeacher(){
		 
		List<Teacher> teachers = teacherMapper.getAllTeacher();
		return teachers;
	}

	public int deleteByPrimaryKey(Integer teacherid) {

		return teacherMapper.deleteByPrimaryKey(teacherid);
	}
	public int insert(Teacher record) {

		return teacherMapper.insert(record);
	}

	public Teacher selectByPrimaryKey(Integer teacherid) {
	
		return teacherMapper.selectByPrimaryKey(teacherid);
	}

	public int updateByPrimaryKey(Teacher record) {
		
		return teacherMapper.updateByPrimaryKey(record);
	}

	public List<Teacher> getTeacherFuzzyQuery(String name) {
		// TODO Auto-generated method stub
		return teacherMapper.getTeacherFuzzyQuery(name);
	}

	public List<Teacher> getTname(String classname) {
		// TODO Auto-generated method stub
		return teacherMapper.getTname(classname);
	}

	public List<Teacher> getTname2(String classname, String subjectname) {
		// TODO Auto-generated method stub
		return teacherMapper.getTname2(classname, subjectname);
	}

	//黄亮
	//查询所有教员
		public List<Teacher> getAllTeacher2() {
			return teacherMapper.getAllTeacher2();
		}
		
		//教员连接角色查询
	    public Teacher getAllTeacherAndRole(Integer teacherid){
	    	return teacherMapper.getAllTeacherAndRole(teacherid);
	    }

	    
	    //修改人员角色
	    public int updateByPrimaryKeySelective(Teacher record) {
	    	return teacherMapper.updateByPrimaryKeySelective(record);
	    }
}
