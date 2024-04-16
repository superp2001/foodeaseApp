import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom';
// import Navbar from '../NavBar/navbar';



function CustomerDetails()
{
  const [owners, setVendors] = useState([]);

//   useEffect(() => {
//     // Fetch vendors from the API
//     fetch('http://localhost:8080/getallCustomer')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data); // Log the fetched data to the console
//         setVendors(data); // Set the fetched data to the state
//       })
//       .catch(error => console.error('Error fetching vendors', error));
//   }, []);


useEffect(() => {
    // Fetch vendors from the API
    fetch('http://localhost:8080/getallCustomer')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the fetched data to the console
        setVendors(data); // Set the fetched data to the state
      })
      .catch(error => console.error('Error fetching vendors', error));
  }, []);
  




  return(
    <div className='container'>
      <div className='row'>
   {/* <Navbar/> */}
   </div>
   <br/>
   <br/> 
    <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {owners.map((ro, index) => (
            <tr key={index}>
              <td>{ro.username}</td>
              <td>{ro.fname}</td>
              <td>{ro.lname}</td>
              <td>{ro.address}</td>
              <td>{ro.phone}</td>
              <td>{ro.email}</td> 
            </tr>
          ))}
        </tbody>
      </table>
      {JSON.stringify(owners)}

   </div>
  );
}

export default CustomerDetails;