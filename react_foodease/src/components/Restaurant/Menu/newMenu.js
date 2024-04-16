import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer, useEffect, useState } from 'react';
import Navbar from '../NavBar/navbar';
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NewMenuCreation() {

    const navigate = useNavigate();
    const location = useLocation();
    const [allCat, setAllCategory] = useState([]);
    const [sstate, setStid] = useState(0);
    const [description, setDescription] = useState(""); // State for description field

    // const [selectedStateId, setSelectedStateId] = useState(""); // State to hold the selected state ID
  
  
    const init = {
      rcat: { value: "", valid: false, touched: false, error: "" },
      rftype: { value: "", valid: false, touched: false, error: "" },
      rprice: { value: "", valid: false, touched: false, error: "" },
      name: { value: "", valid: false, touched: false, error: "" },
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
        case 'name':
            var pattern3 = /^[a-zA-Z0-9\s]{2,50}$/ 
            if(!pattern3.test(val))
            {
               valid = false;
               error = "Enter valid name"
            }
            break;
          case 'rprice':
             var pattern3 = /^[\d]{2,10}$/ 
             if(!pattern3.test(val))
             {
                valid = false;
                error = "Enter valid price"
             }
             break;

             case "rcat":
             case "rftype":
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
      fetch("http://localhost:8080/getAllCategory")
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("Failed to fetch states");
          }
          return resp.json();
        })
        .then((data) => {
          console.log("Category data:", data);
          setAllCategory(data);
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
      if (key === 'rcat') {
        // Set the selected state value to sstate
        setStid(value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value); // Update description state on change
    };
  

  
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
          name :puser.name.value,
          price: puser.rprice.value,
          description: description,
          category_id:puser.rcat.value,
          food_type: puser.rftype.value,
          restaurant_id: localStorage.getItem("loginID")
        })
      };
    
      fetch('http://localhost:8080/saveNewMenu', reOption)
        .then((response) => {
          if (response.ok) {
            // Successful registration
            alert('Registration successful!');
            navigate("/addMenu"); // Redirect to login page
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
    

  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value); // Update description state on change
};

    
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body bg-warning">
                <h2 className="text-center mb-4">Menu Creation</h2>
                
                <div className="form-group">
                  <select className="form-control" 
                    onChange={(e) => {
                      handleChange("rcat", e.target.value);
                   }}
                  >
                   <option value="">Select Category</option> {/* Add a default option */}
                      {allCat.map((cat) => (
                    <option
                   key={cat.category_id} 
                   value={cat.category_id}
                 >
                  {cat.category_name}
                </option>
                 ))}
              </select> 
              </div>

                  <br/>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Dish Name"
                      autoComplete="off"
                      name="name"
                      value={puser.name.value}
                      onChange={(e) => { handleChange("name", e.target.value) }}
                      onBlur={(e) => { handleChange("name", e.target.value) }}
                    />
                  </div>
                  <br/>
                  <div style={{ display: puser.name.touched && !puser.name.valid  ?"block":"none",color: 'red' }}>
                    { puser.name.error}
                  </div>
        
                 <br />

                  <div className="form-group">
                <input type="number" className="form-control" placeholder="Price" autoComplete="off" name="rprice"  value={puser.rprice.value}
                  onChange={(e) => { handleChange("rprice", e.target.value) }}  onBlur={(e) => { handleChange("rprice", e.target.value) }}
                />
                <br />
                <div style={{ display: puser.rprice.touched && !puser.rprice.valid  ?"block":"none",color: 'red' }}>
                    { puser.rprice.error}
                    </div>
              </div>

              <br />

              
              <div className="mb-3">
              <label>  
             <input placeholder='Description' className="form-control" type="text" value={description} onChange={handleDescriptionChange}  />
             </label>
             </div>

              <br />


              <div className="form-group">
                  <select className="form-control" 
                    onChange={(e) => {
                      handleChange("rftype", e.target.value);
                   }}
                  >
                   <option value="">Select Food Type</option> {/* Add a default option */}
                    <option key="veg"  value="Veg"> Veg </option>
                    <option key="Nonveg"  value="Nonveg"> Nonveg </option>
              </select> 
              </div>

                  <br/>

                  <br/>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block btn btn-dark" disabled={!puser.formValid} onClick={(e) => InsertData(e)}>Submit</button>
              </div>

              

                  
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMenuCreation;
