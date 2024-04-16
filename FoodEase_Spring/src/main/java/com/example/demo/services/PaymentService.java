package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.Payment;
import com.example.demo.entities.Restaurant;
import com.example.demo.entities.Restaurant_owner;
import com.example.demo.repositories.PaymentRepository;

@Service
public class PaymentService {

	@Autowired
	PaymentRepository prepo;
	
	@Autowired
	LoginService lserv;
	
	@Autowired
	RownerService rserv;
	
	@Autowired
	RestaurantService reserv;
	
	 public Payment savePayment(Payment p) {
	        return prepo.save(p);
	    }
	 
	 public List<Payment> getPaymentByUserId(int Id) {
	    	Login l= lserv.getById(Id);
	    	Restaurant_owner ro=rserv.getRowner(l);
	    	Restaurant r=reserv.getRestByRoId(ro);
	        return prepo.findByrest_id(r);
	 }
	 
	 public List<Payment> getAll() {
	    	
	        return prepo.findAll();
	 }
	 


	
}
