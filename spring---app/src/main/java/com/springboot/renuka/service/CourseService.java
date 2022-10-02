package com.springboot.renuka.service;


import java.util.ArrayList;

import com.springboot.renuka.model.CourseModel;

public interface CourseService {

	CourseModel addCourse(CourseModel courseModel);
	
	ArrayList<CourseModel> viewCourses();
	
	CourseModel editCourse(CourseModel courseModel,int courseId);
	
	String deleteCourse(int courseId);
	
	CourseModel getCourseById(int courseId);
}
