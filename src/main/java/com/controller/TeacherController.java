package com.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.entity.Teacher;
import com.service.TeacherService;



@Controller
public class TeacherController {

	@Autowired
	private TeacherService teacherService;	
	
	
	@RequestMapping("json/QueryAllTeacher")
	public String getAllTeacher(Model model){
		
		List<Teacher> tlists=teacherService.getAllTeacher();
		model.addAttribute("tlists", tlists);
		
		return "../teacher.jsp";
	}

	@RequestMapping("json/QueryTeacher")
	@ResponseBody
	public List<Teacher> getAllTeacher(String className){
		
		List<Teacher> tlists=teacherService.getTname(className);
		
		return tlists;
	}

	//通过课程和科目找老师
	@RequestMapping("json/QueryTeacher2")
	@ResponseBody
	public List<Teacher> QueryTeacherBySubjectAndClass(String className,String subjectName){
		
		List<Teacher> tlists=teacherService.getTname2(className,subjectName);
		
		return tlists;
	}

	
}
