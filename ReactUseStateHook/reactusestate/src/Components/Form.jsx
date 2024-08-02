import React, { useState } from "react";

function Form() {

    const [formData,setFormData]=useState({
      firstName:'',
      lastName:'',
      email:'',
      pass:'',
      address:'',
      city:'',
      pincode:'',
    })

    // function handleForm(e) {
    //   setFormData(e.target.value)
    // }

    function handleFirstName(e){
      const {name,value} = e.target
        setFormData(pre => ({
          ...pre,
          [name]:value
        }))
    }
    // handleFirstName ye function firstname input ke liye onchange event ko haldle krta hai 
    // e.target.name => field ka name dynamic li access krta hai 
    // e.target.value => uski value ko update krne ke liye 
    // 'name' attribute ko  input field mein specify karte hain. Yeh attribute object key ke taur par use hota hai.
    // ...pre syntax se pehle ka state object copy hota hai, aur sirf wahi key update hoti hai jisse input field map hoti hai.

    function handleLastName(e){
      const {name,value} = e.target
      setFormData(pre => ({
        ...pre,
        [name]:value
      }))
    }
    function handleEmail(e){
      const {name,value} = e.target
        setFormData(pre => ({
          ...pre,
          [name]:value
        }))
        
    }
    function handlePass(e){
      const {name,value} = e.target
        setFormData(pre => ({
          ...pre,
          [name]:value
        }))
        
    }
    function handleAddress(e){
      const {name,value} = e.target
        setFormData(pre => ({
          ...pre,
          [name]:value
        }))
        
    }
    function handleCity(e){
      const {name,value} = e.target
        setFormData(pre => ({
          ...pre,
          [name]:value
        }))

    }
    function handlePincode(e){
      const {name,value} = e.target
        setFormData(pre => ({
          ...pre,
          [name]:value
        }))

    }

  return (
    <>
      <div className="container my-5 py-5 px-4 bg-white rounded-5 shadow-lg">
        <h2 className="text-center text-dark mb-4">Sign Up</h2>
        <form onSubmit={(e) => e.preventDefault()} className="row g-4">
          <div className="col-md-6">
            <label className="form-label text-muted">First Name</label>
            <input 
              type="text" 
              className="form-control rounded-pill border-secondary" 
              name="firstName"
              value={formData.firstName}
              onChange={handleFirstName} 
              placeholder="First Name"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-muted">Last Name</label>
            <input 
              type="text" 
              className="form-control rounded-pill border-secondary" 
              name="lastName"
              value={formData.lastName}
              onChange={handleLastName} 
              placeholder="Last Name"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-muted">Email</label>
            <input 
              type="email" 
              className="form-control rounded-pill border-secondary" 
              name="email"
              value={formData.email}
              onChange={handleEmail} 
              placeholder="Email"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-muted">Password</label>
            <input 
              type="password" 
              className="form-control rounded-pill border-secondary" 
              name="pass"
              value={formData.pass}
              onChange={handlePass} 
              placeholder="Password"
            />
          </div>
          <div className="col-12">
            <label className="form-label text-muted">Address</label>
            <input 
              type="text" 
              className="form-control rounded-pill border-secondary" 
              name="address"
              value={formData.address}
              onChange={handleAddress} 
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-muted">City</label>
            <input 
              type="text" 
              className="form-control rounded-pill border-secondary" 
              name="city"
              value={formData.city}
              onChange={handleCity} 
              placeholder="City"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-muted">Pincode</label>
            <input 
              type="number" 
              className="form-control rounded-pill border-secondary" 
              name="pincode"
              value={formData.pincode}
              onChange={handlePincode} 
              placeholder="Pincode"
            />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-dark rounded-pill px-5 py-2 mt-3">
              Sign Up
            </button>
          </div>
        </form>

        <div className="container my-5 py-4 px-5 bg-light bg-info-subtle rounded-5 shadow-sm">
          <h3 className="text-center text-dark mb-4">User Information</h3>
          <div className="row">
            <div className="col-md-4">
              <p><strong>Name:</strong></p>
              <p><strong>Email:</strong></p>
              <p><strong>Password:</strong></p>
              <p><strong>Address:</strong></p>
            </div>
            <div className="col-md-8">
              <p>{formData.firstName} {formData.lastName}</p>
              <p>{formData.email}</p>
              <p>{formData.pass}</p>
              <p>{formData.address}, {formData.city}, {formData.pincode}</p>
            </div>
          </div>
        </div>
      </div>
//     </>
  );
}

export default Form;





