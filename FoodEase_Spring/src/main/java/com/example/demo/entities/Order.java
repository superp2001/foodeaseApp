package com.example.demo.entities;



import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderID;

    @Column
    private double total_price;

    
    @DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
	@Column(name="order_date")
	private LocalDateTime order_date;

    @ManyToOne
    @JoinColumn(name = "orderStatus")
    private OrderStatus order_status;

    @OneToOne
    @JoinColumn(name = "delivery_addresses_id")
    private DeliveryAddress delivery_addresses_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Customer user_id;

    @ManyToOne
    @JoinColumn(name = "driver_id")
    private DeliveryBoy driver_id;
    
    @JsonIgnoreProperties("order")
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private Set<OrderDetails> orderItems;

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Order(double total_price, LocalDateTime order_date, OrderStatus order_status,
			DeliveryAddress delivery_addresses_id, Customer user_id, DeliveryBoy driver_id,
			Set<OrderDetails> orderItems) {
		super();
		this.total_price = total_price;
		this.order_date = order_date;
		this.order_status = order_status;
		this.delivery_addresses_id = delivery_addresses_id;
		this.user_id = user_id;
		this.driver_id = driver_id;
		for(OrderDetails o:orderItems)
		{	
			o.setOrder(this);
		}		
		this.orderItems = orderItems;

	}



	public int getOrderID() {
		return orderID;
	}

	public void setOrderID(int orderID) {
		this.orderID = orderID;
	}

	public double getTotal_price() {
		return total_price;
	}

	public void setTotal_price(double total_price) {
		this.total_price = total_price;
	}

	public LocalDateTime getOrder_date() {
		return order_date;
	}

	public void setOrder_date(LocalDateTime order_date) {
		this.order_date = order_date;
	}

	public OrderStatus getOrder_status() {
		return order_status;
	}

	public void setOrder_status(OrderStatus order_status) {
		this.order_status = order_status;
	}

	public DeliveryAddress getDelivery_addresses_id() {
		return delivery_addresses_id;
	}

	public void setDelivery_addresses_id(DeliveryAddress delivery_addresses_id) {
		this.delivery_addresses_id = delivery_addresses_id;
	}

	public Customer getUser_id() {
		return user_id;
	}

	public void setUser_id(Customer user_id) {
		this.user_id = user_id;
	}

	public DeliveryBoy getDriver_id() {
		return driver_id;
	}

	public void setDriver_id(DeliveryBoy driver_id) {
		this.driver_id = driver_id;
	}


	public Set<OrderDetails> getOrderItems() {
		return orderItems;
	}


	public void setOrderItems(Set<OrderDetails> orderItems) {
		for(OrderDetails o:orderItems)
		{	
			o.setOrder(this);
		}		
		this.orderItems = orderItems;
	}

	@Override
	public String toString() {
		return "Order [orderID=" + orderID + ", total_price=" + total_price + ", order_date=" + order_date
				+ ", order_status=" + order_status + ", delivery_addresses_id=" + delivery_addresses_id + ", user_id="
				+ user_id + ", driver_id=" + driver_id + ", orderItems=" + orderItems + "]";
	}

   
}
