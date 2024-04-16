package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.Customer;
import com.example.demo.entities.DeliveryAddress;
import com.example.demo.entities.DeliveryAddressDummy;
import com.example.demo.entities.Login;
import com.example.demo.services.AreaService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.DeliveryAddressService;
import com.example.demo.services.LoginService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DeliveryAddressController {

	
	@Autowired
	LoginService lserv;
	
	@Autowired
	AreaService aserv;
	
	@Autowired
	CustomerService cserv;
	
	@Autowired
	DeliveryAddressService dserv;
	
	
	@PostMapping("/saveDeliveryAddress")
    public DeliveryAddress saveOccupant(@RequestBody DeliveryAddressDummy rr) 
    {
    	System.out.println(rr.toString());
    	Area a = aserv.getArea(rr.getArea_id());
       
       Login l=lserv.getById(rr.getUser_id());

       
       Customer r= cserv.getCustomer(l);
    	
       
       DeliveryAddress o = new DeliveryAddress(rr.getAddress(),a,r);
       System.err.println(o.toString());
       return dserv.saveDeliveryAddress(o);
    
    }
	
	
	@GetMapping("/getDeliveryAddressByUser/{uid}")
	public List<DeliveryAddress> getByCityId(@PathVariable int uid) {
	    return dserv.getDeliveryAddressByUser(uid);
	}
	
}
