package com.service;

import java.util.List;

import com.entity.ClassTableJson;
import com.entity.Scheduleinfo;


public interface ScheduleinfoService {
	/**
	 * 插入一条课表记录
	 * @param record 课表实体
	 * @return 影响行
	 */
    int insertSelective(ClassTableJson record);
    
    //删除所有课表
    int deleteAllSchedule();
    
    List<Scheduleinfo> getAllSchedule();
}
