import React from "react";
import pro1 from "../Assets/air-jordan.jpeg";
import pro2 from "../Assets/jumpman.png";
import pro3 from "../Assets/tatum-2.jpeg";
import pro4 from "../Assets/air-jordan-4.jpeg";
import pro5 from "../Assets/miler-flash.png";
import pro6 from "../Assets/track-club.png";
import pro7 from "../Assets/sportswear.png";
import pro8 from "../Assets/sportswear-long-sleeve.png";
import pro9 from "../Assets/shirt1.jpg";
import pro10 from "../Assets/shirt2.jpg";
import pro11 from "../Assets/shirt4.jpg";
import pro12 from "../Assets/shirt3.jpg";

function Product() {
  return (
    <>
      {/* cards */}

      {/* product  1*/}
      <div
        className="card"
        style={{
          width: "20rem",
          backgroundImage:
            "linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)",
            margin:"auto"
        }}
      >
        <img src={pro1} className="card-img-top mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Air Jordan 1</h5>
          <p className="card-text">
            The Air Jordan 1 Retro High remakes the classic sneaker.
          </p>
          <a href="#" className="btn btn-info mt-4">
            ₹ 16 995.00
          </a>
        </div>
      </div>

      {/* product 2 */}

      <div
        className="card"
        style={{
          width: "20rem",
          backgroundImage:
            "linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)",
            margin:"auto"
        }}
      >
        <img src={pro2} className="card-img-top mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Jumpman MVP</h5>
          <p className="card-text">Men's Shoes</p>
          <a href="#" className="btn btn-info mt-5">
            ₹ 14 527.00
          </a>
        </div>
      </div>

      {/* product 3 */}

      <div
        className="card"
        style={{
          width: "20rem",
          backgroundImage:
            "linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)",
            margin:"auto"
        }}
      >
        <img src={pro3} className="card-img-top mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Tatum 2 'Legacy' PF</h5>
          <p className="card-text">Basketball Shoes</p>
          <a href="#" className="btn btn-info mt-5">
            ₹ 11 495.00
          </a>
        </div>
      </div>

      {/* product 4 */}

      <div
        className="card"
        style={{
          width: "20rem",
          backgroundImage:
            "linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)",
            margin:"auto"
        }}
      >
        <img src={pro4} className="card-img-top mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Air Jordan 4 Retro 'Industrial Blue'</h5>
          <p className="card-text">Men's Shoes</p>
          <a href="#" className="btn btn-info mt-4">
            ₹ 19 495.00
          </a>
        </div>
      </div>

      {/* product 5 */}

      <div
        className="card"
        style={{
          width: "20rem",
          backgroundImage: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
          margin:"auto"
        }}
      >
        <img src={pro5} className="card-img-top mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Nike Miler Flash</h5>
          <p className="card-text">Men's Dri-FIT UV Long-Sleeve Running Top</p>
          <a href="#" className="btn btn-info">
            ₹ 2 595.00
          </a>
        </div>
      </div>

      {/* product 6 */}

      <div
        className="card"
        style={{
          width: "20rem",
          backgroundImage: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
          margin:"auto"
        }}
      >
        <img src={pro6} className="card-img-top mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Nike Track Club</h5>
          <p className="card-text">
            Men's Dri-FIT Hyverse Long-Sleeve Running Top
          </p>
          <a href="#" className="btn btn-info font-weight-bold">
            ₹ 2 847.00
          </a>
        </div>
      </div>

      {/* product 7 */}

      <div
        className="card"
        style={{
          width: "20rem",
          backgroundImage: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
          margin:"auto"
        }}
      >
        <img src={pro7} className="card-img-top mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Nike Sportswear Premium Essentials</h5>
          <p className="card-text">Men's Long-Sleeve T-Shirt</p>
          <a href="#" className="btn btn-info">
            ₹ 2 695.00
          </a>
        </div>
      </div>

      {/* product 8 */}

      <div
        className="card"
        style={{
          width: "20rem",
          backgroundImage: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
          margin:"auto"
        }}
      >
        <img src={pro8} className="card-img-top mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Nike Sportswear</h5>
          <p className="card-text">Long-Sleeve T-Shirt</p>
          <a href="#" className="btn btn-info mt-4">
            ₹ 2 087.00
          </a>
        </div>
      </div>

      {/* product 9 */}

      <div
        className="card"
        style={{
          width: "20rem",
          backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
          margin:"auto"
        }}
      >
        <img src={pro9} className="card-img-top mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">RARE RABBIT</h5>
          <p className="card-text">
            Men Vert Regular Fit Vertical Striped Shirt
          </p>
          <a href="#" className="btn btn-info">
            ₹ 2 999.99
          </a>
        </div>
      </div>

      {/* product 10 */}

      <div
        className="card"
        style={{
          width: "20rem",
          backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
          margin:"auto"
        }}
      >
        <img src={pro10} className="card-img-top mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">RARE RABBIT</h5>
          <p className="card-text">
            Men Auxfo Slim Fit Button-Down Collar Opaque Cotton Shirt
          </p>
          <a href="#" className="btn btn-info">
            ₹ 2 399.99
          </a>
        </div>
      </div>

      {/* product 11 */}

      <div
        className="card"
        style={{
          width: "20rem",
          backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
          margin:"auto"
        }}
      >
        <img src={pro11} className="card-img-top mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">RARE RABBIT</h5>
          <p className="card-text">Men Gunjan Slim Fit Shirt</p>
          <a href="#" className="btn btn-info mt-4">
            ₹ 1 880.00
          </a>
        </div>
      </div>

      {/* product 12 */}

      <div
        className="card"
        style={{
          width: "20rem",
          backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
          margin:"auto"
        }}
      >
        <img src={pro12} className="card-img-top mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">RARE RABBIT</h5>
          <p className="card-text">Men Layerr Regular Fit Cotton Shirt</p>
          <a href="#" className="btn btn-info mt-4">
            ₹ 3 199.99
          </a>
        </div>
      </div>
    </>
  );
}

export default Product;
