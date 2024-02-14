import React from 'react';
import Logout from './Logout';
import { NavLink } from "react-router-dom";



const Navbar = ({loggedIn}) => {    
    
    return (
        <div className="navbar-container">
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark p-md-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="./bmw-mrkt-logo.png" className="navbar-logo" alt="BMW Marketplace Brand Logo" height="90"/>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/cars">Cars</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/parts">Parts</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/service">Service & Repair</NavLink>
                            </li> 
 

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="/about">About</a></li>
                                    <li><a className="dropdown-item" href="/selling">Sell your stuff</a></li>
                                </ul>
                            </li>              
                        </ul>

                        {loggedIn ? <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                                <a className="nav-link btn" href="#">Welcome User </a>
                            </li>
                        </ul> 
                        
                        
                        : 
                            
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                                <a className="nav-link btn signup-login-btn" href="/signup">Signup</a>
                            </li>
                            ||                             
                            <li className="nav-item">
                                <a className="nav-link signup-login-btn" href="/login">Login</a>
                            </li>
                        </ul>}

                        {loggedIn ? <Logout /> : null}
                    </div>
                </div>
            </nav>
        </div>
    )
}



export default Navbar