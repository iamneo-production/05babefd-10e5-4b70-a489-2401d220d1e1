package com.springboot.renuka.service;


import java.util.ArrayList;

import com.springboot.renuka.model.InstituteModel;

public interface InstituteService {

	InstituteModel addInstitute(InstituteModel instituteModel);
	
	ArrayList<InstituteModel> viewInstitutes();
	
	InstituteModel editInstitute(InstituteModel instituteModel,int instituteId);
	
	String deleteInstitute(int instituteId);
	
	InstituteModel getInstitute(int instituteId);
}

