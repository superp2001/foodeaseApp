import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {


  const navigate = useNavigate();



  const handleLogout = () => {
    localStorage.removeItem("loginID");
    navigate("/login");
  };
  


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
              <Link className="nav-link" to="/homerestaurant">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/restaurant_Register">Register Restaurant</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/viewMenu">View Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/earning">Total Earning</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/restaurant/register">Profile</Link>
            </li>

            <li className="nav-item">
            <button className="nav-link" onClick={handleLogout}>Log out</button>
            </li>
            <li><Link className="nav-link" to="/">{localStorage.getItem("loginID")} Hello</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
