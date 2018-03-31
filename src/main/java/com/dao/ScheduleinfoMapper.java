package com.dao;

import java.util.List;

import com.entity.ClassTableJson;
import com.entity.Scheduleinfo;

public interface ScheduleinfoMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Scheduleinfo record);

    int insertSelective(ClassTableJson record);

    Scheduleinfo selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Scheduleinfo record);

    int updateByPrimaryKey(Scheduleinfo record);
    //删除所有课表
    int deleteAllSchedule();
    
    List<Scheduleinfo> getAllSchedule();
}