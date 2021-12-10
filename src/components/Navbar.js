import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-light p-md-3">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="bmw-brand-logo.png" class="navbar-logo" alt="BMW Marketplace Brand Logo" height="120"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0 al">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/cars">Cars For Sale</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/parts">Buy Parts</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/sell-your-car">Sell Your Car</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/service">Service & Repair</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar