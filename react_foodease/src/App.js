import React from 'react';
import { BrowserRouter, Route,Routes  } from 'react-router-dom';
import Login from './components/Login/login_form';
import CustomerRegistration from './components/customer/Registration/Cust_Registration';
import CustomerHome from './components/customer/Home/customerhome';
import RestaurantHome from './components/Restaurant/Home/restauranthome'
import DeliveryHome from './components/delivery/Home/deliveryhome';
import AdminHome from './components/admin/Home/adminhome';
import RestaurantsRegistration from './components/Restaurant/Registration/Rest_Registration';
import DeliveryRegistration from './components/delivery/Registration/Delivery_Registration';
import Restaurant_Register from './components/Restaurant/Registration/Restaurent_Register';
import ForgetComponent from './components/Forget/forget';
import AddMenu from './components/Restaurant/Menu/addMenu';
import ViewMenu from './components/Restaurant/Menu/viewMenu';
import NewMenuCreation from './components/Restaurant/Menu/newMenu';
import ViewRestaurantMenu from './components/customer/Home/viewRestaurantMenu';
import ViewCart from './components/customer/Home/viewCart';
import Addaddress from './components/customer/Home/addDeliveryAddress';
import Viewaddress from './components/customer/Home/viewAddress';
import ViewRestaurant from './components/customer/Home/viewRestaurants';
import Chooseaddress from './components/customer/Home/chooseAddress';
import ConfirmOrder from './components/customer/Home/confirmOrder';
import ViewCustomerOrder from './components/customer/Home/viewOrder';
import ViewReceivedOrder from './components/admin/Home/viewReceivedOrders';
import DeliveryOrder from './components/delivery/Home/deliveryOrder';
import IncomeReport from './components/admin/Home/Report';
function App() {


  
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />

          <Route path='/home' element={<CustomerHome/>}/>
          <Route path='/homerestaurant' element={<RestaurantHome/>}/>
          <Route path='/homedelivery' element={<DeliveryHome/>}/>
          <Route path='/homeadmin' element={<AdminHome/>}/>
          <Route path='/incomeReport' element={<IncomeReport/>}/>

          

          <Route path='/user/register' element={<CustomerRegistration/>}/>
          <Route path='/viewSearchRMenu' element={<ViewRestaurantMenu/>}/>
          <Route path='/restaurants' element={<ViewRestaurant/>}/>
          <Route path='/chooseAddress' element={<Chooseaddress/>}/>
          <Route path='/confirmOrder' element={<ConfirmOrder/>}/>
          <Route path='/viewCustomerOrder' element={<ViewCustomerOrder/>}/>
          <Route path='/viewCart' element={<ViewCart/>}/>
          <Route path='/enterDeliveryAddress' element={<Addaddress/>}/>
          <Route path='/viewDeliveryAddress' element={<Viewaddress/>}/>

          <Route path='/viewReceivedOrder' element={<ViewReceivedOrder/>}/>


          <Route path='/deliveryOrder' element={<DeliveryOrder/>}/>

          
          

          <Route path='/restaurant/register' element={<RestaurantsRegistration/>}/>
          <Route path='/restaurant_Register' element={<Restaurant_Register/>} />
          <Route path='/addMenu' element={<AddMenu/>} />
          <Route path='/newAddMenu' element={<NewMenuCreation/>} />
          <Route path='/viewMenu' element={<ViewMenu/>} />
          

          <Route path='/delivery/register' element={<DeliveryRegistration/>}/>
          <Route path='/forget' element={<ForgetComponent/>}/>
       </Routes>
    </BrowserRouter>
    

  );
}

export default App;
