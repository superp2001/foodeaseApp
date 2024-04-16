package com.example.demo.entities;

import java.util.Arrays;



public class ExistRestaurantMenu {
	

 
    int restaurant_id;


    int menu_id;


    double price;

    
    byte[] img;

 
    String description;

    
    boolean available_status;



	public int getRestaurant_id() {
		return restaurant_id;
	}


	public void setRestaurant_id(int restaurant_id) {
		this.restaurant_id = restaurant_id;
	}


	public int getMenu_id() {
		return menu_id;
	}


	public void setMenu_id(int menu_id) {
		this.menu_id = menu_id;
	}


	public double getPrice() {
		return price;
	}


	public void setPrice(double price) {
		this.price = price;
	}


	public byte[] getImg() {
		return img;
	}


	public void setImg(byte[] img) {
		this.img = img;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public boolean isAvailable_status() {
		return available_status;
	}


	public void setAvailable_status(boolean available_status) {
		this.available_status = available_status;
	}


	@Override
	public String toString() {
		return "ExistRestaurantMenu [restaurant_id=" + restaurant_id
				+ ", menu_id=" + menu_id + ", price=" + price + ", img=" + Arrays.toString(img) + ", description="
				+ description + ", available_status=" + available_status + "]";
	}
    
    

}
