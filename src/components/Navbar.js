import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav class="navbar fixed-top navbar-expand-md navbar-light p-md-3">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="bmw-mrkt-logo.png" class="navbar-logo" alt="BMW Marketplace Brand Logo" height="100"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 al">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/cars">Buy Cars</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/parts">Buy Parts</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/selling">Selling</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/service">Service & Repair</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/service">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </a>
                            </li>                        
                        </ul>

                        <ul class="navbar-nav mr-auto mb-2 mb-lg-0 al">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/signup">Signup | Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar