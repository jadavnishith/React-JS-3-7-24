import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Logo from '../assets/logo-no-background.png'

function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(function () {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log("Error", error);
      }
    }

    fetchProducts();
  }, []);


  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      
{/* Bootstrap navbar */}
<nav className="navbar navbar-expand-lg bg-dark" style={{backgroundColor: '#e3f2fd'}}>
<div className="container">
    <a className="navbar-brand" href="#">
    <img style={{width:"12rem",height:"",objectFit:"contain"}} src={Logo} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
      <li className="nav-item">
          <a className="nav-link text-white" href="#" onClick={() => setSelectedCategory("All")}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" onClick={() => setSelectedCategory("fragrances")}>Fragrances</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" onClick={() => setSelectedCategory("beauty")}>Beauty</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" onClick={() => setSelectedCategory("furniture")}>Furniture</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" onClick={() => setSelectedCategory("groceries")}>Groceries</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

{/* Bootstrap card */}
      <div className="container mt-5  mb-5 text-center gap-3">
        <div className="row align-items-center gap-3">
          <div className="d-flex flex-wrap justify-content-evenly gap-4 " style={{height:"100%",margin: "0 auto",}}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="card"
                style={{
                  width: "18rem",
                  margin: "0 auto",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",
                  boxShadow:
                    "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                  display:"flex",
                  height:"25rem"  
                }}
              >
                <div className="text-center">
                  <img
                    src={product.thumbnail}
                    className="card-img-top mt-2 border-1 rounded"
                    alt={product.title}
                    style={{
                      objectFit: "contain",
                      height: "200px",
                      width: "200px",
                      mixBlendMode: "darken",
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title.slice(0,40)}</h5>
                  <p className="card-text">{product.description.slice(0,60)}</p>
                  <a
                    href="#"
                    className="btn btn-success mt-auto fw-bold"
                    style={{ width: "99px" }}
                  >
                    ₹ {product.price}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bootstrap footer */}
      <Footer/>
    </>
  );
}

export default Home;


