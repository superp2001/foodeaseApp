import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer,useState,useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function Restaurant_Register() {
 
  const navigate = useNavigate();
  const location = useLocation();
  const [allCities, setAllCities] = useState([]);
  const [allAreas, setAllAreas] = useState([]);
  const [allState, setAllState] = useState([]);
  const [sstate, setStid] = useState(0);
  // const [selectedStateId, setSelectedStateId] = useState(""); // State to hold the selected state ID


  const init = {
    rname: { value: "", valid: false, touched: false, error: "" },
    rfssai: { value: "", valid: false, touched: false, error: "" },
    rgst: { value: "", valid: false, touched: false, error: "" },
    rpan: { value: "", valid: false, touched: false, error: "" },
    remail: { value: "", valid: false, touched: false, error: "" },
    phno: { value: "", valid: false, touched: false, error: "" },
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
        case 'remail':
           var pattern1 = /^[\w._#-]{4,20}@[\w-]{5,15}\.[a-z]{2,3}$/ 
           if(!pattern1.test(val))
           {
              valid = false;
              error = "Invalid email id"
           }
           break;

        case 'rfssai': 
            var pattern2 =/^\d{14}$/
           if(!pattern2.test(val))
           {
              valid = false;
              error = "Enter valid licence number eg. 1 52 35 689 65468"
           }
           break;

        case 'rname':
           var pattern3 = /^[A-Za-z]{2,30}$/ 
           if(!pattern3.test(val))
           {
              valid = false;
              error = "Enter valid restaurant name"
           }
           break;

           case 'rgst':
            var pattern4 = /^[0-9]{2}$/;  
            if (!pattern4.test(val)) {
                valid = false;
                error = "Enter a valid GST number e.g., 22AAAAA0000A1Z5";
            }
            break;
        

            case 'rpan':
            var pattern4 =/^[a-zA-Z0-9]{10}$/  
            if(!pattern4.test(val))
            {
               valid = false;
               error = "Enter valid pan number eg. ABC1234DAB"
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
        restaurent_name: puser.rname.value,
        fssai_licence_no: puser.rfssai.value,
        gstNo: puser.rgst.value,
        pan_no: puser.rpan.value,
        email: puser.remail.value,
        phone: puser.phno.value,
        area_id: puser.rarea.value,
        rowner_id: localStorage.getItem("loginID")
      })
    };
  
    fetch('http://localhost:8080/saveRestaurant', reOption)
      .then((response) => {
        if (response.ok) {
          // Successful registration
          alert('Registration successful!');
          navigate("/login"); // Redirect to login page
        } else {
          // Registration failed
          alert('Registration failed. Please try again.');
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


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body bg-warning">
              <h2 className="text-center mb-4">Restaurant Registration</h2>

              <div className="form-group">
                <input type="text" className="form-control" placeholder="Restaurant Name" autoComplete="off" name="rname" value={puser.rname.value}
                  onChange={(e) => { handleChange("rname", e.target.value) }}
                  onBlur={(e) => { handleChange("rname", e.target.value) }}
                />
                <br />
                <div style={{ display: puser.rname.touched && !puser.rname.valid  ?"block":"none",color: 'red' }}>
                    { puser.rname.error}
                    </div>
              </div>

              <br />

              <div className="form-group">
                <input type="text" className="form-control" placeholder="Phone Number" autoComplete="off" name="phno" value={puser.phno.value}
                  onChange={(e) => { handleChange("phno", e.target.value) }}
                  onBlur={(e) => { handleChange("phno", e.target.value) }}
                />
                <br />
                <div style={{ display: puser.phno.touched && !puser.phno.valid  ?"block":"none",color: 'red' }}>
                    { puser.phno.error}
                    </div>
          
               
              </div>

              <br />

              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" autoComplete="off" name="remail" value={puser.remail.value}
                  onChange={(e) => { handleChange("remail", e.target.value) }}
                  onBlur={(e) => { handleChange("remail", e.target.value) }}
                />
                <br />
                <div style={{ display: puser.remail.touched && !puser.remail.valid  ?"block":"none",color: 'red' }}>
                    { puser.remail.error}
                    </div>
               
              </div>

              <br />

              <div className="form-group">
                <input type="text" className="form-control" placeholder="FSSAI Licence Number" autoComplete="off" name="rfssai" value={puser.rfssai.value}
                  onChange={(e) => { handleChange("rfssai", e.target.value) }}
                  onBlur={(e) => { handleChange("rfssai", e.target.value) }}
                />
                <br />
                <div style={{ display: puser.rfssai.touched && !puser.rfssai.valid  ?"block":"none",color: 'red' }}>
                    { puser.rfssai.error}
                    </div>
               
              </div>

              <br />

              <div className="form-group">
                <input type="text" className="form-control" placeholder="GST Number" autoComplete="off" name="rgst" value={puser.rgst.value}
                  onChange={(e) => { handleChange("rgst", e.target.value) }}
                  onBlur={(e) => { handleChange("rgst", e.target.value) }}
                />
                <br />
                <div style={{ display: puser.rgst.touched && !puser.rgst.valid  ?"block":"none",color: 'red' }}>
                    { puser.rgst.error}
                    </div>     
              </div>

              <br />

              <div className="form-group">
                <input type="text"  className="form-control"  placeholder="PAN Number"  autoComplete="off"  name="rpan" value={puser.rpan.value}
                  onChange={(e) => { handleChange("rpan", e.target.value) }}
                  onBlur={(e) => { handleChange("rpan", e.target.value) }}
                />
                <br />
                <div style={{ display: puser.rpan.touched && !puser.rpan.valid  ?"block":"none",color: 'red' }}>
                    { puser.rpan.error}
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
    className="form-control"
    value={puser.rarea.value}
    onChange={(e) => handleChange("rarea", e.target.value)}
    onBlur={(e) => handleChange("rarea", e.target.value)}
  >
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
  );
}

export default Restaurant_Register;