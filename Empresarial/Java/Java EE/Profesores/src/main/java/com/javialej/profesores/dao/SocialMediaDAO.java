package com.javialej.profesores.dao;

import java.util.List;

import com.javialej.profesores.model.SocialMedia;
import com.javialej.profesores.model.TeacherSocialMedia;

public interface SocialMediaDAO {
	void saveSocialMedia(SocialMedia socialMedia);	
	
	void deleteSocialMediaById(Long idSocialMedia);
	
	void updateSocialMedia(SocialMedia socialMedia);
	
	List<SocialMedia> findAllSocialMedias();
	
	SocialMedia findById(Long idSocialMedia);
	
	SocialMedia findByName(String name);
	
	TeacherSocialMedia findSocialMediaByIdAndName(Long idSocialMedia, String nickname);
}
