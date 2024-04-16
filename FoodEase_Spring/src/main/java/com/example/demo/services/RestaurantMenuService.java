package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Restaurant;
import com.example.demo.entities.RestaurantMenu;
import com.example.demo.repositories.RestaurantMenuRepository;

@Service
public class RestaurantMenuService {

	@Autowired
	RestaurantMenuRepository rmrepo;
	
	@Autowired
	RestaurantService rserv;
	
	public List<RestaurantMenu> getAllRestaurantMenu() {
        return rmrepo.findAll();
    }
	
	public List<RestaurantMenu> getRestaurantMenuByRestauran(Restaurant r) {
//		Optional<Restaurant> c= rserv.getRestaurant(r); 
        return rmrepo.findByRestoID(r); 
	}
	
	public RestaurantMenu saveOccupant(RestaurantMenu o)
    {
    	return rmrepo.save(o);
    }
	
	public RestaurantMenu getById(int id) {
        try {
            return rmrepo.findById(id).get();
        } catch (Exception e) {
            e.printStackTrace(); 
            throw new RuntimeException("Error getting login information by ID.", e);
        }
    }
}
