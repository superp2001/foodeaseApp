package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Payment;
import com.example.demo.services.PaymentService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PaymentController {
	
	@Autowired
	PaymentService pserv;
	
	
	@GetMapping("/viewRestaurantOrder/{userId}")
    public List<Payment> getPaymentByUserId(@PathVariable int userId) {
            return pserv.getPaymentByUserId(userId);
    }
	
	@GetMapping("/viewAllPayment")
    public List<Payment> getAllpByUserId(@PathVariable int userId) {
            return pserv.getPaymentByUserId(userId);
    }

}
