package com.entity;

public class Time {

	private Integer timeid;
	private String timename;

	public Integer getTimeid() {
		return timeid;
	}

	public void setTimeid(Integer timeid) {
		this.timeid = timeid;
	}

	public String getTimename() {
		return timename;
	}

	public void setTimename(String timename) {
		this.timename = timename == null ? null : timename.trim();
	}
}