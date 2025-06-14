import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // important for carousel functionality
import './Banner.css';


const BannerSlider = () => {
  // Optional: re-initialize carousel in React
  useEffect(() => {
    const carouselElement = document.querySelector('#bannerCarousel');
    if (window.bootstrap) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 3000, // 3 seconds
        ride: 'carousel'
      });
    }
  }, []);

  return (
    <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        <div className="carousel-item active">
            
          <div
            className="banner d-flex align-items-center justify-content-center text-center text-white" style={{backgroundColor:'red'}}
        
          >
            <div className="banner-content" >
              <h1 className="display-5 fw-bold">Welcome to Our Store</h1>
              <p className="lead">Discover amazing deals and new arrivals!</p>
              <a href="/shop" className="btn btn-primary btn-lg">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="banner d-flex align-items-center justify-content-center text-center text-white"
             style={{backgroundColor:'orange'}}>
            <div className="banner-content">
              <h1 className="display-5 fw-bold">Summer Sale</h1>
              <p className="lead">Up to 50% off selected items!</p>
              <a href="/shop" className="btn btn-warning btn-lg">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="banner d-flex align-items-center justify-content-center text-center text-white"
             style={{backgroundColor:"blueviolet"}}
          >
            <div className="banner-content">
              <h1 className="display-5 fw-bold">Men's collection</h1>
              <p className="lead">Up to 20% off on men's Outfitt!</p>
              <a href="/shop" className="btn btn-warning btn-lg">Shop Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default BannerSlider;
