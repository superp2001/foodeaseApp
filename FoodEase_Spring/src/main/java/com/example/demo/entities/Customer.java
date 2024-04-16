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
@Table(name="customer")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int user_id;
	
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

	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Customer(String fname, String lname, String address, String phone, Login loginID) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.address = address;
		this.phone = phone;
		this.loginID = loginID;
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

	
	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
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


	@Override
	public String toString() {
		return "Customer [user_id=" + user_id + ", fname=" + fname + ", lname=" + lname + ", address=" + address
				+ ", phone=" + phone + ", loginID=" + loginID + "]";
	}

	
	
	

}
