import React from 'react';

function Contact() {
  return (
    <div className="container my-5 py-5 px-4 bg-white rounded shadow-lg">
      <h2 className="text-center mb-4 display-5 fw-bold text-primary">Contact Us</h2>

      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-lg h-100 text-center p-3">
            <div className="mb-3">
              <i className="bi bi-telephone-fill text-success fs-1"></i>
            </div>
            <h5 className="fw-semibold">Mobile No</h5>
            <p className="text-muted mb-0">03001234567</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-lg h-100 text-center p-3">
            <div className="mb-3">
              <i className="bi bi-telephone-forward-fill text-warning fs-1"></i>
            </div>
            <h5 className="fw-semibold">Auto No</h5>
            <p className="text-muted mb-0">0510123456</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-lg h-100 text-center p-3">
            <div className="mb-3">
              <i className="bi bi-envelope-fill text-danger fs-1"></i>
            </div>
            <h5 className="fw-semibold">Gmail</h5>
            <p className="text-muted mb-0">jsstore@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
