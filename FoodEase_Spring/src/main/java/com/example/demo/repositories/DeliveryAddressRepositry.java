package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
import com.example.demo.entities.DeliveryAddress;



@Repository
public interface DeliveryAddressRepositry extends JpaRepository<DeliveryAddress, Integer> {

	
	@Query("select a from DeliveryAddress a where a.user_id = :user_id")
	public DeliveryAddress findByUserId(Customer user_id);
	
	@Query("select a from DeliveryAddress a where a.user_id = :user_id")
    public List<DeliveryAddress> getByUserId(Customer user_id);
	
}
