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

@Table(name="payment")
public class Payment {
	

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int payment_id;
	
	@Column
	String transaction_id;
	
	@Column
	Double amount;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	Customer user_id;
	
	@ManyToOne
	@JoinColumn(name="rest_id")
	Restaurant rest_id;
	
	@OneToOne
	@JoinColumn(name="orderID")
	Order orderID;
	

	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public Payment(String transaction_id, Double amount, Customer user_id, Restaurant rest_id, Order orderID) {
		super();
		this.transaction_id = transaction_id;
		this.amount = amount;
		this.user_id = user_id;
		this.rest_id = rest_id;
		this.orderID = orderID;
	}



	public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}

	public String getTransaction_id() {
		return transaction_id;
	}

	public void setTransaction_id(String transaction_id) {
		this.transaction_id = transaction_id;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public Customer getUser_id() {
		return user_id;
	}

	public void setUser_id(Customer user_id) {
		this.user_id = user_id;
	}

	public Restaurant getRest_id() {
		return rest_id;
	}

	public void setRest_id(Restaurant rest_id) {
		this.rest_id = rest_id;
	}

	public Order getOrderID() {
		return orderID;
	}

	public void setOrderID(Order orderID) {
		this.orderID = orderID;
	}
	
	
		
	
}
