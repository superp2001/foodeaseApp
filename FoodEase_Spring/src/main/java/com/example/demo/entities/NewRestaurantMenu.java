package com.example.demo.entities;

import java.util.Arrays;

public class NewRestaurantMenu {


    String name;

    String food_type;

    int category_id;
    
    int restaurant_id;

    int menu_id;

    double price;
   
    byte[] img;

    String description;
    
    boolean available_status;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFood_type() {
		return food_type;
	}

	public void setFood_type(String food_type) {
		this.food_type = food_type;
	}

	public int getCategory_id() {
		return category_id;
	}

	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}

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
		return "NewRestaurantMenu [name=" + name + ", food_type=" + food_type + ", category_id=" + category_id
				+ ", restaurant_id=" + restaurant_id + ", menu_id=" + menu_id + ", price=" + price + ", img="
				+ Arrays.toString(img) + ", description=" + description + ", available_status=" + available_status
				+ "]";
	}
    
    
    
	
	
}
