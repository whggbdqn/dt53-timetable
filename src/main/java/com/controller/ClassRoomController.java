package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.entity.Classroom;
import com.service.ClassroomService;
@Controller
public class ClassRoomController {
	@Autowired
	private ClassroomService classroomService;
	@RequestMapping("getAllRoom")
	@ResponseBody
	public List<Classroom> getAllRoom() {
		return classroomService.getAllRoom();
	}
}
