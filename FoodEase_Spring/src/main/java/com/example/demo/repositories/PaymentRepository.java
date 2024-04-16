package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Payment;
import com.example.demo.entities.Restaurant;


@Repository
public interface PaymentRepository extends JpaRepository<Payment,Integer>{

	@Query("select a from Payment a where a.rest_id = :rest_id")
	List<Payment> findByrest_id(Restaurant rest_id);
	
}
