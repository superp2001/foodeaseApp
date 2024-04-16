package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Category;
import com.example.demo.entities.City;
import com.example.demo.entities.Login;
import com.example.demo.entities.Menu;
import com.example.demo.repositories.MenuRepository;

import jakarta.transaction.Transactional;

@Service
public class MenuService {
	
	
	@Autowired
	MenuRepository mrepo;
	
	@Autowired
	CategoryService cserv;
	
	public List<Menu> getAll()
	{
		return mrepo.findAll();
	}
	
	public Menu getMenu(int c)
	{
		return mrepo.findById(c).get();
	}
	
	public List<Menu> getMenuByCat(int category_id)
	{
		
		Optional<Category> m= cserv.getCategory(category_id); 
		return mrepo.findByCategoryID(m.get());
	}
	
	@Transactional
    public Menu save(Menu m) {
        try {
            return mrepo.save(m);
        } catch (Exception e) {
            e.printStackTrace(); 
            throw new RuntimeException("Error saving login information.", e);
        }
	}

}
