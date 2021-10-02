import React, { useState } from 'react';

const App = () => {
  const [fullName,setFullName]=useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
  });

  
  
  
  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
  

  const { value,name } = event.target;
   
  setFullName((preValue) => {
    if (name==="fname") {
      return{
        fname:value,
        lname:preValue.lname,
        email:preValue.email,
        phone:preValue.phone,
      };
    } else if (name==="lname"){
      return{
        fname:preValue.fname,
        lname:value,
        email:preValue.email,
        phone:preValue.phone,
      };
    }else if (name==="email"){
      return{
        fname:preValue.fname,
        lname:preValue.lname,
        email:value,
        phone:preValue.phone,
        
      };
  }  else if (name==="phone"){
    return{
      fname:preValue.fname,
      lname:preValue.lname,
      email:preValue.email,
      phone:value,
    };
  }
});
};

  const onSubmits = (event) => {
  event.preventDefault();
  alert("form submited");
  };
  

  return (
   <>
      <div className="main_div">
        <form onSubmits={onSubmits}>
          <div>
    
            <h1> Hello Mr./Miss {fullName.fname} {fullName.lname} </h1>
               <p>{fullName.email}</p>
               <p>{fullName.phone}</p>
               
               <br/>
               <label>
               <p> First Name:-</p>
               <input 
                 type="text"
                placeholder="Enter Your First Name" 
                name="fname"
                onChange={inputEvent}
                value={fullName.fname}

                />
                </label>
                  
             <br />

                <label>
                 <p> Last Name:-</p>
                <input 
                  type="text"
                  placeholder="Enter Your Last Name" 
                  name="lname"
                  onChange={inputEvent}
                  value={fullName.lname}

                  />
                   </label>
                     <br/>
                   <label>
                     <p> Email:-</p>
                        
                    <input 
                    type="email"
                     placeholder="Enter Your Email" 
                     name="email"
                     onChange={inputEvent}
                     value={fullName.email}
                     autoComplete="off"
                      />
                      </label>
                      <br/>

                      <label>
                     <p> Mob Number:-</p>
                    <input 
                     type="number"
                     placeholder="Enter Your Number" 
                     name="phone"
                     onChange={inputEvent}
                     value={fullName.phone}
                      />
                      </label>
                      <br/>
      
                       <button type="submit">  Submit </button>

                </div>
             </form>
           </div>
    

          </>

    );
};


  

export default App;