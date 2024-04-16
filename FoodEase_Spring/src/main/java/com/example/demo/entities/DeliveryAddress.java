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
@Table(name = "deliveryaddress")
public class DeliveryAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int delivery_addresses_id;

    @Column
    String address;

    @ManyToOne
	@JoinColumn(name="area_id")
    Area area_id;

    @ManyToOne
	@JoinColumn(name="user_id")
    Customer user_id;

	public DeliveryAddress() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DeliveryAddress(String address, Area area_id, Customer user_id) {
		super();
		this.address = address;
		this.area_id = area_id;
		this.user_id = user_id;
	}

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

	public Area getArea_id() {
		return area_id;
	}

	public void setArea_id(Area area_id) {
		this.area_id = area_id;
	}

	public Customer getUser_id() {
		return user_id;
	}

	public void setUser_id(Customer user_id) {
		this.user_id = user_id;
	}

    
    
}

