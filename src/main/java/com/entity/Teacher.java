package com.entity;

public class Teacher {

	/*private Integer teacherid;
	private Integer subjectid;
	private Integer classid;
	private Integer teacherstate;
	private String teacherName;
	private String teacherTel;
	// 额外添加
	private String subjectname;
	private String classesname;

	public String getSubjectname() {
		return subjectname;
	}

	public void setSubjectname(String subjectname) {
		this.subjectname = subjectname;
	}

	public Integer getTeacherid() {
		return teacherid;
	}

	public void setTeacherid(Integer teacherid) {
		this.teacherid = teacherid;
	}

	public Integer getSubjectid() {
		return subjectid;
	}

	public void setSubjectid(Integer subjectid) {
		this.subjectid = subjectid;
	}

	public Integer getTeacherstate() {
		return teacherstate;
	}

	public void setTeacherstate(Integer teacherstate) {
		this.teacherstate = teacherstate;
	}

	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName == null ? null : teacherName.trim();
	}

	public String getTeacherTel() {
		return teacherTel;
	}

	public void setTeacherTel(String teacherTel) {
		this.teacherTel = teacherTel == null ? null : teacherTel.trim();
	}

	public String getClassesname() {
		return classesname;
	}

	public void setClassesname(String classesname) {
		this.classesname = classesname;
	}

	public Integer getClassid() {
		return classid;
	}

	public void setClassid(Integer classid) {
		this.classid = classid;
	}*/
	
	
	private Integer teacherid;
	private Integer subjectid;
	private Integer classid;
	private Integer teacherstate;
	private String teacherName;
	private String teacherTel;
	// 额外添加
	private String subjectname;
	private String classname;
	private Integer teacherclassid;
	
	public String getSubjectname() {
		return subjectname;
	}

	public void setSubjectname(String subjectname) {
		this.subjectname = subjectname;
	}

	public Integer getTeacherid() {
		return teacherid;
	}

	public void setTeacherid(Integer teacherid) {
		this.teacherid = teacherid;
	}

	public Integer getSubjectid() {
		return subjectid;
	}

	public void setSubjectid(Integer subjectid) {
		this.subjectid = subjectid;
	}

	public Integer getTeacherstate() {
		return teacherstate;
	}

	public void setTeacherstate(Integer teacherstate) {
		this.teacherstate = teacherstate;
	}

	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName == null ? null : teacherName.trim();
	}

	public String getTeacherTel() {
		return teacherTel;
	}

	public void setTeacherTel(String teacherTel) {
		this.teacherTel = teacherTel == null ? null : teacherTel.trim();
	}
	public Integer getClassid() {
		return classid;
	}

	public void setClassid(Integer classid) {
		this.classid = classid;
	}
	
	
	//黄亮
	 private String uname;

    private String pwd;

    private Integer rid;
    
  //多人对应一个角色
    private Role role;

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public Integer getRid() {
		return rid;
	}

	public void setRid(Integer rid) {
		this.rid = rid;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Integer getTeacherclassid() {
		return teacherclassid;
	}

	public void setTeacherclassid(Integer teacherclassid) {
		this.teacherclassid = teacherclassid;
	}

	public String getClassname() {
		return classname;
	}

	public void setClassname(String classname) {
		this.classname = classname;
	}

}