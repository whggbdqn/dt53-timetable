package com.dao;


import java.util.List;

import com.entity.Teacher;

public interface TeacherMapper {
	
	/*List<Teacher> getTname(String classname);

	
	List<Teacher> getTname2(String classname,String subjectname);
	

	//以姓名模糊查询
	List<Teacher> getTeacherFuzzyQuery(String name);
	
    //查询全部
	List<Teacher> getAllTeacher();
	
	//通过教员编号删除
	int deleteByPrimaryKey(Integer teacherid);
	
    //通过教员实体添加
	int insert(Teacher record);
	
    //查询单个教员
	Teacher selectByPrimaryKey(Integer teacherid);
	
    //通过教员实体更新
	int updateByPrimaryKey(Teacher record);*/
	
List<Teacher> getTname(String classname);

	
	List<Teacher> getTname2(String classname,String subjectname);
	

	//以姓名模糊查询
	List<Teacher> getTeacherFuzzyQuery(String name);
	
    //查询全部
	List<Teacher> getAllTeacher();
	
	//通过教员编号删除
	int deleteByPrimaryKey(Integer teacherid);
	
    //通过教员实体添加
	int insert(Teacher record);
	
    //查询单个教员
	Teacher selectByPrimaryKey(Integer teacherid);
	
    //通过教员实体更新
	int updateByPrimaryKey(Teacher record);
	
	//黄亮
	
	int updateByPrimaryKeySelective(Teacher record);
	
    //查询所有教员
    List<Teacher> getAllTeacher2();
    
    //教员连接角色查询
    Teacher getAllTeacherAndRole(Integer teacherid);
}