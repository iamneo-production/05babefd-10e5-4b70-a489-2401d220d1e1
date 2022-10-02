package com.springboot.renuka.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.renuka.model.AdmissionModel;
import com.springboot.renuka.service.AdmissionService;
import com.springboot.renuka.service.CourseService;
import com.springboot.renuka.service.InstituteService;

@CrossOrigin("*")
@RestController


public class UserController {

	@Autowired
	CourseService courseService;
	
	@Autowired
	InstituteService instituteService;
	
	@Autowired
	AdmissionService admissionService;
	
	@PostMapping("/admin/addAdmission")
	public AdmissionModel addAdmission(@RequestBody AdmissionModel admissionModel,@PathVariable int courseId,@PathVariable int instituteId) {
		
		return admissionService.addAdmission(admissionModel);
	}
	
	@GetMapping("/admin/viewAdmission/{admissionId}")
	public AdmissionModel viewAdmission(@PathVariable int admissionId){
		
		return admissionService.viewAdmission(admissionId);
	}
	
	@PutMapping("/admin/editAdmission/{admissionId}")
	public AdmissionModel editAdmission(@RequestBody AdmissionModel admissionModel, @PathVariable int admissionId) {
		
		return admissionService.updateAdmission(admissionModel, admissionId);
	}
	
	@DeleteMapping("/admin/deleteAdmission/{admissionId}")
	public String deleteAdmission(@PathVariable int admissionId) {
		
		return admissionService.deleteAdmission(admissionId);
	}
	
	
}
