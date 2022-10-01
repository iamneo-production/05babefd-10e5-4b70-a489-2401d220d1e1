package com.springboot.renuka.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.renuka.model.AdmissionModel;

public interface AdmissionRepository extends JpaRepository<AdmissionModel, Integer> {

}

