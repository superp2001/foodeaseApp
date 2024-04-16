package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.City;
import com.example.demo.services.CityService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CityController {
	
	
	@Autowired
	CityService areaserv;
	
	@GetMapping("/getCity")
	public List<City> getAll()
	{
		return areaserv.getAll();
	}
	
	@GetMapping("/getCityByStateId/{state_id}")
	public List<City> getByCityId(@PathVariable int state_id)
	{
		return areaserv.getCityByState(state_id);
	}

}
