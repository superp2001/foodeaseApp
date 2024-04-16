import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer, useEffect, useState } from 'react';
import Navbar from '../NavBar/navbar';
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";




function ViewMenu() {

    const [menu, viewMenu] = useState([]);


    useEffect(() => {
        // Fetch vendors from the API
        fetch(`http://localhost:8080/viewMenu/${localStorage.getItem("loginID")}`)
          .then(response => response.json())
          .then(data => {
            console.log(data); // Log the fetched data to the console
            viewMenu(data); // Set the fetched data to the state
          })
          .catch(error => console.error('Error fetching vendors', error));
      }, []);
  
  return (
    <div>
      <Navbar />

      <div>Menu Detail</div>

      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Description</th>
            <th>Available Status</th>
            
          </tr>
        </thead>
        <tbody>
          {menu.map((ro, index) => (
            <tr key={index}>
              <td>{ro.menu_id.name}</td> 
              <td>{ro.menu_id.food_type}</td>
              <td>{ro.price}</td>
              <td>{ro.description}</td> 
              <td>{ro.available_status ? 'Available ' : 'Unavailable '}</td>

            </tr>
          ))}
        </tbody>
      </table>


      <br/>
      <div><li className="nav-item">
              <Link className="nav-link" to="/addMenu">Add Menu</Link>
            </li></div>
      <br/>
      <br/>
      {JSON.stringify(menu)}

    </div>
  );
}

export default ViewMenu;