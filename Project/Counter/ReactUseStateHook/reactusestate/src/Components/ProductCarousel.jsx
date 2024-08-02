import React, { useState } from 'react';
import { ProductData } from './Data';

function ProductCarousel() {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ProductData.length);
    console.log(currentIndex);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ProductData.length) % ProductData.length);
    console.log(currentIndex);
  };

  const currentProduct = ProductData[currentIndex];

  return (
    <div className="container mt-5 text-center">
      <h1 className='text-center bg-info-subtle mb-5'>Product Carousel</h1>
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={handlePrevious} className="btn btn-primary mx-2">
          Previous
        </button>

        <div className="card" style={{ 
            width: "18rem",
            margin: "0 auto",
          height: "100%",
          backgroundImage: "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",
          boxShadow:
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
         }}>
        <div className="text-center">
          <img
            src={currentProduct.image}
            className="card-img-top mt-2 border-1 rounded"
            alt={currentProduct.title}
            style={{ objectFit: "contain", height: "200px" , width:'200px',mixBlendMode:'darken'}}
          />
          </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{currentProduct.title.slice(0, 40)}</h5>
            <p className="card-text">{currentProduct.description.slice(0, 40)}</p>
            <a href="#" className="btn btn-success mt-auto fw-bold" style={{ width: '90px' }}>
              ₹ {currentProduct.price}
            </a>
          </div>
        </div>

        <button onClick={handleNext} className="btn btn-primary mx-2">
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductCarousel;

