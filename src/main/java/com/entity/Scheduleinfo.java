package com.entity;

public class Scheduleinfo {
    private Integer id;

    private String datetime;

    private String weekday;

    private String classroom;

    private String classnameAm;

    private String teachernameAm;

    private String classinfoAm;

    private String classnamePm;

    private String teachernamePm;

    private String classinfoPm;

    private String classnameEve;

    private String teachernameEve;

    private String classinfoEve;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime == null ? null : datetime.trim();
    }

    public String getWeekday() {
        return weekday;
    }

    public void setWeekday(String weekday) {
        this.weekday = weekday == null ? null : weekday.trim();
    }

    public String getClassroom() {
        return classroom;
    }

    public void setClassroom(String classroom) {
        this.classroom = classroom == null ? null : classroom.trim();
    }

    public String getClassnameAm() {
        return classnameAm;
    }

    public void setClassnameAm(String classnameAm) {
        this.classnameAm = classnameAm == null ? null : classnameAm.trim();
    }

    public String getTeachernameAm() {
        return teachernameAm;
    }

    public void setTeachernameAm(String teachernameAm) {
        this.teachernameAm = teachernameAm == null ? null : teachernameAm.trim();
    }

    public String getClassinfoAm() {
        return classinfoAm;
    }

    public void setClassinfoAm(String classinfoAm) {
        this.classinfoAm = classinfoAm == null ? null : classinfoAm.trim();
    }

    public String getClassnamePm() {
        return classnamePm;
    }

    public void setClassnamePm(String classnamePm) {
        this.classnamePm = classnamePm == null ? null : classnamePm.trim();
    }

    public String getTeachernamePm() {
        return teachernamePm;
    }

    public void setTeachernamePm(String teachernamePm) {
        this.teachernamePm = teachernamePm == null ? null : teachernamePm.trim();
    }

    public String getClassinfoPm() {
        return classinfoPm;
    }

    public void setClassinfoPm(String classinfoPm) {
        this.classinfoPm = classinfoPm == null ? null : classinfoPm.trim();
    }

    public String getClassnameEve() {
        return classnameEve;
    }

    public void setClassnameEve(String classnameEve) {
        this.classnameEve = classnameEve == null ? null : classnameEve.trim();
    }

    public String getTeachernameEve() {
        return teachernameEve;
    }

    public void setTeachernameEve(String teachernameEve) {
        this.teachernameEve = teachernameEve == null ? null : teachernameEve.trim();
    }

    public String getClassinfoEve() {
        return classinfoEve;
    }

    public void setClassinfoEve(String classinfoEve) {
        this.classinfoEve = classinfoEve == null ? null : classinfoEve.trim();
    }
}