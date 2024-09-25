import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios.get('http://localhost:4040/api')
      .then((response) => {
        const users = response.data;
        const user = users.find(user => user.email === email && user.password === password);
        
        if (user) {
          setUser(user);
          setMessage("Login Successful!");
          navigate('/');
        } else {
          alert("Please SignUP First");
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setMessage("Error fetching user data.");
      });
  }

  function handleSignUpRedirect() {
    navigate('/signup');
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
        <b><i>Login</i></b>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="form-label"><b>Email</b></label>
          <input
            type="email"
            className="form-control shadow-sm"
            style={{ borderRadius: "10px" }}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label"><b>Password</b></label>
          <input
            type="password"
            className="form-control shadow-sm"
            style={{ borderRadius: "10px" }}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-info btn-lg px-5" type="submit">
            Login
          </button>
          <button
            className="btn btn-outline-info btn-lg ms-3 px-5"
            type="button"
            onClick={handleSignUpRedirect}
          >
            SignUp
          </button>
        </div>
        {message && <p className="mt-3 text-danger">{message}</p>}
      </form>
    </div>
  );
}

export default Login;
