import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/navbar';
import { Link, useNavigate } from "react-router-dom";

function ViewCart() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Fetch cart data from the API
        fetch(`http://localhost:8080/getCartByCustomerId/${localStorage.getItem("loginID")}`)
          .then(response => response.json())
          .then(data => {
            console.log(data); // Log the fetched data to the console
            setCart(data); // Set the fetched data to the state
            calculateTotal(data); // Calculate total price
          })
          .catch(error => console.error('Error fetching cart', error));
    }, []);

    // Function to calculate total price
    const calculateTotal = (cart) => {
        const totalPrice = cart.reduce((acc, item) => acc + (item.restaurant_menu_id.price * item.quantity), 0);
        setTotal(totalPrice);
    };

    const PlaceOrder = () => {
        navigate("/chooseAddress");
    };

    const viewSearchRMenu = () => {
        navigate("/viewSearchRMenu");
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <h1>Cart Detail</h1>
                {Array.isArray(cart) && cart.length === 0 ? (
                    <h3>Your cart is empty.</h3>
                ) : (
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Dish Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(cart) && cart.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.restaurant_menu_id.menu_id.name}</td> 
                                    <td>${item.restaurant_menu_id.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>   
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="table-info">
                                <th colSpan="2">Total Price</th>
                                <td>${total.toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table>
                )}
                {Array.isArray(cart) && cart.length === 0 && (
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={viewSearchRMenu}>Continue Add</button>
                    </div>
                )}
            </div>
            <br/><br/>
            {JSON.stringify(cart)}
        </div>
    );
}

export default ViewCart;

// import React, { useState, useEffect } from 'react';
// import Navbar from '../NavBar/navbar';
// import { Link, useNavigate } from "react-router-dom";

// function ViewCart() {
//     const navigate = useNavigate();
//     const [cart, setCart] = useState([]);
//     const [total, setTotal] = useState(0);

//     useEffect(() => {
//         // Fetch cart data from the API
//         fetch(`http://localhost:8080/getCartByCustomerId/${localStorage.getItem("loginID")}`)
//           .then(response => response.json())
//           .then(data => {
//             console.log(data); // Log the fetched data to the console
//             setCart(data); // Set the fetched data to the state
//             calculateTotal(data); // Calculate total price
//           })
//           .catch(error => console.error('Error fetching cart', error));
//     }, []);

//     // Function to calculate total price
//     const calculateTotal = (cart) => {
//         const totalPrice = cart.reduce((acc, item) => acc + (item.restaurant_menu_id.price * item.quantity), 0);
//         setTotal(totalPrice);
//     };

//     const PlaceOrder = () => {
//         navigate("/chooseAddress");
//     };

//     const viewSearchRMenu = () => {
//         navigate("/viewSearchRMenu");
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className="container mt-4">
//                 <h1>Cart Detail</h1>
//                 {Array.isArray(cart) && cart.length === 0 ? (
//                     <h3>Your cart is empty.</h3>
//                 ) : (
//                     <table className="table table-bordered table-striped">
//                         <thead>
//                             <tr>
//                                 <th scope="col">Dish Name</th>
//                                 <th scope="col">Price</th>
//                                 <th scope="col">Quantity</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {Array.isArray(cart) && cart.map((item, index) => (
//                                 <tr key={index}>
//                                     <td>{item.restaurant_menu_id.menu_id.name}</td> 
//                                     <td>${item.restaurant_menu_id.price.toFixed(2)}</td>
//                                     <td>{item.quantity}</td>   
//                                 </tr>
//                             ))}
//                         </tbody>
//                         <tfoot>
//                             <tr>
//                                 <th colSpan="2">Total Price</th>
//                                 <td>${total.toFixed(2)}</td>
//                             </tr>
//                         </tfoot>
//                     </table>
//                 )}
//                 {Array.isArray(cart) && cart.length === 0 && (
//                     <div className="text-center">
//                         <button className="btn btn-primary" onClick={viewSearchRMenu}>Continue Add</button>
//                     </div>
//                 )}
//             </div>
//             <br/><br/>
//             {JSON.stringify(cart)}
//         </div>
//     );
// }

// export default ViewCart;

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom'; // Import ReactDOM for createRoot
// import Navbar from '../NavBar/navbar';
// import { Link, useNavigate } from "react-router-dom";


// function ViewCart(){

//     const navigate = useNavigate();



//     const [cart, viewCart] = useState([]);

//     useEffect(() => {
//         // Fetch vendors from the API
//         fetch(`http://localhost:8080/getCartByCustomerId/${localStorage.getItem("loginID")}`)
//           .then(response => response.json())
//           .then(data => {
//             console.log(data); // Log the fetched data to the console
//             viewCart(data); // Set the fetched data to the state
//           })
//           .catch(error => console.error('Error fetching vendors', error));
//       }, []);

//       const total = cart.reduce((acc, ro) => {
//         return acc + (ro.restaurant_menu_id.price * ro.quantity);
//     }, 0);


//     const PlaceOrder = () => {
//         navigate("/chooseAddress");
        
//     };

//     const viewSearchRMenu = () => {
//         navigate("/viewSearchRMenu");
//       };

//     return(
//         <div>
//             <Navbar/>
     
//             <h1>Cart Detail</h1>

//             {cart.length === 0 ? (
//             <h3>Your cart is empty.</h3>
//         ) : (
//             <table className="table table-bordered table-striped table-hover">
//                 <thead>
//                     <tr>
//                         <th>Dish Name</th>
//                         <th>Price</th>
//                         <th>Quantity</th>      
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {cart.map((ro, index) => (
//                         <tr key={index}>
//                             <td>{ro.restaurant_menu_id.menu_id.name}</td> 
//                             <td>{ro.restaurant_menu_id.price * ro.quantity}</td>
//                             <td>{ro.quantity}</td>   
//                         </tr>
//                     ))}
//                 </tbody>
//                 <tr>
//                     <th colSpan="2">Total Price</th>
//                     <td>{total}</td>
//                 </tr>
//                 <tr>
//                     <th onClick={PlaceOrder}>Place Order</th>
//                 </tr>
//             </table>
//         )}
//         {cart.length === 0 && (
//             <div>
//                 <button onClick={viewSearchRMenu}>Continue Add</button>
                
//             </div>
//         )}
//         <br/><br/>
//         {JSON.stringify(cart)}


//         </div>
//     )
// }

// export default ViewCart;