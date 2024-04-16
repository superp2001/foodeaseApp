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
@Table(name="city")
public class City {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int city_id;
	
	@Column
	String city_name;
	
	@ManyToOne
	@JoinColumn(name="stateID")
	Role stateID;

	
	
	
	
	public City() {
		super();
		// TODO Auto-generated constructor stub
	}

	public City(int city_id, String city_name, Role stateID) {
		super();
		this.city_id = city_id;
		this.city_name = city_name;
		this.stateID = stateID;
	}

	public int getCity_id() {
		return city_id;
	}

	public void setCity_id(int city_id) {
		this.city_id = city_id;
	}

	public String getCity_name() {
		return city_name;
	}

	public void setCity_name(String city_name) {
		this.city_name = city_name;
	}

	public Role getStateID() {
		return stateID;
	}

	public void setStateID(Role stateID) {
		this.stateID = stateID;
	}
	
	
	

}
