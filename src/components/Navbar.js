import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar sticky-top navbar-expand-md navbar-light p-md-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="bmw-mrkt-logo.png" className="navbar-logo" alt="BMW Marketplace Brand Logo" height="100"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 al">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/cars">Buy Cars</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/parts">Buy Parts</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/selling">Selling</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/service">Service & Repair</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/service">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </a>
                            </li>                        
                        </ul>

                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0 al">
                            <li className="nav-item">
                                <Link to="/login">Login</Link> | 
                                <Link to="/signup"> Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar