import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`http://localhost:4040/api`, data).then((res) => {
      console.log(res.data);
      navigate("/login");
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
