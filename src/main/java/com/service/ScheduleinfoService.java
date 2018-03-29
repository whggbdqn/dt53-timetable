package com.service;

import com.entity.ClassTableJson;


public interface ScheduleinfoService {
	/**
	 * 插入一条课表记录
	 * @param record 课表实体
	 * @return 影响行
	 */
    int insertSelective(ClassTableJson record);
    
    //删除所有课表
    int deleteAllSchedule();
}
