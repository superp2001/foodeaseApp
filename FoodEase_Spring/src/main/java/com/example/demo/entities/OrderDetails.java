package com.example.demo.entities;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "order_details")
public class OrderDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int order_detailsID;

    @Column
    private double price;

    @Column
    private int quantity;

    @JsonIgnoreProperties("orderItems")
    @ManyToOne
    @JoinColumn(name = "orderID")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "restaurant_menu_id")
    private RestaurantMenu restaurant_menu_id;

	public OrderDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrderDetails(double price, int quantity, Order order,
			RestaurantMenu restaurant_menu_id) {
		super();
		this.price = price;
		this.quantity = quantity;
		this.order = order;
		this.restaurant_menu_id = restaurant_menu_id;
	}

	public int getOrder_detailsID() {
		return order_detailsID;
	}

	public void setOrder_detailsID(int order_detailsID) {
		this.order_detailsID = order_detailsID;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	
	public RestaurantMenu getRestaurant_menu_id() {
		return restaurant_menu_id;
	}

	public void setRestaurant_menu_id(RestaurantMenu restaurant_menu_id) {
		this.restaurant_menu_id = restaurant_menu_id;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	@Override
	public String toString() {
		return "OrderDetails [order_detailsID=" + order_detailsID + ", price=" + price + ", quantity=" + quantity
				+ ", order=" + order + ", restaurant_menu_id=" + restaurant_menu_id + "]";
	}
	
	
    
    

   
}

