import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom';
import Navbar from '../NavBar/navbar';



function IncomeReport()
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
    fetch('https://localhost:7278/api/IncomeReport/GetIncomeReport')
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
   <Navbar/>
   </div>
   <br/>
   <br/> 
    <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>restaurantId</th>
            <th>restaurantName</th>
            <th>totalPayments</th>
          </tr>
        </thead>
        <tbody>
          {owners.map((ro, index) => (
            <tr key={index}>
              <td>{ro.restaurantId}</td>
              <td>{ro.restaurantName}</td>
              <td>{ro.totalPayments}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      {JSON.stringify(owners)}

   </div>
  );
}

export default IncomeReport;