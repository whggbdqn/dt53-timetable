package com.entity;

public class Role {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column role.roleId
     *
     * @mbggenerated Tue Mar 27 18:10:46 CST 2018
     */
    private Integer roleid;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column role.roleName
     *
     * @mbggenerated Tue Mar 27 18:10:46 CST 2018
     */
    private String rolename;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column role.roleId
     *
     * @return the value of role.roleId
     *
     * @mbggenerated Tue Mar 27 18:10:46 CST 2018
     */
    public Integer getRoleid() {
        return roleid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column role.roleId
     *
     * @param roleid the value for role.roleId
     *
     * @mbggenerated Tue Mar 27 18:10:46 CST 2018
     */
    public void setRoleid(Integer roleid) {
        this.roleid = roleid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column role.roleName
     *
     * @return the value of role.roleName
     *
     * @mbggenerated Tue Mar 27 18:10:46 CST 2018
     */
    public String getRolename() {
        return rolename;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column role.roleName
     *
     * @param rolename the value for role.roleName
     *
     * @mbggenerated Tue Mar 27 18:10:46 CST 2018
     */
    public void setRolename(String rolename) {
        this.rolename = rolename == null ? null : rolename.trim();
    }
}