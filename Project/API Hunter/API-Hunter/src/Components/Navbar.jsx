import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogout() {
    setUser(null);
    navigate("/signup");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/">
          MyApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/signup" className="nav-link text-white fs-5">
                <u>Sign Up</u>
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link to="/login" className="nav-link text-white fs-5">
                <u>Login</u>
              </Link>
            </li>
          </ul>
          {user && (
            <div className="d-flex align-items-center ms-lg-4 mt-2 mt-lg-0">
              <span className="navbar-text text-white me-3">
                <b className="fs-5">
                  Welcome, <i className="text-danger">{user.name}</i>
                </b>
              </span>
              <button
                onClick={handleLogout}
                className="btn btn-danger btn-sm ms-2"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
