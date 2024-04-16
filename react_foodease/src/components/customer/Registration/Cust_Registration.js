import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer } from 'react';
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function CustomerRegistration() {

  const navigate = useNavigate();

    const location = useLocation();
    console.log(location)


    const init = {
        cname: {value:"",valid: false, touched: false, error:""},
        lname: {value:"",valid: false, touched: false, error:""}, 
        cemail: {value:"",valid: false, touched: false, error:""},
        phno: {value:"",valid: false, touched: false, error:""},
        uname: {value:"",valid: false, touched: false, error:""},
        passw: {value:"",valid: false, touched: false, error:""},
        caddress: {value:"",valid: false, touched: false, error:""},
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
        case 'cemail':
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

        case 'cname':
           var pattern3 = /^[A-Za-z]{2,30}$/ 
           if(!pattern3.test(val))
           {
              valid = false;
              error = "enter valid last name and only letters allow"
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
        case 'caddress':
                var pattern6 = /^[\s,A-Za-z0-9_@]{3,60}$/;
                if(!pattern6.test(val))
                {
                   valid = false;
                   error = "Please enter address"
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
          fname :puser.cname.value,
          lname :puser.lname.value,
          address :puser.caddress.value,
          phone :puser.phno.value,
          username :puser.uname.value,
          email:puser.cemail.value,
          password:puser.passw.value,
        })
    }
    
    fetch('http://localhost:8080/regCustomer', reOption)
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
                <input type='text' className="form-control" placeholder='First Name' id="firstName" autoComplete="off" name="cname" 
                    value={puser.cname.value}
                    onChange={(e)=>{handleChange("cname",e.target.value)}} 
                    onBlur={(e)=>{handleChange("cname",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: puser.cname.touched && !puser.cname.valid  ?"block":"none",color: 'red' }}>
                    { puser.cname.error}
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
                    { puser.cname.error}
                    </div>
              </div>

              <br/>

              <div className="form-group">
                <input type='email' className="form-control" placeholder='Email' id="email" autoComplete="off" name="cemail" 
                    value={puser.cemail.value}
                    onChange={(e)=>{handleChange("cemail",e.target.value)}} 
                    onBlur={(e)=>{handleChange("cemail",e.target.value)}}
                     />

                    <br/>

                    <div style={{ display: puser.cemail.touched && !puser.cemail.valid  ?"block":"none",color: 'red' }}>
                    { puser.cemail.error}
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
              <input type='text' className="form-control" placeholder='Address' id="address" autoComplete="off" name="caddress" 
                value={puser.caddress.value}
                onChange={(e)=>{handleChange("caddress",e.target.value)}} 
                 onBlur={(e)=>{handleChange("caddress",e.target.value)}}
              />
                    <br/>
                    <div style={{ display: puser.caddress.touched && !puser.caddress.valid  ?"block":"none",color: 'red'}}>
                    { puser.caddress.error}
                    </div>
              </div>

              
              <br/>
              <br/>
              <div className="text-center">
              <button type='submit' className="btn btn-primary btn-block btn btn-dark" disabled={!puser.formValid} onClick={(e)=>InsertData(e)}>Submit</button>
                <br/>
                <div>
              <a href='/'class="remove-underscore" className='text-danger remove-underscore'>Already Member?</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerRegistration;
