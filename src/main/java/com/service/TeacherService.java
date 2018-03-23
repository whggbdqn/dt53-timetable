package com.service;

import java.util.List;

import com.entity.Teacher;


/**
 * 关于老师的业务
 * @author 吴迪
 *
 */
public interface TeacherService {
	
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
	
}
