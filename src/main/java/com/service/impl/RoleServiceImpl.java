package com.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.RoleMapper;
import com.entity.Role;
import com.service.RoleService;
@Service("roleService")
public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleMapper roleMapper;
	
	//查询所有角色
	public List<Role> getAllRole() {
		return roleMapper.getAllRole();
	}

}
