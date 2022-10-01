package com.springboot.renuka.service.impl;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.renuka.model.UserModel;
import com.springboot.renuka.repository.UserRepository;
import com.springboot.renuka.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	
	@Override
	public UserModel saveUser(UserModel userModel) {

		return userRepository.save(userModel);
	}

	@Override
	public boolean userLogin(String email, String password) {

		return userRepository.existsByEmailAndPassword(email, password);
	}

}

