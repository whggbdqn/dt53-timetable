package com.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.ScheduleinfoMapper;
import com.entity.ClassTableJson;
import com.entity.Scheduleinfo;
import com.service.ScheduleinfoService;

@Service("scheduleinfoService")
public class ScheduleinfoServiceImpl implements ScheduleinfoService {
	@Autowired
	private ScheduleinfoMapper scheduleinfoMapper;

	@Override
	public int insertSelective(ClassTableJson record) {
		scheduleinfoMapper.insertSelective(record);
		return 0;
	}

	@Override
	public int deleteAllSchedule() {
		return scheduleinfoMapper.deleteAllSchedule();
	}

	@Override
	public List<Scheduleinfo> getAllSchedule() {
		return scheduleinfoMapper.getAllSchedule();
	}

}
