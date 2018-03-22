package com.entity;

public class Teacher {

	private Integer teacherid;
	private Integer subjectid;
	private Integer classid;
	private Integer teacherstate;
	private String teacherName;
	private String teacherTel;

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

	public Integer getClassid() {
		return classid;
	}

	public void setClassid(Integer classid) {
		this.classid = classid;
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
}