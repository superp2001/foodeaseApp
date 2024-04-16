package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
import com.example.demo.entities.DeliveryBoy;
import com.example.demo.entities.Order;

import jakarta.transaction.Transactional;


@Repository
@Transactional
public interface OrderRepository extends JpaRepository<Order, Integer> {
   
	@Query("select a from Order a where a.user_id = :user_id")
	List<Order> findByUser_id(Customer user_id);
	
	@Query("select a from Order a where a.driver_id = :driver_id")
	List<Order> findByDriver_id(DeliveryBoy driver_id);
	
	

}
