import React from 'react'
import Logo from './vendor/media/logo.webp'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="img-responsive" src={ Logo } alt="לוגו מצלמות גלישה מכל ארץ" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/north">מצלמות צפון</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/center">מצלמות מרכז</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/south">מצלמות דרום</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hermon">מצלמות אתר החרמון</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>    
  )
}

export default Navbar