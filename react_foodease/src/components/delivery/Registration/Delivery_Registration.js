import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useReducer } from 'react';
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function DeliveryRegistration() {

  const navigate = useNavigate();

    const location = useLocation();
    console.log(location)


    const init = {
        dname: {value:"",valid: false, touched: false, error:""},
        lname: {value:"",valid: false, touched: false, error:""}, 
        demail: {value:"",valid: false, touched: false, error:""},
        phno: {value:"",valid: false, touched: false, error:""},
        uname: {value:"",valid: false, touched: false, error:""},
        passw: {value:"",valid: false, touched: false, error:""},
        daddress: {value:"",valid: false, touched: false, error:""},
        vlno: {value:"",valid: false, touched: false, error:""},
        pino: {value:"",valid: false, touched: false, error:""},
        formValid: false
    }

    const reducer = (state,action) => {
      switch(action.type)
      {
          case 'update':
              //object destructuring
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
        case 'demail':
           var pattern1 = /^[\w._#-]{4,20}@[\w-]{5,15}\.[a-z]{2,3}$/ 
           if(!pattern1.test(val))
           {
              valid = false;
              error = "invalid email id"
           }
           break;

        case 'passw': 
            var pattern2 = /[\w\d@]{3,20}$/ 
           if(!pattern2.test(val))
           {
              valid = false;
              error = "enter long password"
           }
           break;

        case 'dname':
           var pattern3 = /^[A-Za-z\s]{2,30}$/ 
           if(!pattern3.test(val))
           {
              valid = false;
              error = "enter your full name and only letters allow"
           }
           break;
           
        case 'lname':
           var pattern3 = /^[A-Za-z]{2,30}$/ 
           if(!pattern3.test(val))
           {
              valid = false;
              error = "enter valid last name and only letters allow"
           }
           break;

        case 'uname':
            var pattern4 = /^[A-Za-z0-9_@]{3,20}$/ 
            if(!pattern4.test(val))
            {
               valid = false;
               error = "only letters numbers @ and _ allow"
            }
            break;
        
        case 'phno':
                var pattern5 = /^\d{10}$/
                if(!pattern5.test(val))
                {
                   valid = false;
                   error = "required 10 digit number"
                }
                break;
        case 'daddress':
                var pattern6 = /^[\s,A-Za-z0-9_@]{3,60}$/;
                if(!pattern6.test(val))
                {
                   valid = false;
                   error = "Please enter address"
                }
                break;
        case 'vlno':
                var pattern6 = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
                if(!pattern6.test(val))
                {
                   valid = false;
                   error = "Please enter valid vehicle no"
                }
                break;
        case 'pino':
                var pattern6 = /^[A-Za-z0-9]{10}$/;
                if(!pattern6.test(val))
                {
                   valid = false;
                   error = "Please enter valid photo id no"
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
            fname :puser.dname.value,
            lname :puser.lname.value,
            phone :puser.phno.value,
            address :puser.daddress.value,
            vehicle_License_No :puser.vlno.value,
            photo_id_number :puser.pino.value,
            username :puser.uname.value,
            email:puser.demail.value,
            password :puser.passw.value,
        })
    }

    fetch('http://localhost:8080/regDeliveryBoy', reOption)
    .then((response) => {
      if (response.ok) {
        // Successful login
        alert('Registration successful!');

        // Redirect or perform other actions on successful login
        navigate("/login");
      } else {
        // Login failed
        alert('Registration Fail!! Please Try Again');
      }
    })
    
  }



  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body bg-warning">
              <h2 className="text-center mb-4">Registration</h2>
              <div className="form-group">
                <input type='text' className="form-control" placeholder='First Name' id="fullName" autoComplete="off" name="dname" 
                    value={puser.dname.value}
                    onChange={(e)=>{handleChange("dname",e.target.value)}} 
                    onBlur={(e)=>{handleChange("dname",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: puser.dname.touched && !puser.dname.valid  ?"block":"none",color: 'red' }}>
                    { puser.dname.error}
                    </div>
              </div>

              <br/>

              <div className="form-group">
                <input type='text' className="form-control" placeholder='Last Name' id="lastName" autoComplete="off" name="lname" 
                    value={puser.lname.value}
                    onChange={(e)=>{handleChange("lname",e.target.value)}} 
                    onBlur={(e)=>{handleChange("lname",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: puser.lname.touched && !puser.lname.valid  ?"block":"none",color: 'red' }}>
                    { puser.lname.error}
                    </div>
              </div>

              <br/>

              <div className="form-group">
                <input type='email' className="form-control" placeholder='Email' id="email" autoComplete="off" name="demail" 
                    value={puser.demail.value}
                    onChange={(e)=>{handleChange("demail",e.target.value)}} 
                    onBlur={(e)=>{handleChange("demail",e.target.value)}}
                     />

                    <br/>

                    <div style={{ display: puser.demail.touched && !puser.demail.valid  ?"block":"none",color: 'red' }}>
                    { puser.demail.error}
                    </div>
              </div>

              <br/>

              <div className="form-group">
                <input type='tel' className="form-control" placeholder='Phone Number' id="phone" autoComplete="off" name="phno" 
                    value={puser.phno.value}
                    onChange={(e)=>{handleChange("phno",e.target.value)}} 
                    onBlur={(e)=>{handleChange("phno",e.target.value)}}
                    />
                    
                    <br/>

                    <div style={{ display: puser.phno.touched && !puser.phno.valid  ?"block":"none",color: 'red' }}>
                    {puser.phno.error}
                    </div>
              </div>

              <br/>

              <div className="form-group">
                <input type='text' className="form-control" placeholder='User Name' id="userName" autoComplete="off" name="uname" 
                    value={puser.uname.value}
                    onChange={(e)=>{handleChange("uname",e.target.value)}} 
                    onBlur={(e)=>{handleChange("uname",e.target.value)}}
                     />

                    <br/>

                    <div style={{ display: puser.uname.touched && !puser.uname.valid  ?"block":"none",color: 'red' }}>
                    {puser.uname.error}
                    </div>
              </div>

              <br/>

              <div className="form-group">
                <input type='password' className="form-control" placeholder='Password' id="password" autoComplete="off" name="passw" 
                    value={puser.passw.value}
                    onChange={(e)=>{handleChange("passw",e.target.value)}} 
                    onBlur={(e)=>{handleChange("passw",e.target.value)}} 
                    />
                    <br/>
                    <div style={{ display: puser.passw.touched && !puser.passw.valid  ?"block":"none",color: 'red'}}>
                    { puser.passw.error}
                    </div>
              </div>

              <br/>

              <div className="form-group">
              <input type='text' className="form-control" placeholder='Address' id="address" autoComplete="off" name="daddress" 
                value={puser.daddress.value}
                onChange={(e)=>{handleChange("daddress",e.target.value)}} 
                 onBlur={(e)=>{handleChange("daddress",e.target.value)}}
              />
                    <br/>
                    <div style={{ display: puser.daddress.touched && !puser.daddress.valid  ?"block":"none",color: 'red'}}>
                    { puser.daddress.error}
                    </div>
              </div>

              <br/>

              <div className="form-group">
                <input type='text' className="form-control" placeholder='vehicle_License_No ' id="vlno" autoComplete="off" name="vlno" 
                value={puser.vlno.value}
                onChange={(e)=>{handleChange("vlno",e.target.value)}} 
                 onBlur={(e)=>{handleChange("vlno",e.target.value)}}
              />
                    <br/>
                    <div style={{ display: puser.vlno.touched && !puser.vlno.valid  ?"block":"none",color: 'red'}}>
                    { puser.vlno.error}
                    </div>
              </div>

              <br/>

              <div className="form-group">
                <input type='text' className="form-control" placeholder='photo_id_number' id="pino" autoComplete="off" name="pino" 
                value={puser.pino.value}
                onChange={(e)=>{handleChange("pino",e.target.value)}} 
                 onBlur={(e)=>{handleChange("pino",e.target.value)}}
              />
                    <br/>
                    <div style={{ display: puser.pino.touched && !puser.pino.valid  ?"block":"none",color: 'red'}}>
                    { puser.pino.error}
                    </div>
              </div>

              <br/>
              <br/>
              
              <div className="text-center">
              <button type='submit' className="btn btn-primary btn-block btn btn-dark" disabled={!puser.formValid} onClick={(e)=>InsertData(e)}>Submit</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryRegistration;