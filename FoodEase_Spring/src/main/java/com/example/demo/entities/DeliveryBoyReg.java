package com.example.demo.entities;


public class DeliveryBoyReg {
	
	int driver_id;
	
	String fname;
	
	String lname;
	
	String address;

	String phone;
	
	String username;
	
	String email;
	
	String password;
	
	String vehicle_License_No;

    String photo_id_number;

	public int getDriver_id() {
		return driver_id;
	}

	public void setDriver_id(int driver_id) {
		this.driver_id = driver_id;
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

	public String getVehicle_License_No() {
		return vehicle_License_No;
	}

	public void setVehicle_License_No(String vehicle_License_No) {
		this.vehicle_License_No = vehicle_License_No;
	}

	public String getPhoto_id_number() {
		return photo_id_number;
	}

	public void setPhoto_id_number(String photo_id_number) {
		this.photo_id_number = photo_id_number;
	}

	@Override
	public String toString() {
		return "DeliveryBoyReg [driver_id=" + driver_id + ", fname=" + fname + ", lname=" + lname + ", address="
				+ address + ", phone=" + phone + ", username=" + username + ", email=" + email + ", password="
				+ password + ", vehicle_License_No=" + vehicle_License_No + ", photo_id_number=" + photo_id_number
				+ "]";
	}
    
    

}
