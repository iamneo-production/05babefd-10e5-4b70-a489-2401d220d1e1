package com.springboot.renuka.service;


import com.springboot.renuka.model.UserModel;

public interface UserService {

	UserModel saveUser(UserModel userModel);
	
	boolean userLogin(String email,String password);
}

