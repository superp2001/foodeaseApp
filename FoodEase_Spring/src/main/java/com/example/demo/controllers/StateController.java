package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.State;
import com.example.demo.services.StateService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StateController {
	
	@Autowired
	StateService sservice;
	
	@GetMapping("/getallState")
	public List<State> getAllStates() {
        return sservice.getAll();
    }
	
	@PostMapping("/saveState")
	public State saveCity(@RequestBody State state)
	{
		return sservice.saveState(state);
	}

}
