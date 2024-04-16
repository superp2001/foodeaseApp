package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Cart;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.repositories.CartRepository;

import jakarta.transaction.Transactional;


@Service
public class CartService {
	
	@Autowired
	CartRepository crepo;
	
	@Autowired
	CustomerService cserv;
	
	@Autowired
	LoginService lserv;
	
	public List<Cart> getCartByCustomer(int cid) {
		Login l1= lserv.getById(cid);
		
		Customer c= cserv.getCustomer(l1); 
        return crepo.findByCustomerId(c); 
	}
	
	public Cart addCart(Cart cart) {
		Cart crt=crepo.save(cart);
		return crt;
	}
	
	
	@Transactional
    public Cart saveCart(Cart c) {
        try {
            return crepo.save(c);
        } catch (Exception e) {
            e.printStackTrace(); 
            throw new RuntimeException("Error saving login information.", e);
        }
	}
	
	public List<Cart> getAll()
	{
		return crepo.findAll();
	}
	
	 public void deleteCartByCustomerId(int userId) {
		 
		 Login l1= lserv.getById(userId);
			
		Customer c= cserv.getCustomer(l1);
		
		 crepo.deleteByUser_id(c);
	    }
	
	
	

}
