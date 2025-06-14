import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="text-success">Thank You!</h1>
      <p className="lead">Your order has been placed successfully. 😊</p>

      <Link to="/" className="btn btn-primary mt-3">
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
