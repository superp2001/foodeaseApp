package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;


@Entity
@Table(name="restaurant")
public class Restaurant {
		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int rest_id;
	
	@Column(name = "restaurant_name")
	private String restaurantName;
	
	@Column
	private String phone;
	
	@Column
	private String email;
	
	@Column
	private String fssai_licence_no;
	
	@Column
	private String gst_no;
	
	@Column
	private String pan_no;
	
	@OneToOne
	@JoinColumn(name="area_id")
	private Area area_id;
	
	@OneToOne
	@JoinColumn(name="rowner_id")
	private Restaurant_owner rowner_id;

	public Restaurant() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Restaurant(String restaurant_name, String phone, String email, String fssai_licence_no, String gst_no,
			String pan_no, Area area_id, Restaurant_owner rowner_id) {
		super();
		this.restaurantName = restaurant_name;
		this.phone = phone;
		this.email = email;
		this.fssai_licence_no = fssai_licence_no;
		this.gst_no = gst_no;
		this.pan_no = pan_no;
		this.area_id = area_id;
		this.rowner_id = rowner_id;
	}
	
	

	public Restaurant(String restaurant_name, String phone, String email, String fssai_licence_no,
			String gst_no, String pan_no, Area area_id) {
		super();
		this.restaurantName = restaurant_name;
		this.phone = phone;
		this.email = email;
		this.fssai_licence_no = fssai_licence_no;
		this.gst_no = gst_no;
		this.pan_no = pan_no;
		this.area_id = area_id;
	}

	public Restaurant(String restaurant_name, String phone, String email, String fssai_licence_no, String gst_no,
			String pan_no) {
		super();
		this.restaurantName = restaurant_name;
		this.phone = phone;
		this.email = email;
		this.fssai_licence_no = fssai_licence_no;
		this.gst_no = gst_no;
		this.pan_no = pan_no;
	}

	public int getRest_id() {
		return rest_id;
	}

	public void setRest_id(int rest_id) {
		this.rest_id = rest_id;
	}

	

	public String getRestaurantName() {
		return restaurantName;
	}

	public void setRestaurantName(String restaurantName) {
		this.restaurantName = restaurantName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFssai_licence_no() {
		return fssai_licence_no;
	}

	public void setFssai_licence_no(String fssai_licence_no) {
		this.fssai_licence_no = fssai_licence_no;
	}

	public String getGst_no() {
		return gst_no;
	}

	public void setGst_no(String gst_no) {
		this.gst_no = gst_no;
	}

	public String getPan_no() {
		return pan_no;
	}

	public void setPan_no(String pan_no) {
		this.pan_no = pan_no;
	}

	public Area getArea_id() {
		return area_id;
	}

	public void setArea_id(Area area_id) {
		this.area_id = area_id;
	}

	public Restaurant_owner getRowner_id() {
		return rowner_id;
	}

	public void setRowner_id(Restaurant_owner rowner_id) {
		this.rowner_id = rowner_id;
	}
	
	
	
	
	
}
