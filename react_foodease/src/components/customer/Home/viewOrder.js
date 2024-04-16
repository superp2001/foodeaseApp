import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar/navbar';

function ViewCustomerOrder() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from the API
        fetch(`http://localhost:8080/viewUserOrder/${localStorage.getItem("loginID")}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the fetched data to the console
                setOrders(data); // Set the fetched data to the state
            })
            .catch(error => console.error('Error fetching orders', error));
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Orders</h2>
                {orders.map(order => (
                    <div key={order.orderID} className="card mb-3">
                        <div className="card-body">
                            <p className="card-text">Total Price: {order.total_price}</p>
                            <p className="card-text">Status: {order.order_status.statusName}</p>
                            <p className="card-text">Delivery Boy: {order.driver_id.fname} {order.driver_id.lname}</p>
                            <p className="card-text">Delivery Boy Phone Number: {order.driver_id.phone}</p>
                            <h3 className="card-title">Order Items:</h3>
                            {order.orderItems.map(item => (
                                <div key={item.order_detailsID} className="card">
                                    <div className="card-body">
                                        <p className="card-text">Dish Name: {item.restaurant_menu_id.menu_id.name}</p>
                                        <p className="card-text">Price: {item.price}</p>
                                        <p className="card-text">Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewCustomerOrder;
