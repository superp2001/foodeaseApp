package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.entities.Restaurant;
import com.example.demo.entities.Restaurant_owner;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
	
	@Query("select a from Restaurant a where a.rowner_id = :Restaurant_owner")
	public Restaurant findByRownerId(Restaurant_owner Restaurant_owner);
	
//	List<Restaurant> findByRestaurant_nameContaining(String name);
	List<Restaurant> findByRestaurantNameContaining(String name);
	
	


}
