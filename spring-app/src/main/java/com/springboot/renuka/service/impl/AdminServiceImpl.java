package com.springboot.renuka.service.impl;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.renuka.model.AdminModel;
import com.springboot.renuka.repository.AdminRepository;
import com.springboot.renuka.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminRepository adminRepository;
	
	@Override
	public AdminModel saveAdmin(AdminModel adminModel) {

		return adminRepository.save(adminModel);
	}

	@Override
	public boolean adminLogin(String email, String password) {

		return adminRepository.existsByEmailAndPassword(email, password);
	}
}

