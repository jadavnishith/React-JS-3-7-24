import React from 'react'
import logo from '../Assets/logo-no-background.png'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
      {/* Navbar */}

      <nav className="navbar navbar-expand-lg bg-dark" style={{backgroundColor: '#6f42c1'}}>
  <div className="container">
    <a className="navbar-brand text-warning" href="#">
      <img style={{width:"8rem",height:"",objectFit:"contain"}} src={logo} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/">
        <li className="nav-item">
          <a className="nav-link active text-info" aria-current="page" href="#">Home</a>
          {/* Home */}
        </li>
        </NavLink>

        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/product">
        <li className="nav-item">
          <a className="nav-link text-info" href="#">Product's</a>
        </li>
        </NavLink>
        <NavLink className={(e) => (e.isActive ? "crimson" : "")} to="/contact">
        <li className="nav-item">
          <a className="nav-link text-info" href="#">Contact Form</a>
        </li>
        </NavLink>
        
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-info  text-white"  type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
