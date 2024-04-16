package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.City;
import com.example.demo.repositories.CityRepository;

@Service
public class CityService {
	
	@Autowired
	CityRepository cityrepo;
	
	@Autowired
	StateService sc;
	
	public List<City> getAll()
	{
		return cityrepo.findAll();
	}
	
	public Optional<City> getCity(int c)
	{
		return cityrepo.findById(c);
	}
	
	public List<City> getCityByState(int state_id)
	{
		return cityrepo.getByStateId(state_id);
	}

}
