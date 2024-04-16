import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for createRoot
import Navbar from '../NavBar/navbar';
import { Link, useNavigate } from "react-router-dom";


function ConfirmOrder()
{
    const navigate = useNavigate();
    const [upiID, setUpiID] = useState(''); // State variable to hold UPI ID
    const [restaurantId, setRestaurantId] = useState(null); // State variable to hold restaurant ID

    const [cart, viewCart] = useState([]);

    useEffect(() => {
        // Fetch vendors from the API
        fetch(`http://localhost:8080/getCartByCustomerId/${localStorage.getItem("loginID")}`)
          .then(response => response.json())
          .then(data => {
            console.log(data); // Log the fetched data to the console
            viewCart(data); // Set the fetched data to the state
          })
          .catch(error => console.error('Error fetching vendors', error));
      }, []);

      const total = cart.reduce((acc, ro) => {
        return acc + (ro.restaurant_menu_id.price * ro.quantity);
    }, 0);


    const PlaceOrder = () => {
        
        const orderData = {
            total_price: total+50, 
            order_date: new Date().toISOString(),
            order_status: 1, 
            deliveryAddress: localStorage.getItem("daddress"), 
            user: localStorage.getItem("loginID"), 
            driver: 1, 
            restaurant:cart[0].restaurant_menu_id.restaurant_id.rest_id,
            upi: upiID,
            orderItems: cart.map(item => ({
                price: item.restaurant_menu_id.price * item.quantity,
                quantity: item.quantity,
                restaurantMenuId: item.restaurant_menu_id.restaurant_menu_id
            }))
        };

         // Make a POST request to submit the order
    fetch('http://localhost:8080/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    })
    .then(response => {
        if (response.ok) {
            fetch(`http://localhost:8080/deleteCartByUserId/${localStorage.getItem("loginID")}`, {
                method: 'DELETE'
            })
            .then(deleteResponse => {
                if (deleteResponse.ok) {
                    // If cart items are deleted successfully, navigate to '/viewCart'
                    navigate('/viewCustomerOrder');
                } else {
                    console.error('Failed to delete cart items');
                }
            })
            .catch(error => console.error('Error deleting cart items:', error));
        } else {
            // Handle errors here
            console.error('Failed to place order');
        }
    })
    .catch(error => console.error('Error placing order:', error));


        // navigate('/enterDeliveryAddress');
    };

  

    return(
        <div>
        <Navbar/>
 
        <h1>Order Detail</h1>
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th>Dish Name</th>
                    <th>Price</th>
                    <th>Quantity</th>      
                </tr>
            </thead>
            <tbody>
                {cart.map((ro, index) => (
                    <tr key={index}>
                        <td>{ro.restaurant_menu_id.menu_id.name}</td> 
                        <td>{ro.restaurant_menu_id.price * ro.quantity}</td>
                        <td>{ro.quantity}</td> 
                        {/* <td>{ro.restaurant_menu_id.restaurant_id.rest_id}</td>  
                        <td>{ro.restaurant_menu_id.restaurant_id.restaurantName}</td> */}
                    </tr>
                ))}
            </tbody>
            <tr>
                <th colSpan="2">Total Price</th>
                <td>{total}</td>
            </tr>
            <tr>
                <th>Delivery Charges</th>
                <td>50</td>
            </tr>
            <tr>
            <input type="text" placeholder="Enter UPI ID"  value={upiID}  onChange={(e) => setUpiID(e.target.value)} />
            </tr>
            <tr>
                <th onClick={PlaceOrder}>Confirm Order</th>
            </tr>
        </table>
    
    
    <br/>
    <br/>
    {JSON.stringify(cart)}


    </div>
    )
}

export default ConfirmOrder;