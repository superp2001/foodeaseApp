import React, { useState } from 'react';
import {useNavigate } from "react-router-dom";


function SearchBar() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchRestaurants();
  // }, [search]);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(`http://localhost:8080/restaurants?name=${search}`);
      if (!response.ok) {
        throw new Error('Failed to fetch restaurants');
      }
      const data = await response.json(); // Get response as text
      // setRestaurants(data.split('\n')); // Split the response text into lines
      setRestaurants(data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      setError('Error fetching restaurants. Please try again later.');
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    fetchRestaurants();
  };

  const viewRestaurant = (rest_id) => {
    // Save restaurantName to local storage
    localStorage.setItem('selectedRestaurant', rest_id);
    // Call any other actions related to viewing a restaurant
    // For example, you might navigate to a new page or display more details.
    navigate("/viewSearchRMenu");
  };

  return (
    <div>
      
      {error && <p>{error}</p>}
      <ul>
       <div id="tabs">  
    
       <div className="container" style={{ padding: '50px' }}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
            />
            
          </div>
          {error && <p className="text-danger">{error}</p>}
        </div>
      </div>
    </div>
  

    {restaurants.map(restaurant => (  
      
      <div key={restaurant.id} onClick={() => viewRestaurant(restaurant.rest_id)}>  
      
      <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{restaurant.restaurantName}</h5>
        <p className="card-text">Phone: {restaurant.phone}</p>
      </div>
      </div>
    </div>  
      
    ))}  
      
    </div>
      </ul>
    </div>
  );
}

export default SearchBar;