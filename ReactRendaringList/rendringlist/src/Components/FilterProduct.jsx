import React from 'react'
import { ProductData } from './Data'

function FilterProduct() {
     
    const mensClothing = ProductData.filter(product => product.category === "men's clothing");
    const womensClothing = ProductData.filter(product => product.category === "women's clothing");
    const electronics = ProductData.filter(product => product.category === "electronics");
    const jewelery = ProductData.filter(product => product.category === "jewelery");
  const renderCard = (product) => (

    <li key={product.id}>
      <div
        className="card"
        style={{
          width: "18rem",
          margin: "0 auto",
          height: "100%",
          backgroundImage: "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",
          boxShadow:
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
        }}
      >
        <div className="text-center">
          <img
            src={product.image}
            style={{ objectFit: "contain", height: "200px", width: "200px" }}
            className="card-img-top mt-2 border-1 rounded"
            alt={product.title}
          />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title.slice(0, 40)}</h5>
          <p className="card-text">{product.description.slice(0, 40)}</p>
          <a href="#" className="btn btn-success mt-auto fw-bold" style={{ width: '90px' }}>
            ₹ {product.price}
          </a>
        </div>
      </div>
    </li>
  );
  return (
    <>
    
      <main className="container">
    <h1 className="text-center mt-5 bg-info-subtle rounded-5">Men's Clothing</h1>
        <div className="row mt-4">
          <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-4">
              {mensClothing.map(renderCard)}
          </ul>
        </div>
      </main>

      <main className="container">
      <h1 className="text-center mt-5 bg-info-subtle rounded-5">Women's Clothing</h1>
        <div className="row mt-4">
          <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-4">
              {womensClothing.map(renderCard)}
          </ul>
        </div>
      </main>

      <main className="container">
      <h1 className="text-center mt-5 bg-info-subtle rounded-5">Eletronics</h1>

        <div className="row mt-4">
          <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-4">
              {electronics.map(renderCard)}
          </ul>
        </div>
      </main>

      <main className="container">
      <h1 className="text-center mt-5 bg-info-subtle rounded-5  border border-warning">Jewelery</h1>
        <div className="row mt-4">
          <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-4">
              {jewelery.map(renderCard)}
          </ul>
        </div>
      </main>
    </>
  )
}

export default FilterProduct
