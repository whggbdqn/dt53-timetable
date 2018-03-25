package com.entity;

public class Param {
	
	private Integer state;

	private Integer availableNum;
	
	public Param(){}
	public Param(Integer state,Integer availableNum){
		this.state=state;
		this.availableNum=availableNum;
	}

	public Integer getState() {
		return state;
	}

	public void setState(Integer state) {
		this.state = state;
	}

	public Integer getAvailableNum() {
		return availableNum;
	}

	public void setAvailableNum(Integer availableNum) {
		this.availableNum = availableNum;
	}
}
