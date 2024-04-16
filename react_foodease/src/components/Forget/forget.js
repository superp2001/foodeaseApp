import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useReducer } from 'react';
import { Link, useNavigate } from "react-router-dom";



  

function Login() {


  const navigate = useNavigate();

  const init = {
      usern: {value:"",valid: false, touched: false, error:""},
      passw: {value:"",valid: false, touched: false, error:""},
      formValid: false
  }

  const reducer = (state,action) => {
      switch(action.type)
      {
          case 'update':
              const {key,value,touched,valid,error,formValid} = action.data;
              return {...state,[key]:{value,touched,valid,error},formValid}
          case 'reset':
              return init; 
          default:
              
                     
      }
  }

  const[puser,dispatch] = useReducer(reducer,init)


  const validateData = (key,val) => {
      let valid = true;
      let error = ""
      switch(key)
      {
          case 'usern':
             var pattern1 = /^[\w._#-]{4,20}@[\w-]{5,15}\.[a-z]{2,3}$/ 
             if(!pattern1.test(val))
             {
                valid = false;
                error = "invalid email id or username"
             }
             break;

          case 'passw': 
              var pattern2 = /[\w\d@]{3,20}$/ 
             if(!pattern2.test(val))
             {
                valid = false;
                error = "invalid password"
             }
             break;
          
          
          case 'conpassw': 
              var pattern2 = /[\w\d@]{3,20}$/ 
             if(!pattern2.test(val))
             {
                valid = false;
                error = "invalid password"
             }
             break;
             default:

      }
      return { valid: valid, error: error}
  }

  
  const handleChange = (key,value) => {
      //1. call validateData function
      const {valid, error} = validateData(key,value);

      //2. check the validity status of the form
      let formValid = true;
      for(let k in puser)
      {
          //console.log(emp[k].valid)
          if(puser[k].valid === false)
          {
              formValid = false;
              break;
          }
      }
      console.log(formValid);

      //3. call to dispatch - updating the state
      dispatch({type: "update",data:{key,value,touched:true,valid,error,formValid}})
  }

  const submitData = (e) =>{
      e.preventDefault();
      //server side API
  }


  const InsertData = (e) => {

      e.preventDefault();
      const reOption = {
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify({
              email:puser.usern.value,
              password:puser.passw.value,
              conpassword:puser.passw.value
              
          })
      }
      
      fetch('http://localhost:8080/checkLogin', reOption)
      .then((response) => {
        if (response.ok) {
          // Successful login
          alert('Login successful!');
  
          // Redirect or perform other actions on successful login
          navigate("/customer-home");
        } else {
          // Login failed
          alert('Login failed. Please enter valid credentials and try again.');
        }
      })  

  }


  return (
    <div className="container">

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body bg-warning">
              <h2 className="text-center mb-4">Forget</h2>

              <div className="form-group">
                <input type='text' className="form-control" placeholder='User Name' id="usern" name="usern" autoComplete="off"
                        value={puser.usern.value}
                        onChange={(e)=>{handleChange("usern",e.target.value)}} 
                        onBlur={(e)=>{handleChange("usern",e.target.value)}}
                        />
                      <br/>
                      <div style={{ display: puser.usern.touched && !puser.usern.valid  ?"block":"none",color: 'red' }}>
                      { puser.usern.error}
                      </div>
              </div>

              <br/>

              <div className="form-group">
                <input type='password' className="form-control" placeholder='Password' id="passw" name="passw" autoComplete="off" 
                    value={puser.passw.value}
                    onChange={(e)=>{handleChange("passw",e.target.value)}} 
                    onBlur={(e)=>{handleChange("passw",e.target.value)}}
                     />

                    <br/>

                    
              <br/>

<div className="form-group">
  <input type='password' className="form-control" placeholder='Conform Password' id="conpass" name="conpass" autoComplete="off" 
      value={puser.passw.value}
      onChange={(e)=>{handleChange("conpass",e.target.value)}} 
      onBlur={(e)=>{handleChange("conpass",e.target.value)}}
       />

      <br/>

                    <div style={{ display: puser.passw.touched && !puser.passw.valid  ?"block":"none",color: 'red'}}>
                    { puser.passw.error}
                    </div>
                
              </div>
              <br/>
              <br/>
              <div className="text-center">
                <button type='submit' className="btn btn-primary btn-block btn btn-dark" disabled={!puser.formValid} onClick={(e)=>{InsertData(e)}}>Submit</button>
              </div>
              
              <div className="mt-3">
          <p className="mb-0">
            New Customer? <Link to="/user/register">Register here</Link>
          </p>
          <p className="mb-0">
             Restaurant <Link to="/restaurant/register">Register Restaurant</Link>
          </p>
          
          <p className="mb-0">
             Delivery <Link to="/delivery/register">Register Delivery</Link>
          </p>

          
          <p className="mb-0">
             Forget Password? <Link to="/forget">Forget Password</Link>
          </p>
        </div>


            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
}

export default Login;