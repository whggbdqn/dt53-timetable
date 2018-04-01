package com.controller;


import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.entity.Subject;
import com.entity.Teacher;
import com.entity.Teacherclass;
import com.service.ClassService;
import com.service.JurisdictionService;
import com.service.RjService;
import com.service.RoleService;
import com.service.SubjectService;
import com.service.TeacherClassService;
import com.service.TeacherService;
import com.service.impl.SubjectServiceImpl;
import com.entity.Class;
import com.entity.Rj;
import com.entity.Role;


@Controller
public class TeacherController {

	/*@Autowired
	private TeacherService teacherService;	
	
	//异步返回所有老师数据
	@RequestMapping("json/QueryAllTeacherAjax")
	@ResponseBody
	public List<Teacher> getAllTeacherByAjax(){		
		List<Teacher> tlists=teacherService.getAllTeacher();	
		return tlists;
	}
	
	
	
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
	}*/

	@Autowired(required = true)
	private TeacherService teacherService;
	@Autowired
	private TeacherClassService teacherclassService;
	@Autowired
	private ClassService classService;
	@Autowired(required = true)
	private SubjectService subjectService;

	// 传递老师集合
	@RequestMapping("json/getAllTeacher")
	public String getAllTeacher( Model model) {

		// 获取教师级集合
		List<Teacher> tlists = teacherService.getAllTeacher();
		model.addAttribute("tlists", tlists);
		
		return "../teacher.jsp";
	}

	// 模糊查询
	@RequestMapping("json/getTeacherFuzzyQuery")
	@ResponseBody
	public List<Teacher> getTeacherFuzzyQuery(String name) {
		
System.out.println(name);
		List<Teacher> tlists = teacherService.getTeacherFuzzyQuery("%"+name+"%");

		return tlists;
	}
	
	// 传递班级和科目集合
	@RequestMapping("json/getCandS")
	public String addTeacher(Model model) {
		// 获取班级集合
		List<Class> clists = classService.getAllClass();
		model.addAttribute("clists", clists);
		// 获取科目集合
		List<Subject> slists = subjectService.getAllsubject();
		model.addAttribute("slists", slists);
        // 获取权限集合
		
		
		return "../addteacher.jsp";
	}

	// 传递老师集合添加
	@RequestMapping("json/addAllTeacher")
	public String addTeacher(Teacher teacher, Teacherclass teacherclass) {

		int a = teacherService.insert(teacher);
		
		teacherclass.setTeacherid(teacher.getTeacherid());

		int b = teacherclassService.insert(teacherclass);
		return "getAllTeacher.do";
	}

	// 老师班级关系删除
	@RequestMapping("json/delTeacher")
	public String delTeacher(Integer teacherclassid) {

		int b = teacherclassService.deleteByPrimaryKey(teacherclassid);

		return "getAllTeacher.do";
	}

	// 查单条
	@RequestMapping("json/soTeacher")
	public String soTeacher(Integer teacherclassid, Model model) {

		Teacher teacher = teacherService.selectByPrimaryKey(teacherclassid);

		model.addAttribute("teacher", teacher);
		// 获取班级集合
		List<Class> clists = classService.getAllClass();
		model.addAttribute("clists", clists);
		// 获取科目集合
		List<Subject> slists = subjectService.getAllsubject();
		model.addAttribute("slists", slists);
		model.addAttribute("teacherclassid", teacherclassid);

		return "../updateteacher.jsp";
	}

	// 修改
	@RequestMapping("json/updateTeacher")
	public String updateTeacher(Teacher teacher, Teacherclass teacherclass) {
		int a = teacherService.updateByPrimaryKey(teacher);

		int b = teacherclassService.updateByPrimaryKey(teacherclass);

		System.out.println(a + "," + b);

		return "getAllTeacher.do";
	}

	@RequestMapping("json/QueryTeacher")
	// 用于异步
	@ResponseBody
	public List<Teacher> getAllTeacher(String className) {
		List<Teacher> tlists = teacherService.getTname(className);
		return tlists;
	}

	// 通过课程和科目找老师
	@RequestMapping("json/QueryTeacher2")
	@ResponseBody
	public List<Teacher> QueryTeacherBySubjectAndClass(String className, String subjectName) {

		List<Teacher> tlists = teacherService.getTname2(className, subjectName);

		return tlists;
	}
	
	
	
	
	
	//黄亮
	//@Autowired
	//private TeacherService teacherService;
	
	@Autowired
	private RjService rjService;
	
	@Autowired
	private JurisdictionService jurisdictionService;
	
	@Autowired
	private RoleService roleService;
	
	
	@ResponseBody
	@RequestMapping("ttt.do")
	public List<Object> show(String userName,String password){
		List<Teacher> T=teacherService.getAllTeacher2();
		List<Object> list=new ArrayList<Object>();
		for (Teacher t : T) {
			if(userName.equals(t.getUname()) && password.equals(t.getPwd())){
				list.add(t.getRid());
				list.add(t.getTeacherName());
				return list;
			}
		}
		return null;
	}
	
	@RequestMapping("ttt2.do")
	public String show2(int rId,Model model){
		model.addAttribute("rId", rId);
		return "main.jsp";
	}
	
	@ResponseBody
	@RequestMapping("ttt3.do")
	public List<Rj> show3(int rId){
		List<Rj> rjs = rjService.getRjs(rId);
		for (Rj rj : rjs) {
			rj.getJurisdiction().setSon(jurisdictionService.getS(rj.getJid()));
		}
		return rjs;
	}
	
	@RequestMapping("ttt4.do")
	public String show4(int rId,Model model,String teacherName){
		List<Rj> rjs = rjService.getRjs(rId);
		for (Rj rj : rjs) {
			rj.getJurisdiction().setSon(jurisdictionService.getS(rj.getJid()));
		}
		model.addAttribute("rjs", rjs);
		model.addAttribute("teacherName", teacherName);
		return "main.jsp";
	}
	
	
	@ResponseBody
	@RequestMapping("ttt5.do")
	public List<Teacher> show5(){
		List<Teacher> list=teacherService.getAllTeacher2();
		return list;
	}
	
	@ResponseBody
	@RequestMapping("ttt6.do")
	public List<Role> show6(){
		List<Role> list=roleService.getAllRole();
		return list;
	}
	
	@ResponseBody
	@RequestMapping("ttt7.do")
	public Teacher show7(int teacherid){
		Teacher teacher=teacherService.getAllTeacherAndRole(teacherid);
		return teacher;
	}
	
	@ResponseBody
	@RequestMapping("ttt8.do")
	public int show8(Teacher teacher){
		int count=teacherService.updateByPrimaryKeySelective(teacher);
		return count;
	}
	
	
}
