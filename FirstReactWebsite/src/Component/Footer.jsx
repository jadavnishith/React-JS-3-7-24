import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import logo from '../Assets/logo-no-background.png'
function Footer() {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4 ">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="mb-4">
              <a href="#">
                <img style={{width:"12rem",height:"",objectFit:"contain"}} src={logo} alt="" />
                </a>
              </h5>
              <p>
              UrbanChic is a lifestyle retailer dedicated to inspiring
              customers through unique combination
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Categories
              </h5>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Sweatshirts
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Women's wear
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Men's Wear
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Kids
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Useful Links
              </h5>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Store Location
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Latest Posts
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  My Account
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Size Guid
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i></i>Ahemdabad, Gujrat 320008, INDIA
              </p>
              <p>
                <i></i>urbanchic@gmail.com
              </p>
              <p>
                <i></i>+91 5469785221
              </p>
              <p>
                <i></i>+0(261) 234321557
              </p>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p>
                Copyright ©2024 All rights reserved by
                <a href="#" style={{ textDecoration: "none" }}>
                  <strong className="text-warning px-1">UrbanChic</strong>
                </a>
              </p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className=" text-center text-md-right">
                <ul className="list-list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a
                      href=""
                      className="btn-floating btn-sm text-info"
                      style={{ textDecoration: "none", fontSize: "23px" }}
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href=""
                      className="btn-floating btn-sm text-info"
                      style={{ textDecoration: "none", fontSize: "23px" }}
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href=""
                      className="btn-floating btn-sm text-info"
                      style={{ textDecoration: "none", fontSize: "23px" }}
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href=""
                      className="btn-floating btn-sm text-info"
                      style={{ textDecoration: "none", fontSize: "23px" }}
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href=""
                      className="btn-floating btn-sm text-info"
                      style={{ textDecoration: "none", fontSize: "23px" }}
                    >
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
