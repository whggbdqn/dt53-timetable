package com.entity;

public class Classroom {

	private Integer classroomid;
	private Integer availablenum;
	private Integer classstate;
	private String roomName;

	public Integer getClassroomid() {
		return classroomid;
	}

	public void setClassroomid(Integer classroomid) {
		this.classroomid = classroomid;
	}

	public Integer getAvailablenum() {
		return availablenum;
	}

	public void setAvailablenum(Integer availablenum) {
		this.availablenum = availablenum;
	}

	public Integer getClassstate() {
		return classstate;
	}

	public void setClassstate(Integer classstate) {
		this.classstate = classstate;
	}

	public String getRoomName() {
		return roomName;
	}

	public void setRoomName(String roomName) {
		this.roomName = roomName == null ? null : roomName.trim();
	}
}