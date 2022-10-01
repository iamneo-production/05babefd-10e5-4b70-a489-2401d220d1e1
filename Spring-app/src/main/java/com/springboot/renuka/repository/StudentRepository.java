package com.springboot.renuka.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.renuka.model.StudentModel;

public interface StudentRepository extends JpaRepository<StudentModel, Integer> {

}

