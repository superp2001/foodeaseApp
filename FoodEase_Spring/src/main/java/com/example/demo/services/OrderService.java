package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.DeliveryBoy;
import com.example.demo.entities.Login;
import com.example.demo.entities.Order;
import com.example.demo.entities.OrderStatus;
import com.example.demo.repositories.OrderRepository;

@Service
public class OrderService {

	@Autowired
	OrderRepository orepo;
	
	@Autowired
	LoginService lserv;
	
	@Autowired
	CustomerService cserv;
	
	@Autowired
	OrderStatusService osserv;
	
	@Autowired
	DeliveryBoyService dserv;
	
	
	@Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orepo = orderRepository;
    }

    public Order saveOrders(Order order) {
        return orepo.save(order);
    }



    public List<Order> getOrdersByUserId(int userId) {
    	Login l= lserv.getById(userId);
    	Customer c=cserv.getCustomer(l);
        return orepo.findByUser_id(c);
    }
    
    
    public List<Order> getOrdersByDriverId(int userId) {
    	Login l= lserv.getById(userId);
    	DeliveryBoy d=dserv.getDelivery(l);
        return orepo.findByDriver_id(d);
    }
    
    public List<Order> getAll() {
    
        return orepo.findAll();
    }
    
    public void preparedOrder(int oID) {
        // Fetch the login by ID
        Order order = orepo.findById(oID).get();
               
        OrderStatus os=osserv.getById(2);

        // Perform any business logic related to rejecting the login
        order.setOrder_status(os);

        // Save the updated login entity
        orepo.save(order);
    }
    
    public void readyOrder(int oID) {
        // Fetch the login by ID
        Order order = orepo.findById(oID).get();
               
        OrderStatus os=osserv.getById(3);

        // Perform any business logic related to rejecting the login
        order.setOrder_status(os);

        // Save the updated login entity
        orepo.save(order);
    }
    
    public void outDeliverOrder(int oID) {
        // Fetch the login by ID
        Order order = orepo.findById(oID).get();
               
        OrderStatus os=osserv.getById(4);

        // Perform any business logic related to rejecting the login
        order.setOrder_status(os);

        // Save the updated login entity
        orepo.save(order);
    }
    
    public void deliverdOrder(int oID) {
        // Fetch the login by ID
        Order order = orepo.findById(oID).get();
               
        OrderStatus os=osserv.getById(5);

        // Perform any business logic related to rejecting the login
        order.setOrder_status(os);

        // Save the updated login entity
        orepo.save(order);
    }
    
}


