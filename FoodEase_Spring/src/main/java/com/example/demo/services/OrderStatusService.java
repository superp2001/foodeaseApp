package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.OrderStatus;
import com.example.demo.repositories.OrderStatusRepository;

@Service
public class OrderStatusService {
	
	@Autowired
	OrderStatusRepository orepo;
	
	public OrderStatus getById(int oid) {
        try {
            return orepo.findById(oid).get();
        } catch (Exception e) {
            e.printStackTrace(); 
            throw new RuntimeException("Error getting login information by ID.", e);
        }
    }

}
