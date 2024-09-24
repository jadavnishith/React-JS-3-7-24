import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const [inpData, setInpData] = useState({ name: "", email: "" });
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams(); // Get the user ID from the URL params
  const navigate = useNavigate();

  // Fetch data for the user with ID
  useEffect(() => {
    axios.get(`http://localhost:4040/users/${id}`)
      .then((res) => {
        setInpData({ name: res.data.name, email: res.data.email });
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    axios.put(`http://localhost:4040/users/${id}`, inpData) // Update the user
      .then((res) => {
        console.log(res.data);
        setRedirect(true);
      })
      .catch((err) => console.log(err));
  }

  if (redirect) {
    navigate('/');
  }

  return (
    <>
      <div className="container mt-5 bg-black text-white">
        <h2 className="mb-4 text-center">Update User</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={inpData.name}
              onChange={(e) => setInpData({ ...inpData, name: e.target.value })}
            />
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={inpData.email}
              onChange={(e) => setInpData({ ...inpData, email: e.target.value })}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </>
  );
}

export default Update;
