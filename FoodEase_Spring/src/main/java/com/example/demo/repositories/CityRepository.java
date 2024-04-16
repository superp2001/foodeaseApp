package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.City;
import com.example.demo.entities.State;


@Repository
public interface CityRepository extends JpaRepository<City, Integer> {
		
//	@Query("select a from City a where stateID = :id")
//	public List<City> getByStateId(int id);
	
	@Query("select c from City c where c.stateID.id = :stateId")
	public List<City> getByStateId(int stateId);

}
