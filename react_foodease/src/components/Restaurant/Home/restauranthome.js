import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar/navbar';

function RestaurantHome() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from the API
        fetch(`http://localhost:8080/viewRestaurantOrder/${localStorage.getItem("loginID")}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the fetched data to the console
                setOrders(data); // Set the fetched data to the state
            })
            .catch(error => console.error('Error fetching orders', error));
    }, []);


    const handlePlaced = (oid) => {
      fetch("http://localhost:8080/"+oid+"/prepared")
      .then(response => {
        if (response.ok) {
          // Handle success
          console.log('change successfully!');
          window.location.reload();
          // Optionally update the state or perform any other actions
        } else {
          // Handle error
          console.error('Error in change:', response.statusText);
        }
      })
      .catch(error => console.error('Error in change:', error));
    };
    
  
    const handleReady = (oid) => {
      fetch("http://localhost:8080/"+oid+"/readyOrder")
      .then(response => {
        if (response.ok) {
          // Handle success
          console.log('change successfully!');
          window.location.reload();
          // Optionally update the state or perform any other actions
        } else {
          // Handle error
          console.error('Error in change:', response.statusText);
        }
      })
      .catch(error => console.error('Error in change:', error));
    };
    

    return (
        <div className='container'>
            <Navbar />
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Order Id</th>
                            <th>Order Items</th>
                            <th>Total Price</th>
                            <th>Delivery Boy</th>
                            <th>Delivery Boy Phone Number</th>
                            <th>Status</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map(order => (
                                <tr key={order.orderID.orderID}>
                                    <td>{order.orderID.orderID}</td>
                                    <td>
                                        <ul className="list-group">
                                            {order.orderID.orderItems.map(item => (
                                                <li key={item.order_detailsID} className="list-group-item">
                                                    <div>{item.restaurant_menu_id.menu_id.name}</div>
                                                    <div>Price: {item.price}</div>
                                                    <div>Quantity: {item.quantity}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td>{order.orderID.total_price}</td>
                                    <td>{order.orderID.driver_id.fname} {order.orderID.driver_id.lname}</td>
                                    <td>{order.orderID.driver_id.phone}</td>
                                    <td>{order.orderID.order_status.statusName}</td>
                                    <td>
                                        {order.orderID.order_status.statusName === "PLACED" && <button className="btn btn-primary" onClick={() => handlePlaced(order.orderID.orderID)}>Preparing</button>}
                                        {order.orderID.order_status.statusName === "Preparing" && <button className="btn btn-success" onClick={() => handleReady(order.orderID.orderID)}>READY</button>}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center">No orders available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {JSON.stringify(orders)}
        </div>
    );
}

export default RestaurantHome;

// import React, { useEffect, useState } from 'react';
// import Navbar from '../NavBar/navbar';

// function RestaurantHome() {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         // Fetch orders from the API
//         fetch(`http://localhost:8080/viewRestaurantOrder/${localStorage.getItem("loginID")}`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data); // Log the fetched data to the console
//                 setOrders(data); // Set the fetched data to the state
//             })
//             .catch(error => console.error('Error fetching orders', error));
//     }, []);


//     const handlePlaced = (oid) => {

//       fetch("http://localhost:8080/"+oid+"/prepared")
//       .then(response => {
//         if (response.ok) {
//           // Handle success
//           console.log('change successfully!');
//           window.location.reload();
//           // Optionally update the state or perform any other actions
//         } else {
//           // Handle error
//           console.error('Error in change:', response.statusText);
//         }
//       })
//       .catch(error => console.error('Error in change:', error));
      
//     };
    
  
//     const handleReady = (oid) => {

//       fetch("http://localhost:8080/"+oid+"/readyOrder")
//       .then(response => {
//         if (response.ok) {
//           // Handle success
//           console.log('change successfully!');
//           window.location.reload();
//           // Optionally update the state or perform any other actions
//         } else {
//           // Handle error
//           console.error('Error in change:', response.statusText);
//         }
//       })
//       .catch(error => console.error('Error in change:', error));
     
//     };

//     return (
//         <div className='container'>
//             <div className='row'>
//                 <Navbar />
//             </div>

//             <div>
//                 <div className="container">
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>Order Id</th>
//                                 <th>Order Items</th>
//                                 <th>Total Price</th>
//                                 <th>Delivery Boy</th>
//                                 <th>Delivery Boy Phone Number</th>
//                                 <th>Status</th>
//                                 <th>Button</th>
                               
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {orders.map(order => (
//                                 <tr key={order.orderID.orderID}>
//                                   <td>{order.orderID.orderID}</td>
//                                   <td>
//                                         <table className="table">
//                                             <thead>
//                                                 <tr>
//                                                     <th>Dish Name</th>
//                                                     <th>Price</th>
//                                                     <th>Quantity</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {order.orderID.orderItems.map(item => (
//                                                     <tr key={item.order_detailsID}>
//                                                         <td>{item.restaurant_menu_id.menu_id.name}</td>
//                                                         <td>{item.price}</td>
//                                                         <td>{item.quantity}</td>
//                                                     </tr>
//                                                 ))}
//                                             </tbody>
//                                         </table>
//                                     </td>
//                                     <td>{order.orderID.total_price}</td>
//                                     <td>{order.orderID.driver_id.fname} {order.orderID.driver_id.lname}</td>
//                                     <td>{order.orderID.driver_id.phone}</td>
//                                     <td>{order.orderID.order_status.statusName}</td>
//                                     <td>
//                                          {order.orderID.order_status.statusName === "PLACED" && <button onClick={() => handlePlaced(order.orderID.orderID)}>Preparing</button>}
//                                          {order.orderID.order_status.statusName === "Preparing" && <button onClick={() => handleReady(order.orderID.orderID)}>READY</button>}
//                                     </td>

                                    
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             {JSON.stringify(orders)}
//         </div>
//     );
// }

// export default RestaurantHome;
