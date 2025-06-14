import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap ka import
import './Home.css'; // Aapka external CSS
import image from "../assets/Taobao Banner Clothing Background, Color, Warm, Flat Background Image And Wallpaper for Free Download.jpeg";

import logoimg from "../assets/Orange E-commerce Online Store Logo.png"

import { Link } from 'react-router-dom';


function Home() {
  return (
    <div >
      {/* Header */}
      <header className='mb-'  >
<img src={logoimg} alt='Logo' className='logo'></img>
        
        <h1 style= {{paddingLeft:'110px'}}className=" text-white text-center "><strong>Jee's E-Commrece Store</strong></h1>
         <div class="search-bar">
      <p className="mt-3">
           <strong> Need Help !</strong><Link to="/contact">Contact Us</Link>
          </p>
      </div>
      </header>

      {/* Navigation bar with Bootstrap */}
    
      {/* slider */}
      <section>
        <BannerSlider></BannerSlider>
      </section>
      <section style={{color:'white'}} className="text-center">
        <img
          src={image}
          alt="Main Banner"
          className="img-fluid w-100"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        
        <h2 className="mt-3 "><strong>Shop the best products here 🛒!</strong></h2>
        <h2>We always care about your selection 👨🏿‍🤝‍👨🏿</h2>
      </section>

      {/* Featured Products */}
      <section className="container my-4">
        <h3 style={{backgroundColor:'white'}} className="text-center mb-4"><strong>Featured Products</strong></h3>
        <div className="row">
          <div className="col-sm-6 col-md-4 mb-3">
            <div className="card h-100">
              <img
                src={image2}
                alt="Ronin Headphones"
                className="card-img-top"
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body">
                <h4 className="card-title">Ronin Headphones</h4>
                <p><strong>Price:</strong> $7</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 mb-3">
            <div className="card h-100">
              <img
                src={image3}
                alt="Pure Black Perfume"
                className="card-img-top"
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body">
                <h4 className="card-title">Pure Black Perfume</h4>
                <p><strong>Price:</strong> $10</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 mb-3">
            <div className="card h-100">
              <img
                src={image4}
                alt="Fair and Handsome Face Wash"
                className="card-img-top"
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body">
                <h4 className="card-title">Fair and Handsome Face Wash</h4>
                <p><strong>Price:</strong> $3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center p-3">
        <p>&copy; 2025 My E-Commerce Website</p>
      </footer>
    </div>
  );
}

export default Home;
