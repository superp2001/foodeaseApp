import ReactDOM from 'react-dom'; // Import ReactDOM for createRoot
import Navbar from '../NavBar/navbar';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';


function Chooseaddress()
{    
     
    const [address, viewAddress] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch vendors from the API
        fetch(`http://localhost:8080/getDeliveryAddressByUser/${localStorage.getItem("loginID")}`)
          .then(response => response.json())
          .then(data => {
            console.log(data); // Log the fetched data to the console
            viewAddress(data); // Set the fetched data to the state
          })
          .catch(error => console.error('Error fetching vendors', error));
      }, []);



      const handleAddAddress= (deliveryAddressId) => { 
        localStorage.setItem("daddress", deliveryAddressId);
        navigate('/confirmOrder'); // Navigate to '/confirmOrder' after setting the delivery address
    };
    
      
    return(
        <div>
             <Navbar/>
     
     <div>Select Delivery Address</div>

                <div className="row">
                    {address.map((ro, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{ro.address}</h5>
                                    <p className="card-text">Area: {ro.area_id.area_name}</p>
                                    <p className="card-text">Pincode: {ro.area_id.pincode}</p>
                                    <p className="card-text">City: {ro.area_id.city_id.city_name}</p>
                                    <button onClick={() => handleAddAddress(ro.delivery_addresses_id)}>Select</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {JSON.stringify(address)}
        </div>
    )
}

export default Chooseaddress;