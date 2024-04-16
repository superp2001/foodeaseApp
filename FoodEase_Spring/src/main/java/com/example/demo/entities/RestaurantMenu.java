package com.example.demo.entities;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "restaurant_menu")
public class RestaurantMenu {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "restaurant_menu_id")
    private int restaurant_menu_id;

    @ManyToOne
	@JoinColumn(name="restaurant_id")
    private Restaurant restaurant_id;

    @ManyToOne
	@JoinColumn(name="menu_id")
    private Menu menu_id;

    @Column(name = "price")
    private double price;

    @Lob
    @Column(name = "img")
    private byte[] img;

    @Column(name = "description", columnDefinition = "LONGTEXT")
    private String description;

    @Column
    private boolean availeble_status;

	public RestaurantMenu() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RestaurantMenu(int restaurant_menu_id, Restaurant restaurant_id, Menu menu_id, double price, byte[] img,
			String description, boolean available_status) {
		super();
		this.restaurant_menu_id = restaurant_menu_id;
		this.restaurant_id = restaurant_id;
		this.menu_id = menu_id;
		this.price = price;
		this.img = img;
		this.description = description;
		this.availeble_status = available_status;
	}

	public RestaurantMenu(Restaurant restaurant_id, Menu menu_id, double price,
			String description, boolean available_status) {
		super();
		this.restaurant_id = restaurant_id;
		this.menu_id = menu_id;
		this.price = price;
		this.description = description;
		this.availeble_status = available_status;
	}

	public int getRestaurant_menu_id() {
		return restaurant_menu_id;
	}

	public void setRestaurant_menu_id(int restaurant_menu_id) {
		this.restaurant_menu_id = restaurant_menu_id;
	}

	public Restaurant getRestaurant_id() {
		return restaurant_id;
	}

	public void setRestaurant_id(Restaurant restaurant_id) {
		this.restaurant_id = restaurant_id;
	}

	public Menu getMenu_id() {
		return menu_id;
	}

	public void setMenu_id(Menu menu_id) {
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
		return availeble_status;
	}

	public void setAvailable_status(boolean available_status) {
		this.availeble_status = available_status;
	}

	@Override
	public String toString() {
		return "RestaurantMenu [restaurant_menu_id=" + restaurant_menu_id + ", restaurant_id=" + restaurant_id
				+ ", menu_id=" + menu_id + ", price=" + price + ", img=" + Arrays.toString(img) + ", description="
				+ description + ", available_status=" + availeble_status + "]";
	}
    
    
	
	
}
