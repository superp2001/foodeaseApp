package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Menu;
import com.example.demo.services.MenuService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MenuController {
	
	@Autowired
	MenuService mserv;
	
	@GetMapping("/getMenu")
	public List<Menu> getAll()
	{
		return mserv.getAll();
	}
	
	@GetMapping("/getMenuByCid/{category_id}")
	public List<Menu> getByMenuId(@PathVariable int category_id)
	{
		return mserv.getMenuByCat(category_id);
	}

}
