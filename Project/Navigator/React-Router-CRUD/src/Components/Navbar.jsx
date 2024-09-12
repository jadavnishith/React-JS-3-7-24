import React from "react";
import logo from "../Assets/logo-no-background.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>

      <nav
        className="navbar navbar-expand-lg bg-dark"
        style={{ backgroundColor: "#6f42c1" }}
      >
        <div className="container">
          <a className="navbar-brand text-warning" href="#">
            <img
              style={{ width: "8rem", height: "", objectFit: "contain" }}
              src={logo}
              alt=""
            />
          </a>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 hover">

              <li className="nav-item nav-link text-info hover">
                <NavLink
                  className={(e) => (e.isActive ? "crimson" : "")}
                  to="/"
                  style={{color:"aliceblue"}}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item nav-link text-info hover">
                <NavLink
                  className={(e) => (e.isActive ? "crimson" : "")}
                  to="/product"
                  style={{color:"aliceblue"}}
                >
                  Product's
                </NavLink>
              </li>

              <li className="nav-item nav-link text-info hover">
                <NavLink
                  className={(e) => (e.isActive ? "crimson" : "")}
                  to="/contact"
                  style={{color:"aliceblue"}}
                >
                  Contact Form
                </NavLink>
              </li>
              <li className="nav-item nav-link text-info hover">
                <NavLink
                  className={(e) => (e.isActive ? "crimson" : "")}
                  to="/profile"
                  style={{color:"aliceblue"}}
                >
                  Profile
                </NavLink>
              </li>
              <li className="nav-item nav-link text-info hover">
                <NavLink
                  className={(e) => (e.isActive ? "crimson" : "")}
                  to="/todoApp"
                  style={{color:"aliceblue"}}
                >
                  TodoLocalStorage
                </NavLink>
              </li>
              <li className="nav-item nav-link text-info hover">
                <NavLink
                  className={(e) => (e.isActive ? "crimson" : "")}
                  to="/todoList"
                  style={{color:"aliceblue"}}
                >
                  TodoList
                </NavLink>
              </li>
              <li className="nav-item nav-link text-info hover">
                <NavLink
                  className={(e) => (e.isActive ? "crimson" : "")}
                  to="/todoCounter"
                  style={{color:"aliceblue"}}
                >
                  TodoCounter
                </NavLink>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-info  text-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
