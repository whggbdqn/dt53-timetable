package com.service;

import java.util.List;

import com.entity.Jurisdiction;

public interface JurisdictionService {
	//查询子菜单
    List<Jurisdiction> getS(Integer jId);
}
