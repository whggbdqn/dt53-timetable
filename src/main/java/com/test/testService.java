package com.test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.dao.ClassMapper;
import com.dao.ClassroomMapper;
import com.entity.Class;
import com.entity.Classroom;
import com.entity.Param;
import com.entity.Teacher;
import com.service.ClassService;
import com.service.ClasstableService;
import com.service.TeacherService;

public class testService {
	
	// 测试教员
	@Test
	public void testteacherService() {
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
		TeacherService teacherService = applicationContext.getBean(TeacherService.class);
		List<Teacher> teacherServiceimpl = teacherService.getAllTeacher();
		System.out.println(teacherServiceimpl.size() + "个老师");

	}
	
	//测试通过班级名修改班级状态
	@Test
	public void testChangeClassState() {
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
		ClassService classService = applicationContext.getBean(ClassService.class);
		Param p=new Param(1,"DT53");
		int info= classService.updateClassStateByName(p);
		System.out.println(info);

	}

	// 测试教员删除
		@Test
		public void testteacherServicedel() {
			ApplicationContext applicationContext = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
			TeacherService teacherService = applicationContext.getBean(TeacherService.class);
			int a = teacherService.deleteByPrimaryKey(13);
			System.out.println("删除影响行数"+a);

		}
		
		// 测试教员添加
		@Test
		public void testteacherServiceadd() {
			ApplicationContext applicationContext = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
			TeacherService teacherService = applicationContext.getBean(TeacherService.class);
			
			Teacher teacher=new Teacher();
			teacher.setTeacherName("aaa");
			
			int a = teacherService.insert(teacher);
			System.out.println("添加影响行数"+a);

		}
	
		// 测试教员更改
		@Test
		public void testteacherServiceupdate() {
			ApplicationContext applicationContext = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
			TeacherService teacherService = applicationContext.getBean(TeacherService.class);
			
			Teacher teacher=new Teacher();
			teacher.setTeacherName("aaa");
			teacher.setTeacherid(14);;
			
			int a = teacherService.updateByPrimaryKey(teacher);
			
			System.out.println("添加影响行数"+a);

		}
		
		@Test
		public void testteacherTname() {
			ApplicationContext applicationContext = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
			TeacherService teacherService = applicationContext.getBean(TeacherService.class);
			List teachername = teacherService.getTname("DT53");
			System.out.println(teachername.size() + "个老师");

		}

}
