package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.services.AreaService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AreaController {
	
	@Autowired
	AreaService areaserv;
	
	@GetMapping("/getAreas")
	public List<Area> getAll()
	{
		return areaserv.getAll();
	}
	
	
	@GetMapping("/getAreaByCityId/{city_id}")
	public List<Area> getByCityId(@PathVariable int city_id) {
	    return areaserv.getAreasByCity(city_id);
	}


}
