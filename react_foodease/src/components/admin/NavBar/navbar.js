

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import RownerDetails from '../Home/rownerDetail';
import CustomerDetails from '../Home/customerDetails';
import DboyDetails from '../Home/dBoyDetail';

function Navbar() {
  const [selectedOption, setSelectedOption] = useState('detail');

  const navigate = useNavigate();


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("loginID");
    navigate("/login");
  };
  

  return (
    <div>    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">FoodEase</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/homeadmin">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <select className="form-select" aria-label="Default select example" value={selectedOption} onChange={handleOptionChange}>
                  <option value="detail">Detail</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="customer">Customer</option>
                  <option value="delivery-boy">Delivery Boy</option>
                </select>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/statistics">Statistics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/incomeReport">View Report</Link>
              </li>
              <li className="nav-item">
              <button className="nav-link" onClick={handleLogout}>Log out</button>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">{localStorage.getItem("loginID")} Hello</Link>
                <button></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Render detail based on selected option */}
      {selectedOption === 'restaurant' && <RownerDetails />}
      {selectedOption === 'customer' && <div><CustomerDetails /></div>}
      {selectedOption === 'delivery-boy' && <div><DboyDetails /></div>}
    </div>
  );
}

export default Navbar;
