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

// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Form() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     pass: '',
//     address: '',
//     city: '',
//     pincode: ''
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   }

//   return (
//     <>
//       <div className="container my-5 py-5 px-4 bg-white rounded-5 shadow-lg">
//         <h2 className="text-center text-dark mb-4">Sign Up</h2>
//         <form onSubmit={(e) => e.preventDefault()} className="row g-4">
//           <div className="col-md-6">
//             <label className="form-label text-muted">First Name</label>
//             <input 
//               type="text" 
//               className="form-control rounded-pill border-secondary" 
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange} 
//               placeholder="First Name"
//             />
//           </div>
//           <div className="col-md-6">
//             <label className="form-label text-muted">Last Name</label>
//             <input 
//               type="text" 
//               className="form-control rounded-pill border-secondary" 
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange} 
//               placeholder="Last Name"
//             />
//           </div>
//           <div className="col-md-6">
//             <label className="form-label text-muted">Email</label>
//             <input 
//               type="email" 
//               className="form-control rounded-pill border-secondary" 
//               name="email"
//               value={formData.email}
//               onChange={handleChange} 
//               placeholder="Email"
//             />
//           </div>
//           <div className="col-md-6">
//             <label className="form-label text-muted">Password</label>
//             <input 
//               type="password" 
//               className="form-control rounded-pill border-secondary" 
//               name="pass"
//               value={formData.pass}
//               onChange={handleChange} 
//               placeholder="Password"
//             />
//           </div>
//           <div className="col-12">
//             <label className="form-label text-muted">Address</label>
//             <input 
//               type="text" 
//               className="form-control rounded-pill border-secondary" 
//               name="address"
//               value={formData.address}
//               onChange={handleChange} 
//               placeholder="1234 Main St"
//             />
//           </div>
//           <div className="col-md-6">
//             <label className="form-label text-muted">City</label>
//             <input 
//               type="text" 
//               className="form-control rounded-pill border-secondary" 
//               name="city"
//               value={formData.city}
//               onChange={handleChange} 
//               placeholder="City"
//             />
//           </div>
//           <div className="col-md-6">
//             <label className="form-label text-muted">Pincode</label>
//             <input 
//               type="number" 
//               className="form-control rounded-pill border-secondary" 
//               name="pincode"
//               value={formData.pincode}
//               onChange={handleChange} 
//               placeholder="Pincode"
//             />
//           </div>
//           <div className="col-12 text-center">
//             <button type="submit" className="btn btn-dark rounded-pill px-5 py-2 mt-3">
//               Sign Up
//             </button>
//           </div>
//         </form>

//         <div className="container my-5 py-4 px-5 bg-light bg-info-subtle rounded-5 shadow-sm">
//           <h3 className="text-center text-dark mb-4">User Information</h3>
//           <div className="row">
//             <div className="col-md-4">
//               <p><strong>Name:</strong></p>
//               <p><strong>Email:</strong></p>
//               <p><strong>Password:</strong></p>
//               <p><strong>Address:</strong></p>
//             </div>
//             <div className="col-md-8">
//               <p>{formData.firstName} {formData.lastName}</p>
//               <p>{formData.email}</p>
//               <p>{formData.pass}</p>
//               <p>{formData.address}, {formData.city}, {formData.pincode}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Form;