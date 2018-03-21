package com.entity;

public class Class {

	private Integer classid;
	private String classname;
	private Integer classnum;
	private Integer classstate;

	public Integer getClassid() {
		return classid;
	}

	public void setClassid(Integer classid) {
		this.classid = classid;
	}

	public String getClassname() {
		return classname;
	}

	public void setClassname(String classname) {
		this.classname = classname == null ? null : classname.trim();
	}

	public Integer getClassnum() {
		return classnum;
	}

	public void setClassnum(Integer classnum) {
		this.classnum = classnum;
	}

	public Integer getClassstate() {
		return classstate;
	}

	public void setClassstate(Integer classstate) {
		this.classstate = classstate;
	}
}