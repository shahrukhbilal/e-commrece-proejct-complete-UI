import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className='nav-link' style={{color:'white', textDecoration: 'none'}} to={'/'}>Home</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                  <Link className='nav-link' style={{color:'white', textDecoration: 'none'}} to={'/products'}>Products</Link>
              </li>
              <li className="nav-item">
                 <Link className='nav-link' style={{color:'white', textDecoration: 'none'}} to={'/cart'}>Cart</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' style={{color:'white', textDecoration: 'none'}} to={'/login'}>login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  )
}

export default NavBar