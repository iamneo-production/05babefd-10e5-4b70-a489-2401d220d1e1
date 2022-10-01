package com.springboot.renuka.service;

import java.util.ArrayList;

import com.springboot.renuka.model.StudentModel;

public interface StudentService {

	StudentModel addStudent(StudentModel studentModel);
	
	ArrayList<StudentModel> viewStudents();
	
	StudentModel editStudent(StudentModel studentModel,int studentId);
	
	String deleteStudent(int studentId);
	
	StudentModel getStudentById(int studentId);
}

