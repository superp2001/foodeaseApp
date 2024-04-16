package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.repositories.CustomerRepository;

import jakarta.transaction.Transactional;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository crepo;
	
	@Autowired
    LoginService lservice;
	
	public Customer getCustomer(Login l) {
		return crepo.getCustomer(l);
	}
	
	@Transactional
	public Customer registerCustomer(Customer customer) {
	    Login savedLogin = lservice.saveLogin(customer.getLoginID());
	    customer.setLoginID(savedLogin);
	    return crepo.save(customer);
	}
	
	public List<Customer> getAllCustomer() {
        return crepo.findAll();
    }
	
	public List<Object[]> getApprovedLoginsAndCustomers() {
        return crepo.findApprovedLoginsAndCustomers();
    }
	
	public Customer getById(int cid) {
        try {
            return crepo.findById(cid).get();
        } catch (Exception e) {
            e.printStackTrace(); 
            throw new RuntimeException("Error getting login information by ID.", e);
        }
    }
	
	public Optional<Customer> getCustomer(int c)
	{
		return crepo.findById(c);
	}

}
