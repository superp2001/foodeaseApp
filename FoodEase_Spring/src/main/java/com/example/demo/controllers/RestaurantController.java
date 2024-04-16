package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.Login;
import com.example.demo.entities.Restaurant;
import com.example.demo.entities.RestaurantRegisterDumi;
import com.example.demo.entities.Restaurant_owner;
import com.example.demo.services.AreaService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RestaurantService;
import com.example.demo.services.RownerService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class RestaurantController {
	
	@Autowired
	RestaurantService rserv;
	
	@Autowired
	RownerService roserv;
	
	@Autowired
	LoginService lserv;
	
	@Autowired
	AreaService aserv;
	
	@GetMapping("/getAllRestaurant")
    public List<Restaurant> getAllRestaurant() 
	{
        return rserv.getAllRestaurants();
    }
	
	
	
	 @PostMapping("/saveRestaurant")
	    public Restaurant saveOccupant(@RequestBody RestaurantRegisterDumi rr) 
	    {
	    	System.out.println(rr.toString());
	    	
	       Area a = aserv.getArea(rr.getArea_id());
	       
	       Login l=lserv.getById(rr.getRowner_id());

	       
	       Restaurant_owner r= roserv.getRowner(l);
	    	
	       
	       Restaurant o = new Restaurant(rr.getRestaurent_name(),rr.getPhone(),rr.getEmail(),rr.getFssai_licence_no(),rr.getGstNo(),rr.getPan_no(),a,r);
	       System.err.println(o.toString());
	       return rserv.saveOccupant(o);
	    
	    }
	 
	 	@Autowired
	    public RestaurantController(RestaurantService restaurantService) {
	        this.rserv = restaurantService;
	    }

	    @GetMapping("/restaurants")
	    public List<Restaurant> searchRestaurantsByName(@RequestParam String name) {
	        return rserv.searchRestaurantsByName(name);
	    }

}
