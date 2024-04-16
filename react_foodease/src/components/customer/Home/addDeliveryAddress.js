import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer,useState,useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";



function Addaddress()
{    
     
    const navigate = useNavigate();
  const location = useLocation();
  const [allCities, setAllCities] = useState([]);
  const [allAreas, setAllAreas] = useState([]);
  const [allState, setAllState] = useState([]);
  const [sstate, setStid] = useState(0);
  // const [selectedStateId, setSelectedStateId] = useState(""); // State to hold the selected state ID


  const init = {
    raddress: { value: "", valid: false, touched: false, error: "" },
    rarea: { value: "", valid: false, touched: false, error: "" },
    rcity: { value: "", valid: false, touched: false, error: "" },
    rstate: { value: "", valid: false, touched: false, error: "" },
    
    formValid: false
  };

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
          return state;
            
                   
    }
}

const[puser,dispatch] = useReducer(reducer,init)

  const validateData = (key,val) => {
    let valid = true;
    let error = ""
    switch(key)
    {
        case 'raddress':
           var pattern3 = /^[A-Za-z0-9\s]{2,100}$/ 
           if(!pattern3.test(val))
           {
              valid = false;
              error = "Enter valid address"
           }
           break;
           case "rstate":
           case "rcity":
           case "rarea":
             if (!val) {
              valid = false;
              error = "Please select an option";
           }
           break;
          
        default:

    }
    return { valid: valid, error: error}
  }

  useEffect(() => {
    fetch("http://localhost:8080/getallState")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch states");
        }
        return resp.json();
      })
      .then((data) => {
        console.log("States data:", data);
        setAllState(data);
      })
      .catch((error) => {
        console.error("Error fetching states:", error);
        // Handle the error, e.g., display an error message to the user
      });
  }, []);

  const handleChange = (key,value) => {
    //1. call validateData function
    const {valid, error} = validateData(key,value);
  
    // 2. check if the key is 'rstate' (state dropdown)
    if (key === 'rstate') {
      // Set the selected state value to sstate
      setStid(value);
  }

  if (key === 'rcity') {
    // Call getAllAreas with the selected city ID
    getAllAreas(value);
  }

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
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        address: puser.raddress.value,
        area_id: puser.rarea.value,
        user_id: localStorage.getItem("loginID")
      })
    };
  
    fetch('http://localhost:8080/saveDeliveryAddress', reOption)
      .then((response) => {
        if (response.ok) {
          // Successful registration
          alert('Address Save!');
          navigate("/home"); // Redirect to login page
        } else {
          // Registration failed
          alert('Address saved failed. Please try again.');
        }
      })
      .catch((error) => {
        // Log and handle any fetch errors
        console.error('Error fetching data:', error);
        alert('An error occurred while registering. Please try again later.');
      });
  }
  


const getAllCity = (stateId) => {
  fetch(`http://localhost:8080/getCityByStateId/${stateId}`)
    .then((resp) => resp.json())
    .then((data) => {
      setAllCities(data);
    })
    .catch((error) => console.error("Error fetching cities:", error));
};


const getAllAreas = (cityId) => {
  fetch(`http://localhost:8080/getAreaByCityId/${cityId}`)
    .then((resp) => resp.json())
    .then((data) => setAllAreas(data))
    .catch((error) => console.error("Error fetching areas:", error));
};

    return(
        <div>
              <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body bg-warning">
              <h2 className="text-center mb-4">Delivery Address</h2>

              <div className="form-group">
                <input type="text" className="form-control" placeholder="address" autoComplete="off" name="raddress" value={puser.raddress.value}
                  onChange={(e) => { handleChange("raddress", e.target.value) }}
                  onBlur={(e) => { handleChange("raddress", e.target.value) }}
                />
                <br />
                <div style={{ display: puser.raddress.touched && !puser.raddress.valid  ?"block":"none",color: 'red' }}>
                    { puser.raddress.error}
                    </div>
              </div>

              <br />


              <div className="form-group">
              <select className="form-control" 
              value={puser.rstate.value} 
              onChange={(e) => {
                handleChange("rstate", e.target.value);
                getAllCity(e.target.value);
              }}
              >

                <option value="">Select State</option> {/* Add a default option */}
                    {allState.map((state) => (
                <option
                   key={state.state_id} 
                   value={state.state_id}
                 >
                  {state.state_name}
                </option>
                 ))}
              </select> 
                <br />
                <div style={{ display: puser.rstate.touched && !puser.rstate.valid  ?"block":"none",color: 'red' }}>
                    { puser.rstate  .error}
                </div>
              </div>
              <br />
              

            <div className="form-group">
              <select className="form-control" value={puser.rcity.value} onChange={(e) => {
                handleChange("rcity", e.target.value);
                getAllAreas(e.target.value);
              }}>
                 <option value="">Select City</option>
                  {allCities.map((city) => (
                   <option key={city.city_id} value={city.city_id}>
                   {city.city_name}
                  </option>
                 ))}
                </select>
              <br />
            <div style={{ display: puser.rcity.touched && !puser.rcity.valid ? "block" : "none", color: 'red' }}>
                {puser.rcity.error}
            </div>
           </div>

              <br />

              <div className="form-group">
              <select
               className="form-control"  value={puser.rarea.value} onChange={(e) => handleChange("rarea", e.target.value)} onBlur={(e) => handleChange("rarea", e.target.value)} >
              <option value="">Select Area</option>
               {allAreas.map((area) => (
                <option key={area.area_id} value={area.area_id}>
                   {area.area_name}
                </option>
               ))}
              </select>
           <br />
              <div style={{ display: puser.rarea.touched && !puser.rarea.valid ? "block" : "none", color: 'red' }}>
                  {puser.rarea.error}
            </div>
           </div>
            
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block btn btn-dark" disabled={!puser.formValid} onClick={(e) => InsertData(e)}>Submit</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Addaddress;