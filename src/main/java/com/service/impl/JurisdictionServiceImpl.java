package com.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.JurisdictionMapper;
import com.entity.Jurisdiction;
import com.service.JurisdictionService;
@Service("jurisdictionService")
public class JurisdictionServiceImpl implements JurisdictionService {
	@Autowired
	private JurisdictionMapper jurisdictionMapper;
	

	//查询子菜单
	public List<Jurisdiction> getS(Integer jId) {
		return jurisdictionMapper.getS(jId);
	}

}
