package com.entity;

public class Subject {

	private Integer subjectid;
	private String subjectname;

	public Integer getSubjectid() {
		return subjectid;
	}

	public void setSubjectid(Integer subjectid) {
		this.subjectid = subjectid;
	}

	public String getSubjectname() {
		return subjectname;
	}

	public void setSubjectname(String subjectname) {
		this.subjectname = subjectname == null ? null : subjectname.trim();
	}
}