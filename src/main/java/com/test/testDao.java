package com.test;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.dao.ClassMapper;
import com.dao.ClassroomMapper;


public class testDao {
	
	@Test
	public void testClassRoomDao(){
		ApplicationContext applicationContext= new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
		ClassroomMapper classroomMapper = applicationContext.getBean(ClassroomMapper.class);
		System.out.println(classroomMapper.getAllRoomByState(0).size());
	
	}
	
	@Test
	public void testClassDao(){
		ApplicationContext applicationContext= new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
		ClassMapper classMapper = applicationContext.getBean(ClassMapper.class);
		System.out.println(classMapper.getAllClassByState(0).size());
	
	}
}
