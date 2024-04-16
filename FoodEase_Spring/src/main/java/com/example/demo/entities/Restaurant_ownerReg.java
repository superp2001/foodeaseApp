package com.example.demo.entities;

public class Restaurant_ownerReg {
	
	int rowner_id;
	
	String fname;
	
	String lname;
	
	String address; 
	
	String phone;
	
	String username;
	
	String email;
	
	String password;
	
	boolean status_approve;

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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isStatus_approve() {
		return status_approve;
	}

	public void setStatus_approve(boolean status_approve) {
		this.status_approve = status_approve;
	}
	
	

}
