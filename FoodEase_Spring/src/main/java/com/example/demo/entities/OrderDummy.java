package com.example.demo.entities;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

public class OrderDummy {
	
	
	private int orderID;
    private double total_price;
    private LocalDateTime order_date;
    private int order_status;
    private int deliveryAddress;
    private int user;
    private int driver;
    private int restaurant;
    private String upi;
    private Set<OrderDetailDummy> orderItems;
    
    
    
    
	public String getUpi() {
		return upi;
	}
	public void setUpi(String upi) {
		this.upi = upi;
	}
	public int getOrderID() {
		return orderID;
	}
	public void setOrderID(int orderID) {
		this.orderID = orderID;
	}
	public double getTotal_price() {
		return total_price;
	}
	public void setTotal_price(double total_price) {
		this.total_price = total_price;
	}
	public LocalDateTime getOrder_date() {
		return order_date;
	}
	public void setOrder_date(LocalDateTime order_date) {
		this.order_date = order_date;
	}
	public Integer getOrder_status() {
		return order_status;
	}
	public void setOrder_status(Integer order_status) {
		this.order_status = order_status;
	}
	public int getDeliveryAddress() {
		return deliveryAddress;
	}
	public void setDeliveryAddress(int deliveryAddress) {
		this.deliveryAddress = deliveryAddress;
	}
	public int getUser() {
		return user;
	}
	public void setUser(int user) {
		this.user = user;
	}
	public int getDriver() {
		return driver;
	}
	
	public int getRestaurant() {
		return restaurant;
	}
	public void setRestaurant(int restaurant) {
		this.restaurant = restaurant;
	}
	public void setOrder_status(int order_status) {
		this.order_status = order_status;
	}
	public void setDriver(int driver) {
		this.driver = driver;
	}
	public Set<OrderDetailDummy> getOrderItems() {
		return orderItems;
	}
	public void setOrderItems(Set<OrderDetailDummy> orderItems) {
		
		this.orderItems = orderItems;
	}

}
