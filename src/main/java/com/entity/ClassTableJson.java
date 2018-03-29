package com.entity;

/**
 * 课程表json数据实体，获取前台传来的json数据
 * @author 沈哲曦
 *
 */
public class ClassTableJson extends Scheduleinfo{
	
		private String dateTime;

	    private String className_am;

	    private String teachername_am;

	    private String classInfo_am;

	    private String className_pm;

	    private String teachername_pm;

	    private String classInfo_pm;

	    private String className_eve;

	    private String teachername_eve;

	    private String classInfo_eve;

		public String getDateTime() {
			return dateTime;
		}

		public void setDateTime(String dateTime) {
			this.dateTime = dateTime;
		}

		public String getClassName_am() {
			return className_am;
		}

		public void setClassName_am(String className_am) {
			this.className_am = className_am;
		}

		public String getTeachername_am() {
			return teachername_am;
		}

		public void setTeachername_am(String teachername_am) {
			this.teachername_am = teachername_am;
		}

		public String getClassInfo_am() {
			return classInfo_am;
		}

		public void setClassInfo_am(String classInfo_am) {
			this.classInfo_am = classInfo_am;
		}

		public String getClassName_pm() {
			return className_pm;
		}

		public void setClassName_pm(String className_pm) {
			this.className_pm = className_pm;
		}

		public String getTeachername_pm() {
			return teachername_pm;
		}

		public void setTeachername_pm(String teachername_pm) {
			this.teachername_pm = teachername_pm;
		}

		public String getClassInfo_pm() {
			return classInfo_pm;
		}

		public void setClassInfo_pm(String classInfo_pm) {
			this.classInfo_pm = classInfo_pm;
		}

		public String getClassName_eve() {
			return className_eve;
		}

		public void setClassName_eve(String className_eve) {
			this.className_eve = className_eve;
		}

		public String getTeachername_eve() {
			return teachername_eve;
		}

		public void setTeachername_eve(String teachername_eve) {
			this.teachername_eve = teachername_eve;
		}

		public String getClassInfo_eve() {
			return classInfo_eve;
		}

		public void setClassInfo_eve(String classInfo_eve) {
			this.classInfo_eve = classInfo_eve;
		}

	    
	
}
