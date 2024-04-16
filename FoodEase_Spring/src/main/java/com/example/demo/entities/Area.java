package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;

@Entity
//@NoArgsConstructor
@Table(name="area")
public class Area {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int area_id;
	
	@Column
	String area_name;
	
	@Column
	int pincode;
	
	@ManyToOne
	@JoinColumn(name="city_id")
	City city_id;

	
	
	
	public Area() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Area(int area_id, String area_name, int pincode, City city_id) {
		super();
		this.area_id = area_id;
		this.area_name = area_name;
		this.pincode = pincode;
		this.city_id = city_id;
	}

	public int getArea_id() {
		return area_id;
	}

	public void setArea_id(int area_id) {
		this.area_id = area_id;
	}

	public String getArea_name() {
		return area_name;
	}

	public void setArea_name(String area_name) {
		this.area_name = area_name;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public City getCity_id() {
		return city_id;
	}

	public void setCity_id(City city_id) {
		this.city_id = city_id;
	}
	
	
	
}
