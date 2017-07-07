package com.javialej.profesores.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javialej.profesores.dao.SocialMediaDAO;
import com.javialej.profesores.model.SocialMedia;
import com.javialej.profesores.model.TeacherSocialMedia;

@Service("socialMediaService")
@Transactional
public class SocialMediaServiceImpl implements SocialMediaService{

	@Autowired
	private SocialMediaDAO _socialMediaDAO;
	
	@Override
	public void saveSocialMedia(SocialMedia socialMedia) {
		_socialMediaDAO.saveSocialMedia(socialMedia);
	}

	@Override
	public void deleteSocialMediaById(Long idSocialMedia) {
		_socialMediaDAO.deleteSocialMediaById(idSocialMedia);
	}

	@Override
	public void updateSocialMedia(SocialMedia socialMedia) {
		_socialMediaDAO.updateSocialMedia(socialMedia);
	}

	@Override
	public List<SocialMedia> findAllSocialMedias() {
		return _socialMediaDAO.findAllSocialMedias();
	}

	@Override
	public SocialMedia findById(Long idSocialMedia) {
		return _socialMediaDAO.findById(idSocialMedia);
	}

	@Override
	public SocialMedia findByName(String name) {
		return _socialMediaDAO.findByName(name);
	}

	@Override
	public TeacherSocialMedia findSocialMediaByIdAndName(Long idSocialMedia, String nickname) {
		return _socialMediaDAO.findSocialMediaByIdAndName(idSocialMedia, nickname);
	}
}
