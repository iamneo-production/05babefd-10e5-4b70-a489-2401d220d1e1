package com.springboot.renuka.controller;


import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.renuka.model.CourseModel;
import com.springboot.renuka.model.InstituteModel;
import com.springboot.renuka.model.StudentModel;
import com.springboot.renuka.service.CourseService;
import com.springboot.renuka.service.InstituteService;
import com.springboot.renuka.service.StudentService;

@CrossOrigin("*")
@RestController

public class AdminController {

	@Autowired
	StudentService studentService;
	
	@Autowired
	CourseService courseService;
	
	@Autowired
	InstituteService instituteService;
	
	@PostMapping("/admin/addCourse")
	public CourseModel addCourse(@RequestBody CourseModel courseModel) {
		
		return courseService.addCourse(courseModel);
	}
	
	@GetMapping("/admin/viewCourses")
	public ArrayList<CourseModel> viewCourses(){
		
		return courseService.viewCourses();
	}
	
	@PutMapping("/admin/editCourse/{courseId}")
	public CourseModel editCourse(@RequestBody CourseModel courseModel, @PathVariable int courseId) {
		
		return courseService.editCourse(courseModel, courseId);
	}
	
	@DeleteMapping("/admin/deleteCourse/{courseId}")
	public String deleteCourse(@PathVariable int courseId) {
		
		return courseService.deleteCourse(courseId);
	}
	
	@PostMapping("/admin/addInstitute")
	public InstituteModel addInstitute(@RequestBody InstituteModel instituteModel) {
		
		return instituteService.addInstitute(instituteModel);
	}
	
	@GetMapping("/admin/viewInstitutes")
	public ArrayList<InstituteModel> viewInstitutes(){
		
		return instituteService.viewInstitutes();
	}
	
	@PutMapping("/admin/editInstitute/{instituteId}")
	public InstituteModel editInstitute(@RequestBody InstituteModel instituteModel,@PathVariable int instituteId) {
		
		return instituteService.editInstitute(instituteModel, instituteId);
	}
	
	@DeleteMapping("/admin/deleteInstitute/{instituteId}")
	public String deleteInstitute(@PathVariable int instituteId) {
		
		return instituteService.deleteInstitute(instituteId);
	}
	
	@PostMapping("/admin/addStudent")
	public StudentModel addStudent(@RequestBody StudentModel studentModel) {
		
		return studentService.addStudent(studentModel);
	}
	
	@GetMapping("/admin/viewStudents")
	public ArrayList<StudentModel> viewStudents(){
		
		return studentService.viewStudents();
	}
	
	@PutMapping("/admin/editStudent/{studentId}")
	public StudentModel editStudent(@RequestBody StudentModel studentModel,@PathVariable int studentId) {
		  
		return studentService.editStudent(studentModel, studentId);
	}
	
	@DeleteMapping("/admin/deleteStudent/{studentId}")
	public String deleteStudent(@PathVariable int studentId) {
		
		return studentService.deleteStudent(studentId);
	}
	
	
}

