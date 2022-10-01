package com.springboot.renuka.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.renuka.model.AdminModel;
import com.springboot.renuka.model.LoginModel;
import com.springboot.renuka.model.UserModel;
import com.springboot.renuka.service.AdminService;
import com.springboot.renuka.service.UserService;

@CrossOrigin("*")
@RestController


public class AuthController {

	@Autowired
	AdminService adminService;
	
	@Autowired
	UserService userService;
	
	@PostMapping("/admin/signup")
	public AdminModel saveAdmin(@RequestBody AdminModel adminModel) {
		
		return adminService.saveAdmin(adminModel);
	}
	
	@PostMapping("/admin/login")
	public boolean isAdminPresent(@RequestBody LoginModel loginModel) {
		
		String email=loginModel.getEmail();
		String password=loginModel.getPassword();
		
		return adminService.adminLogin(email, password);
	}
	
	@PostMapping("/user/signup")
	public UserModel saveUser(@RequestBody UserModel userModel) {
		
		return userService.saveUser(userModel);
	}
	
	@PostMapping("/user/login")
	public boolean isUserPresent(@RequestBody LoginModel loginModel) {
		
		String email=loginModel.getEmail();
		String password=loginModel.getPassword();
		
		return userService.userLogin(email, password);
		
	}
	
	
	
	
	
	
	
	
	
	
	
}

