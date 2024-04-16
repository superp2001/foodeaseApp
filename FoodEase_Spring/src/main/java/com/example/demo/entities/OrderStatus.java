package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "orderstatus")
public class OrderStatus {
	
	
	@Id
	@Column(name="order_status")
    private int orderStatus;
    
	@Column(name="Status_Name")
    private String statusName;
    
    // Constructors, getters, and setters

    public OrderStatus() {
    }

    public OrderStatus(int orderStatus, String statusName) {
        this.orderStatus = orderStatus;
        this.statusName = statusName;
    }

    public int getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(int orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getStatusName() {
        return statusName;
    }

    public void setStatusName(String statusName) {
        this.statusName = statusName;
    }

}
