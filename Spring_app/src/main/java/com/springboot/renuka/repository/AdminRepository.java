package com.springboot.renuka.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.springboot.renuka.model.AdminModel;

public interface AdminRepository extends JpaRepository<AdminModel, Integer> {

	boolean existsByEmailAndPassword(String email,String password);
}

