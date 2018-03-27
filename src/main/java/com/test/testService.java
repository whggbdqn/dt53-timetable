package com.test;

import java.util.List;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.entity.Teacher;


import com.service.TeacherService;

public class testService {

	// 测试教员
	@Test
	public void testteacherService() {
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
		TeacherService teacherService = applicationContext.getBean(TeacherService.class);
		List<Teacher> teacherServiceimpl = teacherService.getAllTeacher();
		System.out.println(teacherServiceimpl.size() + "个老师");
		for (Teacher teacher : teacherServiceimpl) {
			System.out.println("teachername" + teacher.getTeacherName());
			System.out.println("teachersubjectname" + teacher.getSubjectname());
          
		}

	}
	
	@Test
	public void testteacherTname() {
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
		TeacherService teacherService = applicationContext.getBean(TeacherService.class);
		List<Teacher> teachername = teacherService.getTname("DT53");
		System.out.println(teachername.size() + "个老师");
		for (Teacher teacher : teachername) {
			System.out.println("teachername" + teacher.getTeacherName());
			System.out.println("teachername" + teacher.getSubjectname());
		}

	}
	
	
	@Test
	public void testteacherTname2() {
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
		TeacherService teacherService = applicationContext.getBean(TeacherService.class);
		List<Teacher> teachername = teacherService.getTname2("DT53","自习");
		System.out.println(teachername.size() + "个老师");
	
		for (Teacher teacher : teachername) {
			System.out.println("teachername" + teacher.getTeacherName());
		}

	}

}
