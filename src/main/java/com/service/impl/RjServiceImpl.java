package com.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.RjMapper;
import com.entity.Rj;
import com.service.RjService;
@Service("rjService")
public class RjServiceImpl implements RjService {

	@Autowired
	private RjMapper rjMapper;

	//查询每个角色对应的菜单
	public List<Rj> getRjs(Integer rId) {
		return rjMapper.getRjs(rId);
	}

}
