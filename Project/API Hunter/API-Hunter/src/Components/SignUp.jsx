import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {

  const [data, setData] = useState({ name: "", email: "", password: "" });
  // data: Ye ek state variable hai jo ek object hai, jisme user ka name, email, aur password store kiya hai.
  // setData: Yeh function hai jo data state ko update karne ke liye use kiya hai.
  // useState: Iska initial value ek object hai jisme sabhi fields empty rakhe hain, taaki jab user input kare tab inhe update kiya ja sake.

  const navigate = useNavigate();
  // navigate: Ye ek function hai jo router ke beech navigate karega

  function handleSubmit(e) {
    // handleSubmit: Ye function form ke submit hone par call hoga

    e.preventDefault();
    // e.preventDefault(): Yeh line default form submission ko rokegi or page reload nahi hoga.

    axios.post(`http://localhost:4040/api`, data)
    // axios.post(...): Ye line POST request send karti hai http://localhost:4040/api URL par,
    // aur data ko request body mein bhejti hai. Yeh data object user ke input values hai.

    .then((res) => {
      // .then((res) => {...}): Ye block tab chalega jab request successful hogi
      console.log(res.data);
      navigate("/login");
      // navigate("/login"): Yeh line user ko /login route par redirect kregi,
      // sign-up hone ke baad user login page par chala jayega.
    });
  }

  return (
    <div className="container mt-5 p-5 w-50 text-center"
      style={{
        backgroundImage: "linear-gradient(135deg, #e3f2fd 0%, #c3cfe2 100%)",
        borderRadius: "15px",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 3px 8px, rgba(0, 0, 0, 0.15) 0px 12px 20px",
      }}
    >
      <h1 className="text-center text-info mb-4">
        <b><i>Sign Up</i></b>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="form-label"><b>User Name</b></label>
          <input
            type="text"
            className="form-control shadow-sm"
            style={{ borderRadius: "10px" }}
            placeholder="Enter your name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            // onChange: Jab user input karega, setData function call hoga,
            //  jo input field ke value ko data object mein update kardega.

            // ...data : baaki fields (email, password) ko unchanged rakega,
            //  aur sirf jis field ko update krna hai, uski value change krega.
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="form-label"><b>Email Address</b></label>
          <input
            type="email"
            className="form-control shadow-sm"
            style={{ borderRadius: "10px" }}
            placeholder="Enter your email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label"><b>Password</b></label>
          <input
            type="password"
            className="form-control shadow-sm"
            style={{ borderRadius: "10px" }}
            placeholder="Enter your password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-info btn-lg px-5" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
