package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Category;
import com.example.demo.services.CategoryService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CategoryController {

	
	@Autowired
	CategoryService cservice;
	
	@GetMapping("/getAllCategory")
	public List<Category> getAllCategory() {
        return cservice.getAll();
    }
	
	
	@PostMapping("/saveCategory")
	public Category saveCity(@RequestBody Category category)
	{
		return cservice.saveCategory(category);
	}
	
}
