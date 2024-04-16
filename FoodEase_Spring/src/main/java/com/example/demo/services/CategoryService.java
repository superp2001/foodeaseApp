package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Category;
import com.example.demo.entities.Login;
import com.example.demo.repositories.CategoryRepository;

@Service
public class CategoryService {
	
	
	@Autowired
	CategoryRepository crepo;
	
	public List<Category> getAll()
	{
		return crepo.findAll();
	}
	
	
	public Optional<Category> getCategory(int c)
	{
		return crepo.findById(c);
	}
	
	public Category saveCategory(Category st)
	{
		return crepo.save(st);
	}
	
	public Category getById(int catId) {
        try {
            return crepo.findById(catId).get();
        } catch (Exception e) {
            e.printStackTrace(); 
            throw new RuntimeException("Error getting login information by ID.", e);
        }
    }

}
