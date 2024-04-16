package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.entities.City;
import com.example.demo.entities.Customer;
import com.example.demo.entities.DeliveryAddress;
import com.example.demo.entities.Login;
import com.example.demo.entities.Restaurant;
import com.example.demo.entities.Restaurant_owner;
import com.example.demo.repositories.DeliveryAddressRepositry;


@Service
public class DeliveryAddressService {

	@Autowired
	DeliveryAddressRepositry drepo;
	
	@Autowired
	LoginService lserv;
	
	@Autowired
	CustomerService cserv;
	
	public DeliveryAddress getById(int did) {
        try {
            return drepo.findById(did).get();
        } catch (Exception e) {
            e.printStackTrace(); 
            throw new RuntimeException("Error getting login information by ID.", e);
        }
    }
	
	public DeliveryAddress getRestByRoId(int ro) {
		
		Login l=lserv.getById(ro);
		
		Customer c = cserv.getCustomer(l);
		
        return drepo.findByUserId(c); 
	}
	
	public DeliveryAddress saveDeliveryAddress(DeliveryAddress o)
    {
    	return drepo.save(o);
    }
	
	public List<DeliveryAddress> getDeliveryAddressByUser(int ro) {
		Login l=lserv.getById(ro);
		
		Customer c = cserv.getCustomer(l);

        return drepo.getByUserId(c); 
	}
	
}
