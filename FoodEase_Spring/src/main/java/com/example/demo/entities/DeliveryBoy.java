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
@Table(name="Delivery_boy")
public class DeliveryBoy {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    int driver_id;

    @Column
    String fname;

    @Column
    String lname;

    @Column
    String phone;

    @Column
    String address;

    @Column
    String vehicle_License_No;

    @Column
    String photo_id_number;

    @OneToOne
	@JoinColumn(name="loginID")
	Login loginID;

	public DeliveryBoy() {
		super();
		// TODO Auto-generated constructor stub
	}


	public DeliveryBoy(String fname, String lname, String phone, String address, String vehicle_License_No,
			String photo_id_number, Login loginID) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.phone = phone;
		this.address = address;
		this.vehicle_License_No = vehicle_License_No;
		this.photo_id_number = photo_id_number;
		this.loginID = loginID;
	}


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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
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

	public Login getLoginID() {
		return loginID;
	}

	public void setLoginID(Login loginID) {
		this.loginID = loginID;
	}


	@Override
	public String toString() {
		return "DeliveryBoy [driver_id=" + driver_id + ", fname=" + fname + ", lname=" + lname + ", phone=" + phone
				+ ", address=" + address + ", vehicle_License_No=" + vehicle_License_No + ", photo_id_number="
				+ photo_id_number + ", loginID=" + loginID + "]";
	}

	
    
    

}
