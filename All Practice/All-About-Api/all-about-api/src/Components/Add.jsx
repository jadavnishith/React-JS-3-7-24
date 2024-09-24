import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {

  const [inputData, setInputData] = useState({ name: "", email: "" });
  const [redirect, setRedirect] = useState(false);

    const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:4040/users", inputData)
      .then((res) => {
        console.log(res.data);
        setRedirect(true);
      })
      .catch((err) => console.log(err));
  }

  if(redirect){
    navigate('/')
  }
  return (
    <>
      <div className="container mt-5 bg-black text-white">
        <h2 className="mb-4 text-center">User Form</h2>
        <form onSubmit={handleSubmit}>
          {/* <!-- Name Input --> */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>

          {/*  Email Input  */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>

          {/*  Submit Button */}
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Add;
