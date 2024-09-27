import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

function UserSignup() {

    const [data,setData] = useState({
        email:"",
        password:""
    });

  const signUpUser = () => {

    createUserWithEmailAndPassword(auth,data.email,data.password)
    .then(() => alert("user Signup Sucessfully"));
  };
  return (
    <>
      <div className="container text-bg-dark mt-2 p-4">
      <h1 className='text-center'>SignUp</h1>

        <div className="col my-3">
          <label htmlFor="" className="my-2">User Email</label>
          <input
            type="email"
            required
            placeholder="Enter Email Here"
            className="form-control"
            value={data.email}
            onChange={(e) => setData({...data,email : e.target.value})}
          />
        </div>
        <div className="col my-3">
          <label htmlFor="" className="my-2">User Password</label>
          <input
            type="password"
            required
            placeholder="Enter password Here"
            className="form-control"
            value={data.password}
            onChange={(e) => setData({...data,password : e.target.value})}
          />
        </div>
        <div className="col">
          <button className="btn btn-warning" onClick={signUpUser}>
        
            SignUp
          </button>
        </div>
      </div>
    </>
  );
}

export default UserSignup;
