package com.example.demo.entities;



public class DeliveryAddressDummy {
	
	
    int delivery_addresses_id;

    
    String address;

    
    int area_id;

    
    int user_id;


	public int getDelivery_addresses_id() {
		return delivery_addresses_id;
	}


	public void setDelivery_addresses_id(int delivery_addresses_id) {
		this.delivery_addresses_id = delivery_addresses_id;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public int getArea_id() {
		return area_id;
	}


	public void setArea_id(int area_id) {
		this.area_id = area_id;
	}


	public int getUser_id() {
		return user_id;
	}


	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}


	@Override
	public String toString() {
		return "DeliveryAddressDummy [delivery_addresses_id=" + delivery_addresses_id + ", address=" + address
				+ ", area_id=" + area_id + ", user_id=" + user_id + "]";
	}
    
    

}
