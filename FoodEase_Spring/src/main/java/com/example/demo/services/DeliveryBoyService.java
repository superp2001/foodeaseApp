package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.DeliveryAddress;
import com.example.demo.entities.DeliveryBoy;
import com.example.demo.entities.Login;
import com.example.demo.repositories.DeliveryBoyRepository;

import jakarta.transaction.Transactional;

@Service
public class DeliveryBoyService {
	
	@Autowired
	DeliveryBoyRepository crepo;
	
	@Autowired
    LoginService lservice;
	
	public DeliveryBoy getDelivery(Login l) {
		return crepo.getDeliveryBoy(l);
	}
	
	@Transactional
	public DeliveryBoy registerDeliveryBoy(DeliveryBoy dboy) {
	    Login savedLogin = lservice.saveLogin(dboy.getLoginID());
	    dboy.setLoginID(savedLogin);
	    return crepo.save(dboy);
	}
	
	public List<DeliveryBoy> getAllDboy() {
        return crepo.findAll();
    }
	
	public DeliveryBoy getById(int did) {
        try {
            return crepo.findById(did).get();
        } catch (Exception e) {
            e.printStackTrace(); 
            throw new RuntimeException("Error getting login information by ID.", e);
        }
    }


}
