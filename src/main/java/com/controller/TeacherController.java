package com.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.entity.Teacher;
import com.service.TeacherService;



@Controller
public class TeacherController {

	@Autowired
	private TeacherService teacherService;	
	@RequestMapping("json/QueryClass")
	@ResponseBody
	public List<Teacher> getAllTeacher(){
		
		List<Teacher> tlists=teacherService.getAllTeacher();
		
		return tlists;
	}

	
}
