package com.javialej.hibernate;

import java.util.Iterator;
import java.util.List;

import org.hibernate.Session;

import com.javialej.hibernate.dao.DAOSession;
import com.javialej.hibernate.dao.TeacherDAO;
import com.javialej.hibernate.dao.TeacherDAOImpl;
import com.javialej.hibernate.model.Course;
import com.javialej.hibernate.model.Teacher;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );

        Teacher teacher = new Teacher("Christian", "Avatar");
        TeacherDAOImpl teacherDAOImpl = new TeacherDAOImpl();
        teacherDAOImpl.saveTeacher(teacher);
        
        List<Teacher> teachers = teacherDAOImpl.findAllTeachers();
        
        for (Teacher t : teachers) {
			System.out.println("Nombre: " + t.getName());
		}        
    }
}
