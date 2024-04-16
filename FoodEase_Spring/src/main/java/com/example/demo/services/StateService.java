package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.State;
import com.example.demo.repositories.StateRepository;

@Service
public class StateService {
	
	
	@Autowired
	StateRepository strepo;
	
	public List<State> getAll()
	{
		return strepo.findAll();
	}
	
	public Optional<State> getState(int c)
	{
		return strepo.findById(c);
	}
	
	public State saveState(State st)
	{
		return strepo.save(st);
	}

}
