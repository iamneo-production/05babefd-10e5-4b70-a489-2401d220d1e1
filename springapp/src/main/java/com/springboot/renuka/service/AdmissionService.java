package com.springboot.renuka.service;


import com.springboot.renuka.model.AdmissionModel;

public interface AdmissionService {

	AdmissionModel addAdmission(AdmissionModel admissionModel);
	
	AdmissionModel viewAdmission(int admissionId);
	
	AdmissionModel updateAdmission(AdmissionModel admissionModel,int admissionId);
	
	String deleteAdmission(int admissionId);
	
	String viewStatus(int admissionId);
}

