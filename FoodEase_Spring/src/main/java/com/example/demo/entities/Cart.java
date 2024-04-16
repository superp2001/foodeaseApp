package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "cart")
public class Cart {
	
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cartID;

    @OneToOne
	@JoinColumn(name="user_id")
    private Customer user_id;

    @Column
    private Integer quantity;

    
    @ManyToOne
    @JoinColumn(name="restaurant_menu_id")
    private RestaurantMenu restaurant_menu_id;

	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public Cart(Customer user_id, Integer quantity, RestaurantMenu restaurant_menu_id) {
		super();
		this.user_id = user_id;
		this.quantity = quantity;
		this.restaurant_menu_id = restaurant_menu_id;
	}


	
	public int getCartID() {
		return cartID;
	}

	public void setCartID(int cartID) {
		this.cartID = cartID;
	}

	public Customer getUser_id() {
		return user_id;
	}

	public void setUser_id(Customer user_id) {
		this.user_id = user_id;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public RestaurantMenu getRestaurant_menu_id() {
		return restaurant_menu_id;
	}

	public void setRestaurant_menu_id(RestaurantMenu restaurant_menu_id) {
		this.restaurant_menu_id = restaurant_menu_id;
	}
    
    
    


    
}

