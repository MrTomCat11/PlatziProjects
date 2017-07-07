package com.javialej.profesores.dao;

import java.util.List;

import com.javialej.profesores.model.Teacher;

public interface TeacherDAO {
	
	void saveTeacher(Teacher teacher);	
	
	void deleteTeacherById(Long idTeacher);
	
	void updateTeacher(Teacher teacher);
	
	List<Teacher> findAllTeachers();
	
	Teacher findById(Long idTeacher);
	
	Teacher findByName(String name);
}
