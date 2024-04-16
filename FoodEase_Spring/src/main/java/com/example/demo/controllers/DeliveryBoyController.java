package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.DeliveryBoy;
import com.example.demo.entities.DeliveryBoyReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.services.DeliveryBoyService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DeliveryBoyController {

	@Autowired
	DeliveryBoyService dservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	RoleService rservice;
	
	
	@GetMapping("/getDeliveryBoy")
	public DeliveryBoy getCustomer(@RequestParam("loginID") int loginID) {
		Login l=lservice.getById(loginID);
		return dservice.getDelivery(l);
	}
	
	
	@PostMapping("/regDeliveryBoy")
	public DeliveryBoy regCustomer(@RequestBody DeliveryBoyReg creg)
	{
		
		System.out.println("In regCustomer Method");
		try {
			System.out.println(creg);
		Role r = rservice.getRole(3);
		Login l = new Login(creg.getUsername(),creg.getEmail(),creg.getPassword(),r,false);
		Login saved = lservice.saveLogin(l);
		DeliveryBoy d = new DeliveryBoy(creg.getFname(),creg.getLname(),creg.getPhone(),creg.getAddress(),creg.getPhoto_id_number(),creg.getVehicle_License_No(),l);
	   return dservice.registerDeliveryBoy(d);
		}
		catch(Exception ex)
		{	
			ex.printStackTrace();
			return null;
		}
	}
	
	@GetMapping("/getallDboy")
	public ResponseEntity<List<Map<String, Object>>> getAllDboy() {
	    List<Map<String, Object>> dBoyData = new ArrayList<>();
	    List<DeliveryBoy> rownerList = dservice.getAllDboy();
	    
	    for (DeliveryBoy rowner : rownerList) {
	        Map<String, Object> vendorMap = new HashMap<>();
	        vendorMap.put("loginID", rowner.getLoginID().getLoginID());
	        vendorMap.put("username", rowner.getLoginID().getUsername());
	        vendorMap.put("status_approve", rowner.getLoginID().isStatus_approve());
	        vendorMap.put("email", rowner.getLoginID().getEmail());
	        vendorMap.put("fname", rowner.getFname());
	        vendorMap.put("lname", rowner.getLname());
	        vendorMap.put("address", rowner.getAddress());
	        vendorMap.put("phone", rowner.getPhone());
	        vendorMap.put("photo_id_number", rowner.getPhoto_id_number());
	        vendorMap.put("vehicle_License_No", rowner.getVehicle_License_No());
	        dBoyData.add(vendorMap);
	    }
	    System.out.println(dBoyData);
	    return ResponseEntity.ok().body(dBoyData);
	}
	
}
