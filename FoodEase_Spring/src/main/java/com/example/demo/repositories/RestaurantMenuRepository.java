package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Restaurant;
import com.example.demo.entities.RestaurantMenu;

@Repository
public interface RestaurantMenuRepository extends JpaRepository<RestaurantMenu, Integer>{
	
	
	@Query("select a from RestaurantMenu a where a.restaurant_id = :restaurant")
	public List<RestaurantMenu> findByRestoID(Restaurant restaurant);


}
