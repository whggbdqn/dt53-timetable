package com.test;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.dao.ClassMapper;
import com.dao.ClassroomMapper;
import com.dao.TeacherMapper;


public class testDao {
	
	@Test
	public void testClassRoomDao(){
		ApplicationContext applicationContext= new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
		ClassroomMapper classroomMapper = applicationContext.getBean(ClassroomMapper.class);
		System.out.println(classroomMapper.getAllRoomByState(0).size()+"教室");
	
	}
	
	@Test
	public void testClassDao(){
		ApplicationContext applicationContext= new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
		ClassMapper classMapper = applicationContext.getBean(ClassMapper.class);
		System.out.println(classMapper.getAllClassByState(0).size()+"班级");
	
	}
	
	//测试教员
	@Test
	public void testTeacherDao(){
		ApplicationContext applicationContext= new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
		TeacherMapper teacherMapper = applicationContext.getBean(TeacherMapper.class);
		System.out.println(teacherMapper.getAllTeacher().size()+"老师");
	
	}
}
