import React from 'react';

const Parts = () => {
    return (
        <div className="parts-page-container">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="parts-page-carousel carousel-item active">
                        <img src="bmw-parts.png" class="d-block w-100 img-fluid" alt="BMW M Trio Banner" id="carousel-image"/>
                        <div class="carousel-caption d-none d-md-block">
                            
                            

                            <div class="cars-page-search-box input-group input-group-sm col-md-8">
                                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search by model, year, chassis, color, etc..."/>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>

            <section class="feature py-0" id="cars-section-border">
                <div class="cars-section-1 container py-5">

                    <h3>Shop All Parts</h3>

                    <div class="row row-cols-1 row-cols-lg-3 g-6">
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <img src="akrapovic-dp.jpeg" class="card-img" alt="..."/><p></p>
                                    <h5 class="card-title" id="cars-card-title">2018 BMW F80 M3 - Imola Red</h5>
                                    <small class="cars-card-info">14,721 miles -- Located in Brooklyn, NY</small><br></br>
                                    <small class="cars-card-auction-info">ends in 2 days...</small><br></br>

                                    <div class="col">
                                        <div class="row justify-content-md-center">
                                            <div class="col-6">
                                                <h6 id="cars-card-listing-type">Auction</h6>
                                                <p id="cars-card-listing-price">$25,875.00</p>
                                                <a href="#" class="btn btn-outline-secondary bid-btn">Make A Bid</a>
                                            </div>
                                            <div class="col-6">
                                                <h6 id="cars-card-listing-type">Buy It Now</h6>
                                                <p id="cars-card-listing-price">$72,000</p>
                                                <a href="#" class="btn btn-outline-primary buy-btn">Buy It Now</a>
                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <img src="csf-intercooler.jpeg" class="card-img" alt="..."/><p></p>
                                    <h5 class="card-title" id="cars-card-title">2019 BMW F80 M3 - Sapphire Black</h5>
                                    <small class="cars-card-info">34,564 miles -- Located in Coral Springs, FL</small>

                                    <div class="col">
                                        <div class="row justify-content-md-center">
                                            <div class="col-6">
                                                <h6 id="cars-card-listing-type">Auction</h6>
                                                <p id="cars-card-listing-price">$9,126.50</p>
                                                <a href="#" class="btn btn-outline-secondary bid-btn">Make A Bid</a>
                                            </div>
                                            <div class="col-6">
                                                <h6 id="cars-card-listing-type">Buy It Now</h6>
                                                <p id="cars-card-listing-price">$73,550.00</p>
                                                <a href="#" class="btn btn-outline-primary buy-btn">Buy It Now</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <img src="gintani-crankhub.jpeg" class="card-img" alt="..."/><p></p>
                                    <h5 class="card-title" id="cars-card-title">2015 BMW F80 M3 - Champagne Quartz</h5>
                                    <small class="cars-card-info">36,953 miles -- Located in Newark, NJ</small><br></br>
                                    <small class="cars-card-auction-info">ends on 2/2/22...</small><br></br>


                                    <div class="col">
                                        <div class="row justify-content-md-center">
                                            <div class="col-7">
                                                <h6 id="cars-card-listing-type">Raffle</h6>
                                                <p id="cars-card-listing-price">$300 per ticket</p>
                                                <a href="#" class="btn btn-outline-primary buy-btn">Enter Giveaway</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Parts