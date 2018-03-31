package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.entity.Scheduleinfo;
import com.service.ScheduleinfoService;

@Controller
public class ScheduleController {
	
	@Autowired
	private ScheduleinfoService scheduleinfoService;
	
	@RequestMapping("getAllSchedule")
	@ResponseBody
	public List<Scheduleinfo> getAllSchedule() {
		return scheduleinfoService.getAllSchedule();
	}
}

