import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar/navbar';

function DeliveryOrder() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from the API
        fetch(`http://localhost:8080/viewDboyOrder/${localStorage.getItem("loginID")}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the fetched data to the console
                setOrders(data); // Set the fetched data to the state
            })
            .catch(error => console.error('Error fetching orders', error));
    }, []);


    const handlePickup = (oid) => {
        fetch(`http://localhost:8080/${oid}/outDeliverOrder`)
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

    const handleDelivered = (oid) => {
        fetch(`http://localhost:8080/${oid}/deliveredOrder`)
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
            <div className='row'>
                <Navbar />
            </div>

            <div>
                <div className="container">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Order ID</th>
                                <th>Delivery Address</th>
                                <th>Restaurant Name</th>
                                <th>Restaurant Address</th>
                                <th>Order Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.orderID}>
                                    <td>{order.orderID}</td>
                                    <td>{order.delivery_addresses_id.address}</td>
                                    <td>{order.orderItems[0].restaurant_menu_id.restaurant_id.restaurantName}</td>
                                    <td>{order.orderItems[0].restaurant_menu_id.restaurant_id.area_id.area_name}</td>
                                    <td>{order.order_status.statusName}</td>
                                    <td>
                                        {order.order_status.statusName === "READY" && 
                                            <button className="btn btn-primary" onClick={() => handlePickup(order.orderID)}>Pickup</button>
                                        }
                                        {order.order_status.statusName === "OUT_FOR_DELIVERY" && 
                                            <button className="btn btn-success" onClick={() => handleDelivered(order.orderID)}>Delivered</button>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DeliveryOrder;

// import React, { useEffect, useState } from 'react';
// import Navbar from '../NavBar/navbar';

// function DeliveryOrder() {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         // Fetch orders from the API
//         fetch(`http://localhost:8080/viewDboyOrder/${localStorage.getItem("loginID")}`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data); // Log the fetched data to the console
//                 setOrders(data); // Set the fetched data to the state
//             })
//             .catch(error => console.error('Error fetching orders', error));
//     }, []);


//     const handlePickup = (oid) => {

//         fetch("http://localhost:8080/"+oid+"/outDeliverOrder")
//         .then(response => {
//           if (response.ok) {
//             // Handle success
//             console.log('change successfully!');
//             window.location.reload();
//             // Optionally update the state or perform any other actions
//           } else {
//             // Handle error
//             console.error('Error in change:', response.statusText);
//           }
//         })
//         .catch(error => console.error('Error in change:', error));
        
//       };
      
    
//       const handleDeliverd = (oid) => {
  
//         fetch("http://localhost:8080/"+oid+"/deliverdOrder")
//         .then(response => {
//           if (response.ok) {
//             // Handle success
//             console.log('change successfully!');
//             window.location.reload();
//             // Optionally update the state or perform any other actions
//           } else {
//             // Handle error
//             console.error('Error in change:', response.statusText);
//           }
//         })
//         .catch(error => console.error('Error in change:', error));
       
//       };

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
//                                 <th>Order ID</th>
//                                 <th>Delivery Address</th>
//                                 <th>Restaurant Name</th>
//                                 <th>Restaurant Address</th>
//                                 <th>Order Status</th>
//                                 <th>Button</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {orders.map(order => (
//                                 <tr key={order.orderID}>
//                                     <td>{order.orderID}</td>
//                                     <td>{order.delivery_addresses_id.address}</td>
//                                     <td>{order.orderItems[0].restaurant_menu_id.restaurant_id.restaurantName}</td>
//                                     <td>{order.orderItems[0].restaurant_menu_id.restaurant_id.area_id.area_name}</td>
//                                     <td>{order.order_status.statusName}</td>
//                                     <td>{order.order_status.statusName === "READY" && <button onClick={() => handlePickup(order.orderID)}>Pickup</button>}</td>
//                                     <td>{order.order_status.statusName === "OUT_FOR_DELIVERY" && <button onClick={() => handleDeliverd(order.orderID)}>DELIVERED</button>}</td>
                                    
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default DeliveryOrder;
