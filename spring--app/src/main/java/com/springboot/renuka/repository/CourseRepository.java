package com.springboot.renuka.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.renuka.model.CourseModel;

public interface CourseRepository extends JpaRepository<CourseModel, Integer> {

}
