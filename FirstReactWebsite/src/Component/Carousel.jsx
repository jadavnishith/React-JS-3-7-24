import React from "react";
// import carousel1 from '../Assets/slider1.png'
// import carousel2 from '../Assets/slider2.png'
// import carousel3 from '../Assets/slider3.png'
import video1 from "../Assets/video2.mp4";
import video2 from "../Assets/video3.mp4";
import video3 from "../Assets/clothes.mp4";

function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active bg-black"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          className="bg-black"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          className="bg-black"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          {/* <img src={carousel1} className="d-block w-100" alt="Slide 1" /> */}
          <div className="embed-responsive embed-responsive-16by9 ">
            <video
              className="embed-responsive-item d-block w-100"
              loop
              autoPlay
              muted
            >
              <source src={video1} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="carousel-item">
          {/* <img src={carousel2} className="d-block w-100" alt="Slide 2" /> */}
          <div className="embed-responsive embed-responsive-16by9 ">
            <video
              className="embed-responsive-item d-block w-100"
              loop
              autoPlay
              muted
            >
              <source src={video2} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="carousel-item">
          {/* <img src={carousel3} className="d-block w-100" alt="Slide 3" /> */}
          <div className="embed-responsive embed-responsive-16by9 ">
            <video
              className="embed-responsive-item d-block w-100"
              loop
              autoPlay
              muted
            >
              <source src={video3} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-black rounded"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-black rounded "
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
