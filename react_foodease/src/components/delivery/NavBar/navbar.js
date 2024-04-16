import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">FoodEase</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/deliveryOrder">Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/earning">Total Earning</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delivery/register">Profile</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">Log out</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
