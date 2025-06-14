import React, { useContext, useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';



function ProductsListing() {
const {addToCart}= useContext(CartContext)
   const [products, setProducts] = useState([])

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  fetchProducts();
}, []);

   
 
    

  return (
    <div className="container mt-4">
      {/* Heading */}
      <h2 className="mb-4 text-center"><strong>All Products</strong></h2>
<div className="mb-4 text-center">
        <Link to="/cart" className="btn btn-primary">
          <strong>Go to Cart</strong>
        </Link>
      </div>
      {/* Filter section (can be expanded later) */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for products..."
        />
      </div>

      {/* Products grid */}
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div style={{backgroundColor:'whitesmoke', }} className="card h-100 shadow-lg">
              <img style={{height: '180px',width:'100%', objectFit: 'contain'}}
                src={product.imageUrl}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                 <Link to={`/products/${product._id}`} className="btn btn-primary">Details</Link>
                 <button
                  className="btn btn-primary mt-auto"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
      </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    
  );
  
}


export default ProductsListing;
