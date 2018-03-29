package com.dao;

import java.util.List;

import com.entity.Class;
import com.entity.Param;

public interface ClassMapper {

	int deleteByPrimaryKey(Integer classid);

	int insert(Class record);

	int insertSelective(Class record);

	Class selectByPrimaryKey(Integer classid);

	int updateByPrimaryKeySelective(Class record);

	int updateByPrimaryKey(Class record);
	
	/**
	 * 得到所有指定状态的班级
	 * @param state 班级状态
	 * @return 指定状态班级
	 */

	List<Class> getAllClassByState(Integer state);
	
	/**
	 * 通过班级名字改变班级状态
	 * @param p 参数实体
	 * @return 影响行数
	 */
	int updateClassStateByName(Param p);

	List<Class> getAllClassByState(Param p);
	
	/**
	 * 获得所有班级
	 * @return
	 */
	List<Class> getAllClassBySzx();

}