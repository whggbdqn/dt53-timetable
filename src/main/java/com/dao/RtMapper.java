package com.dao;

import com.entity.Rt;

public interface RtMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table rt
     *
     * @mbggenerated Tue Mar 27 18:10:46 CST 2018
     */
    int deleteByPrimaryKey(Integer rtid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table rt
     *
     * @mbggenerated Tue Mar 27 18:10:46 CST 2018
     */
    int insert(Rt record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table rt
     *
     * @mbggenerated Tue Mar 27 18:10:46 CST 2018
     */
    int insertSelective(Rt record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table rt
     *
     * @mbggenerated Tue Mar 27 18:10:46 CST 2018
     */
    Rt selectByPrimaryKey(Integer rtid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table rt
     *
     * @mbggenerated Tue Mar 27 18:10:46 CST 2018
     */
    int updateByPrimaryKeySelective(Rt record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table rt
     *
     * @mbggenerated Tue Mar 27 18:10:46 CST 2018
     */
    int updateByPrimaryKey(Rt record);
}