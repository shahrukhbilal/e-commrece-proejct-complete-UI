import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Checkout() {
    const [formData, setformData] = useState({
        name: "",
        email:"",
        adress: '',
        phone: ''
    })
    const navigate = useNavigate()
     const handleChange= (e)=>{
        setformData({...formData, [e.target.name]: e.target.value})

     }

     const handleSubmit= (e)=>{
        e.preventDefault();
        console.log('checkout details', formData)
        navigate('/thankyou');
     }
    
  return (
 <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Checkout</h2>
     <form onSubmit={handleSubmit} className="container mt-4 p-4 bg-light rounded shadow-sm" style={{ maxWidth: '500px' }}>
  <h2 className="text-center mb-4">Checkout</h2>

  {/* Name field */}
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input
      type="text"
      name="name"
      id="name"
      value={formData.name}
      onChange={handleChange}
      required
      className="form-control"
      placeholder="Enter your name"
    />
  </div>

  {/* Email field */}
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="form-control"
      placeholder="you@example.com"
    />
  </div>

  {/* Address field */}
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <textarea
      name="address"
      id="address"
      value={formData.address}
      onChange={handleChange}
      required
      rows="3"
      className="form-control"
      placeholder="Enter your address"
    ></textarea>
  </div>

  {/* Phone field */}
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone</label>
    <input
      type="tel"
      name="phone"
      id="phone"
      value={formData.phone}
      onChange={handleChange}
      required
      className="form-control"
      placeholder="Enter your phone number"
    />
  </div>

  {/* Place order button */}
  <div className="d-grid">
    <button type="submit" className="btn btn-primary">Place Order</button>
  </div>
</form>
    </div>
  );
};


export default Checkout