import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom';
// import Navbar from '../NavBar/navbar';



function DboyDetails()
{
  const [owners, setVendors] = useState([]);

  useEffect(() => {
    // Fetch vendors from the API
    fetch('http://localhost:8080/getallDboy')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the fetched data to the console
        setVendors(data); // Set the fetched data to the state
      })
      .catch(error => console.error('Error fetching vendors', error));
  }, []);

 

  const handleApprove = (rowner_id) => {
    // Handle login approval
    fetch("http://localhost:8080/"+rowner_id+"/approve")
      .then(response => {
        if (response.ok) {
          // Handle success
          console.log('Login updated successfully!');
          window.location.reload();
          // Optionally update the state or perform any other actions
        } else {
          // Handle error
          console.error('Error updating login:', response.statusText);
        }
      })
      .catch(error => console.error('Error updating login:', error));
  };
  

  const handleReject = (rowner_id) => {
    // Handle vendor rejection
    fetch("http://localhost:8080/"+rowner_id+"/reject")
      .then(response => {
        if (response.ok) {
          // Handle success
          console.log('Vendor rejected successfully!');
          window.location.reload();
          // Optionally update the state or perform any other actions
        } else {
          // Handle error
          console.error('Error rejecting vendor:', response.statusText);
        }
      })
      .catch(error => console.error('Error rejecting vendor:', error));
  };


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
            <th>Vehicle License No</th>
            <th>Aadhar Card number</th>
            <th>Status</th>
            <th>Change Status</th>
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
              <td>{ro.photo_id_number}</td>
              <td>{ro.vehicle_License_No}</td> 
              {/* <td> {String(vendor.status_approve)}</td> */}
              <td id='apr'>{ro.status_approve ? 'Approve' : 'Reject'}</td>
              <td id='st'>
                <button onClick={() => ro.status_approve ? handleReject(ro.loginID) : handleApprove(ro.loginID)}>Change</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {JSON.stringify(owners)}

   </div>
  );
}

export default DboyDetails;