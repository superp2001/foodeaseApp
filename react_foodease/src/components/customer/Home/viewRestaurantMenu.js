import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for createRoot
import Navbar from '../NavBar/navbar';
import { Link, useNavigate } from "react-router-dom";


function ViewRestaurantMenu() {

    const navigate = useNavigate();
    const [menu, viewMenu] = useState([]);

    useEffect(() => {
        // Fetch vendors from the API
        fetch(`http://localhost:8080/viewRMenu/${localStorage.getItem("selectedRestaurant")}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the fetched data to the console
                const updatedMenu = data.map(item => ({ ...item, quantity: 0 }));
                viewMenu(updatedMenu);
            })
            .catch(error => console.error('Error fetching vendors', error));
    }, []);

    const handleQuantityChange = (index, value) => {
        const updatedMenu = [...menu];
        updatedMenu[index].quantity += value;
        viewMenu(updatedMenu);
    };

    const insertIntoCart = (menuItemId, quantity) => {
        const requestOptions = {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                user_id: localStorage.getItem("loginID"),
                quantity: quantity,
                restaurant_menu_id: menuItemId
            })
        };

        fetch('http://localhost:8080/addToCart', requestOptions)
            .then(response => {
                if (response.ok) {
                    // Successful login
                    alert('Item added to cart successfully!');
                    // You might want to update state or perform other actions here.
                } else {
                    // Login failed
                    alert('Failed to add item to cart. Please try again.');
                }
            })
            .catch(error => console.error('Error adding item to cart:', error));
    };

  return (
    <div className='container'>
      <div className='row'>
        <Navbar/>


        <br/>
   <br/> 
   <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Dish Name</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Add To Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((ro, index) => (
                            <tr key={index}>
                                <td>{ro.menu_id && ro.menu_id.name}</td>
                                <td>{ro.menu_id && ro.menu_id.food_type}</td>
                                <td>{ro.description}</td>
                                <td>{ro.price}</td>
                                <td>
                                    <button onClick={() => handleQuantityChange(index, -1)} disabled={ro.quantity <= 0}>-</button>
                                    {ro.quantity}
                                    <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                                </td>
                                <td><button onClick={() => insertIntoCart(ro.restaurant_menu_id, ro.quantity)}>add</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* JSON.stringify(menu) */}
            </div>
        </div>
    );
}

export default ViewRestaurantMenu;
