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

import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {
	
	@Autowired
	CustomerService cservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	RoleService rservice;
	
	@GetMapping("/getCustomer")
	public Customer getCustomer(@RequestParam("loginID") int loginID) {
		Login l=lservice.getById(loginID);
		return cservice.getCustomer(l);
	}
	
	
	@PostMapping("/regCustomer")
	public Customer regCustomer(@RequestBody CustomerReg creg)
	{
		System.out.println("In Cust Method");
		try {
			System.out.println(creg);
		Role r = rservice.getRole(1);
		Login l = new Login(creg.getUsername(),creg.getEmail(),creg.getPassword(),r,true);
		Login saved = lservice.saveLogin(l);
	   Customer d = new Customer(creg.getFname(),creg.getLname(),creg.getAddress(),creg.getPhone(),l);
	   return cservice.registerCustomer(d);
		}
		catch(Exception ex)
		{	
			ex.printStackTrace();
			return null;
		}
	}
	
	
	@GetMapping("/getallCustomer")
	public ResponseEntity<List<Map<String, Object>>> getAllVendors1() {
	    List<Map<String, Object>> vendorData = new ArrayList<>();
	    List<Customer> rownerList = cservice.getAllCustomer();
	    
	    for (Customer rowner : rownerList) {
	        Map<String, Object> vendorMap = new HashMap<>();
	        vendorMap.put("loginID", rowner.getLoginID().getLoginID());
	        vendorMap.put("username", rowner.getLoginID().getUsername());
	        vendorMap.put("status_approve", rowner.getLoginID().isStatus_approve());
	        vendorMap.put("email", rowner.getLoginID().getEmail());
	        vendorMap.put("fname", rowner.getFname());
	        vendorMap.put("lname", rowner.getLname());
	        vendorMap.put("address", rowner.getAddress());
	        vendorMap.put("phone", rowner.getPhone());
	        vendorData.add(vendorMap);
	    }
	    System.out.println(vendorData);
	    return ResponseEntity.ok().body(vendorData);
	
}
	
	
}
