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

	@Test
	// 获取所有符合教室容量的班级
	public void testClassRoom() {
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
		ClassroomMapper classroomMapper = applicationContext.getBean(ClassroomMapper.class);
		ClassMapper classMapper = applicationContext.getBean(ClassMapper.class);
		ClasstableService classtableService = applicationContext.getBean(ClasstableService.class);

		// 将查询出来符合教室的班级放在map中，key为教室名，value为该教室下所有班级
		Map<String, List<Class>> maps = new HashMap<String, List<Class>>();
		List<Classroom> roomByState = classroomMapper.getAllRoomByState(0);
		for (Classroom classroom : roomByState) {
			List<Class> enableClass = classtableService.getClassesCanSetInClassRoom(classroom);
			if (null != enableClass)
				maps.put(classroom.getRoomName(), enableClass);
			System.out.println(classroom.getRoomName());
		}
		List<Class> lists = maps.get("11楼机房");
		for (Class class1 : lists) {
			System.out.println(class1.getClassname());
		}

	}

	@Test
	public void testServicemethod() {
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
		ClassroomMapper classroomMapper = applicationContext.getBean(ClassroomMapper.class);
		ClasstableService classtableService = applicationContext.getBean(ClasstableService.class);
		Classroom classroom = new Classroom();
		classroom.setAvailablenum(30);
		List<Class> classesCanSetInClassRoom = classtableService.getClassesCanSetInClassRoom(classroom);
		System.out.println(classesCanSetInClassRoom.size());

	}

	// 测试教员
	@Test
	public void testteacherService() {
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
		TeacherService teacherService = applicationContext.getBean(TeacherService.class);
		List<Teacher> teacherServiceimpl = teacherService.getAllTeacher();
		System.out.println(teacherServiceimpl.size() + "老师");

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
}
