package com.javialej.hibernate.dao;

import java.util.List;

import com.javialej.hibernate.model.Teacher;

public class TeacherDAOImpl extends DAOSession implements TeacherDAO {
		
	private DAOSession daoSession;
	
	public TeacherDAOImpl() {
		daoSession = new DAOSession();
	}	
	
	public void saveTeacher(Teacher teacher) {
		daoSession.getSession().persist(teacher);
		daoSession.getSession().getTransaction().commit();
	}

	public void deleteTeacherById(Long idTeacher) {
		
		
	}

	public void updateTeacher(Teacher teacher) {
		
		
	}

	public List<Teacher> findAllTeachers() {
		
		return daoSession.getSession().createQuery("from Teacher").list();
	}

	public Teacher findById(Long idTeacher) {		
				
		return null;
	}

	public Teacher findByName(String name) {
		
		return null;
	}
}
