package com.service;

import java.util.List;

import com.entity.Class;
import com.entity.Param;

public interface ClassService {

	/**
	 * 得到所有指定状态的班级
	 * @param state 班级状态
	 * @return 指定状态班级
	 */
	List<Class> getAllClassByState(Integer state,Integer availableNum);
	
	/**
	 * 通过班级名字改变班级状态
	 * @param p 参数实体
	 * @return 影响行数
	 */
	int updateClassStateByName(Param p);
	
	/**
	 * 获得所有班级
	 * @return
	 */
	List<Class> getAllClassBySzx();
	
	/**
	 * 得到所有指定状态的班级
	 * @param state 班级状态
	 * @return 指定状态班级
	 */
	List<Class> getAllClassByState(Integer state);
	int insert(Class record);
	

	int deleteByPrimaryKey(Integer classid);
	int updateByPrimaryKey(Class record);
	List<Class> getAllClass();

	int insertSelective(Class record);


}
