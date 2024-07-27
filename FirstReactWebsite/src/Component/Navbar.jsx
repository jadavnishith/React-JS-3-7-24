import React from 'react'
import logo from '../Assets/logo-no-background.png'
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
        <li className="nav-item">
          <a className="nav-link active text-info" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="#">Men</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="#">Women</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="#">Accessories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="#">Sale</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="#">Brands</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-info" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Fashion
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Men's Top Wear</a></li>
            <li><a className="dropdown-item" href="#">Women Western</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Kids</a></li>
          </ul>
        </li>
        
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
