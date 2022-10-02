package com.springboot.renuka.service;


import com.springboot.renuka.model.AdminModel;

public interface AdminService {

	AdminModel saveAdmin(AdminModel adminModel);
	
	boolean adminLogin(String email,String password);
}
