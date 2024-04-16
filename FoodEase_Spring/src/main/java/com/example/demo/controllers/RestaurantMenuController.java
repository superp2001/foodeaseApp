package com.example.demo.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Category;
import com.example.demo.entities.ExistRestaurantMenu;
import com.example.demo.entities.Login;
import com.example.demo.entities.Menu;
import com.example.demo.entities.NewRestaurantMenu;
import com.example.demo.entities.Restaurant;
import com.example.demo.entities.RestaurantMenu;
import com.example.demo.entities.Restaurant_owner;
import com.example.demo.services.CategoryService;
import com.example.demo.services.LoginService;
import com.example.demo.services.MenuService;
import com.example.demo.services.RestaurantMenuService;
import com.example.demo.services.RestaurantService;
import com.example.demo.services.RownerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RestaurantMenuController {

	@Autowired
	RestaurantMenuService rmserv;
	
	@Autowired
	CategoryService cserv;
	
	@Autowired
	MenuService mserv;
	
	@Autowired
	RestaurantService rserv;
	
	@Autowired
	RownerService roserv;
	
	@Autowired
	LoginService lserv;
	
	
	@PostMapping("/saveExistRestaurant")
    public RestaurantMenu saveExistMenu(@RequestBody ExistRestaurantMenu rr) 
    {
		
       
	   Login l=lserv.getById(rr.getRestaurant_id());
       
       Restaurant_owner ro= roserv.getRowner(l);
       
       Restaurant r =rserv.getRestByRoId(ro);
    	
       Menu m=mserv.getMenu(rr.getMenu_id());
       
       RestaurantMenu o = new RestaurantMenu(r,m,rr.getPrice(),rr.getDescription(),true);
       System.err.println(o.toString());
       return rmserv.saveOccupant(o);
    
    }
	
	@PostMapping("/saveNewMenu")
    public RestaurantMenu saveNewMenu(@RequestBody NewRestaurantMenu rr) 
    {
		System.out.println(rr);
	  Category c= cserv.getById(rr.getCategory_id());
       
	  Login l=lserv.getById(rr.getRestaurant_id());

       
       Restaurant_owner ro= roserv.getRowner(l);
       
       Restaurant r =rserv.getRestByRoId(ro);
    	
       
       Menu m = new Menu(rr.getName(),rr.getFood_type(),c);
       
       Menu saved = mserv.save(m);
       
       RestaurantMenu o = new RestaurantMenu(r,m,rr.getPrice(),rr.getDescription(),true);
       System.err.println(o.toString());
       return rmserv.saveOccupant(o);
    
    }
	
	
	@GetMapping("/viewMenu/{loginID}")
    public List<RestaurantMenu> ViewMenu(@PathVariable int loginID) 
    {
  
       
		Login l=lserv.getById(loginID);

		Restaurant_owner ro= roserv.getRowner(l);
       
		Restaurant r =rserv.getRestByRoId(ro);
    	
     
       return rmserv.getRestaurantMenuByRestauran(r);
    
    }
	
	@GetMapping("/viewRMenu/{rID}")
    public List<RestaurantMenu> ViewRMenu(@PathVariable int rID) 
    {
         
		Restaurant r =rserv.getById(rID);
    	   
       return rmserv.getRestaurantMenuByRestauran(r);
    
    }
	
	
}
