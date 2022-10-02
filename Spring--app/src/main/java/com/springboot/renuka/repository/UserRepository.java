package com.springboot.renuka.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.renuka.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Integer> {

	boolean existsByEmailAndPassword(String email,String password);

}

