import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar/navbar';

function ViewReceivedOrder() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from the API
        fetch(`http://localhost:8080/viewAllOrder`)
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
                <table className="table">
                    <thead>
                        <tr>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Delivery Boy</th>
                            <th>Delivery Boy Phone Number</th>
                            <th>Order Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.orderID}>
                                <td>{order.total_price}</td>
                                <td>{order.order_status.statusName}</td>
                                <td>{order.driver_id.fname} {order.driver_id.lname}</td>
                                <td>{order.driver_id.phone}</td>
                                <td>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Dish Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.orderItems.map(item => (
                                                <tr key={item.order_detailsID}>
                                                    <td>{item.restaurant_menu_id.menu_id.name}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.quantity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewReceivedOrder;
