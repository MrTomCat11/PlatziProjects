package com.javialej.profesores.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javialej.profesores.dao.CourseDAO;
import com.javialej.profesores.model.Course;

@Service("courseService")
@Transactional
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDAO _courseDAO;
	
	@Override
	public void saveCourse(Course course) {		 
		_courseDAO.saveCourse(course);
	}

	@Override
	public void deleteCourseById(Long idCourse) {
		_courseDAO.deleteCourseById(idCourse);
	}

	@Override
	public void updateCourse(Course course) {
		_courseDAO.updateCourse(course);
	}

	@Override
	public List<Course> findAllCourses() {
		return _courseDAO.findAllCourses();	
	}

	@Override
	public Course findById(Long idCourse) {
		return _courseDAO.findById(idCourse);
	}

	@Override
	public Course findByName(String name) {
		return _courseDAO.findByName(name);
	}

	@Override
	public List<Course> findByIdTeacher(Long idTeacher) {
		return findByIdTeacher(idTeacher);
	}
}
