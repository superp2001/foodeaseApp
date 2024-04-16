import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate } from "react-router-dom";

// import {Link} from 'react-router-dom';
// import Navbar from '../NavBar/navbar';


function ViewRestaurant() {
    const [restaurants, setRestaurants] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        // Fetch restaurants from the API
        fetch('http://localhost:8080/getAllRestaurant')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the fetched data to the console
                setRestaurants(data); // Set the fetched data to the state
            })
            .catch(error => console.error('Error fetching restaurants', error));
    }, []);

    const viewRestaurant = (rest_id) => {
        // Save restaurantName to local storage
        localStorage.setItem('selectedRestaurant', rest_id);
        // Call any other actions related to viewing a restaurant
        // For example, you might navigate to a new page or display more details.
        navigate("/viewSearchRMenu");
      };


      

    return (
        <div className="container">
            <div className='row'>
                {/* <Navbar/> */}
            </div>
            <br />
            <br />
            <div className="list-group">
                {restaurants.map((restaurant, index) => (
                    <a href="#" key={index} className="list-group-item list-group-item-action" onClick={() => viewRestaurant(restaurant.rest_id)}>
                    <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{restaurant.restaurantName}</h5>
                            <small>{restaurant.phone}</small>
                        </div>
                        <p className="mb-1">{restaurant.area_id.area_name}, {restaurant.area_id.city_id.city_name}</p>
                        <small>{restaurant.email}</small>
                    </a>
                ))}
            </div>
            {JSON.stringify(restaurants)}
        </div>
    )
}

export default ViewRestaurant;
