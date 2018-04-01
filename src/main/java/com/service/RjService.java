package com.service;

import java.util.List;

import com.entity.Rj;

public interface RjService {
	//查询每个角色对应的菜单
    List<Rj> getRjs(Integer rId); 
	
}
