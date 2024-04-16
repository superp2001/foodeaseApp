package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.Cart;
import com.example.demo.entities.CartDummy;
import com.example.demo.entities.Category;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.RestaurantMenu;
import com.example.demo.services.CartService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RestaurantMenuService;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

	@Autowired
	CartService cserv;
	
	@Autowired
	LoginService lserv;
	
	@Autowired
	RestaurantMenuService rmserv;
	
	@Autowired
	CustomerService cuserv;
	
	@PostMapping("/addToCart")
	public Cart addtoCart(@RequestBody CartDummy cd)
	{
		System.out.println(cd);
		
		Login l1= lserv.getById(cd.getUser_id());
		
		Customer c= cuserv.getCustomer(l1);
		
		RestaurantMenu rm=rmserv.getById(cd.getRestaurant_menu_id());
		
		Cart cr=new Cart(c,cd.getQuantity(),rm);
		
		Cart saved = cserv.saveCart(cr);
		return cr;
	}
	
	@GetMapping("/getCartByCustomerId/{cid}")
	public List<Cart> getByCustId(@PathVariable int cid) {
	    return cserv.getCartByCustomer(cid);
	}
	
	@DeleteMapping("/deleteCartByUserId/{customerId}")
    public ResponseEntity<String> deleteCartByCustomerId(@PathVariable int customerId) {
        try {
        	cserv.deleteCartByCustomerId(customerId);
            return ResponseEntity.ok().body("Carts deleted successfully for customer ID: " + customerId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete carts for customer ID: " + customerId);
        }
    }
	
}
