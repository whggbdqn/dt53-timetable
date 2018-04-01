package com.dao;

import java.util.List;

import com.entity.Subject;

public interface SubjectMapper {

	List<Subject> getAllsubject();
	
	int deleteByPrimaryKey(Integer subjectid);

	int insert(Subject record);

	int insertSelective(Subject record);

	Subject selectByPrimaryKey(Integer subjectid);

	int updateByPrimaryKeySelective(Subject record);

	int updateByPrimaryKey(Subject record);
}