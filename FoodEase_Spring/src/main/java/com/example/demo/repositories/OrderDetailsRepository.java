package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.OrderDetails;

import jakarta.transaction.Transactional;



@Repository
@Transactional
public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Integer> {

	
	
}
