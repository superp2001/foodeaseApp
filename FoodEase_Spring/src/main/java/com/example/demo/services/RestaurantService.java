package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import com.example.demo.entities.City;
import com.example.demo.entities.Login;
import com.example.demo.entities.Restaurant;
import com.example.demo.entities.Restaurant_owner;
import com.example.demo.repositories.RestaurantRepository;

@Service
public class RestaurantService {

    @Autowired
    RestaurantRepository restaurantRepository;
    
    @Autowired
    RownerService rrepo;
    
    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    
    public Restaurant saveOccupant(Restaurant o)
    {
    	return restaurantRepository.save(o);
    }
    
    
    public Restaurant getRestByRoId(Restaurant_owner ro) {
//		Optional<Restaurant_owner> c= rrepo.getRestaurant_owner(ro); 
        return restaurantRepository.findByRownerId(ro); 
	}
    
    
    public Restaurant getById(int rid) {
        try {
            return restaurantRepository.findById(rid).get();
        } catch (Exception e) {
            e.printStackTrace(); 
            throw new RuntimeException("Error getting Restaurant information by ID.", e);
        }
    }
    
    public Optional<Restaurant> getRestaurant(int c)
	{
		return restaurantRepository.findById(c);
	}
    
    
    @Autowired
    public RestaurantService(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    public List<Restaurant> searchRestaurantsByName(String name) {
        return restaurantRepository.findByRestaurantNameContaining(name);
    }
    
    
    
}

