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
@Table(name="restaurant_owner")
public class Restaurant_owner {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int rowner_id;
	
	@Column
	String fname;
	
	@Column
	String lname;
	
	@Column
	String address;
	
	@Column
	String phone;
	
	@OneToOne
	@JoinColumn(name="loginID")
	Login loginID;

	public Restaurant_owner() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Restaurant_owner(String fname, String lname, String address, String phone, Login loginID) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.address = address;
		this.phone = phone;
		this.loginID = loginID;
	}

	public int getRowner_id() {
		return rowner_id;
	}

	public void setRowner_id(int rowner_id) {
		this.rowner_id = rowner_id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Login getLoginID() {
		return loginID;
	}

	public void setLoginID(Login loginID) {
		this.loginID = loginID;
	}
	
	

}
