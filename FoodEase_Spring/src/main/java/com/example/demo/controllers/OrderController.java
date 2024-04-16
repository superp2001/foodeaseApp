package com.example.demo.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.DeliveryAddress;
import com.example.demo.entities.DeliveryBoy;
import com.example.demo.entities.Login;
import com.example.demo.entities.Order;
import com.example.demo.entities.OrderDetailDummy;
import com.example.demo.entities.OrderDetails;
import com.example.demo.entities.OrderDummy;
import com.example.demo.entities.OrderStatus;
import com.example.demo.entities.Payment;
import com.example.demo.entities.Restaurant;
import com.example.demo.entities.RestaurantMenu;
import com.example.demo.services.CustomerService;
import com.example.demo.services.DeliveryAddressService;
import com.example.demo.services.DeliveryBoyService;
import com.example.demo.services.LoginService;
import com.example.demo.services.OrderService;
import com.example.demo.services.OrderStatusService;
import com.example.demo.services.PaymentService;
import com.example.demo.services.RestaurantMenuService;
import com.example.demo.services.RestaurantService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OrderController {
	
	@Autowired
	OrderService oserv;
	
	@Autowired
	LoginService lserv;
	
	@Autowired
	CustomerService cuserv;
	
	@Autowired
	DeliveryAddressService dserv;
	
	@Autowired
	DeliveryBoyService dbserv;
	
	@Autowired
	OrderStatusService orserv;
	
	@Autowired
	RestaurantMenuService rmserv;
	
	@Autowired
	RestaurantService rserv;
	
	@Autowired
	PaymentService pserv;
	
	@PostMapping("/saveOrder")
	public Order saveor(@RequestBody Order o)
	{
		return oserv.saveOrders(o);
	}
	
	
	@GetMapping("/viewUserOrder/{userId}")
    public List<Order> getOrdersByUserId(@PathVariable int userId) {
            return oserv.getOrdersByUserId(userId);
    }
	
	@GetMapping("/viewDboyOrder/{DriverId}")
    public List<Order> getOrdersByDriverID(@PathVariable int DriverId) {
            return oserv.getOrdersByDriverId(DriverId);
    }
	
	
	@GetMapping("/viewAllOrder")
    public List<Order> getAllOrder() {
            return oserv.getAll();
    }
	
	
	@PostMapping("/orders")
    public ResponseEntity<String> createOrder(@RequestBody OrderDummy orderDummy) {
        Order order = new Order();
        order.setTotal_price(orderDummy.getTotal_price());
        order.setOrder_date(orderDummy.getOrder_date());
        
        Login l1= lserv.getById(orderDummy.getUser());
		Customer c= cuserv.getCustomer(l1);
		order.setUser_id(c);
		
		DeliveryAddress d=dserv.getById(orderDummy.getDeliveryAddress());
		order.setDelivery_addresses_id(d);
		
		DeliveryBoy db= dbserv.getById(orderDummy.getDriver());
		order.setDriver_id(db);
		
		OrderStatus os= orserv.getById(orderDummy.getOrder_status());
		order.setOrder_status(os);
		
		

        Set<OrderDetails> orderDetailsSet = new HashSet<>();
        for (OrderDetailDummy orderDetailDummy : orderDummy.getOrderItems()) {
            OrderDetails orderDetails = new OrderDetails();
            orderDetails.setPrice(orderDetailDummy.getPrice());
            orderDetails.setQuantity(orderDetailDummy.getQuantity());
            RestaurantMenu rm=rmserv.getById(orderDetailDummy.getRestaurantMenuId());
            orderDetails.setRestaurant_menu_id(rm);
            orderDetailsSet.add(orderDetails);
        }
        order.setOrderItems(orderDetailsSet);

        Order savedOrder = oserv.saveOrders(order);
        
        Payment p =new Payment();
        p.setOrderID(order);
        p.setAmount(orderDummy.getTotal_price());
        String transaction=orderDummy.getUpi()+orderDummy.getTotal_price()+orderDummy.getTotal_price()+order.getOrderID();
        p.setTransaction_id(transaction);
        p.setUser_id(c);
        Restaurant r=rserv.getById(orderDummy.getRestaurant());
        p.setRest_id(r);
        
        Payment pm=pserv.savePayment(p);
        
        if (savedOrder != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Order created successfully");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create order");
        }
    }
	
	
	@GetMapping("/{oid}/prepared")
    public ResponseEntity<Void> preparedOrder(@PathVariable("oid") int oid) {
		oserv.preparedOrder(oid);
        return ResponseEntity.ok().build();
    }
	
	@GetMapping("/{oid}/readyOrder")
    public ResponseEntity<Void> readyOrder(@PathVariable("oid") int oid) {
		oserv.readyOrder(oid);
        return ResponseEntity.ok().build();
    }
	
	@GetMapping("/{oid}/outDeliverOrder")
    public ResponseEntity<Void> outDeliverOrder(@PathVariable("oid") int oid) {
		oserv.outDeliverOrder(oid);
        return ResponseEntity.ok().build();
    }
	
	@GetMapping("/{oid}/deliverdOrder")
    public ResponseEntity<Void> deliverdOrder(@PathVariable("oid") int oid) {
		oserv.deliverdOrder(oid);
        return ResponseEntity.ok().build();
    }

}
