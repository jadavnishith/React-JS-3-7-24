import React, { useEffect, useState } from 'react';

function Product() {
  const [user, setUser] = useState([]);
  const [term, setTerm] = useState("");
  const [category, setCategory] = useState("all");

  // API Calling
  useEffect(() => {
    async function fetchData() {
      const fetchApi = await fetch(`https://fakestoreapi.com/products`);
      const data = await fetchApi.json();
      setUser(data);
    }
    fetchData();
  }, []);

  // Searching and Filtering
  const searchUser = user
    .filter(({ title, category: productCategory }) => {
      const searchMatch = title.toLowerCase().includes(term.toLowerCase());
      const categoryMatch = category === "all" || productCategory === category;
      return searchMatch && categoryMatch;
    })
    .map((e) => (
      <div key={e.id} className="col-md-4">
        <div
          className="card h-100 shadow-sm product-card"
          style={{
            borderRadius: "20px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <div className="text-center">
            <img
              src={e.image}
              style={{ objectFit: "contain", height: "250px", padding: "20px" }}
              className="card-img-top mt-3 rounded"
              alt={e.title}
            />
          </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-truncate fw-bold">{e.title}</h5>
            <p className="card-text text-muted text-truncate">{e.description}</p>
            <div className="d-flex justify-content-between align-items-center mt-auto">
              <span className="text-success fw-bold fs-5">₹ {e.price}</span>
              <a href="#" className="btn btn-outline-success px-3 py-2">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <main className="container">
        <h1 className="text-center mt-5 bg-light rounded-5 p-3 shadow-sm fw-bold">
          Explore Our Products
        </h1>
        <div className="d-flex justify-content-center align-items-center mb-5 flex-wrap gap-3">
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search products"
            className="form-control shadow-sm"
            style={{ 
              borderRadius: "30px", 
              padding: "10px 20px", 
              width: "100%", 
              maxWidth: "400px" 
            }}
          />
          <select
            className="form-select shadow-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ 
              borderRadius: "30px", 
              width: "100%", 
              maxWidth: "250px", 
              padding: "10px" 
            }}
          >
            <option value="all">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
          </select>
        </div>
        <div className="row g-4">
          {searchUser.length > 0 ? (
            searchUser
          ) : (
            <p className="text-center text-muted fs-4">No products found</p>
          )}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-dark text-center text-white py-3 mt-5">
        <p>&copy; 2024 My Product Store. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Product;
