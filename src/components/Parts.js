import React from 'react';

const Parts = () => {
    return (
        <div className="parts-page-container">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="parts-page-carousel carousel-item active">
                        <img src="bmw-parts.png" className="d-block w-100 img-fluid" alt="BMW M Trio Banner" id="carousel-image"/>
                        <div className="carousel-caption d-none d-md-block">
                            
                            

                            <div className="cars-page-search-box input-group input-group-sm col-md-8">
                                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search by model, year, chassis, color, etc..."/>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>

            <section className="feature py-0" id="cars-section-border">
                <div className="cars-section-1 container py-5">

                    <h3>Shop All Parts</h3>

                    <div className="row row-cols-1 row-cols-lg-3 g-6">
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img src="akrapovic-dp.jpeg" className="card-img" alt="..."/><p></p>
                                    <h5 className="card-title" id="cars-card-title">Akrapovic Downpipes S55/F80 M3/F82 M4</h5>
                                    <small className="cars-card-info">Used - Located in Brooklyn, NY</small><br></br>
                                    <small className="cars-card-auction-info">ends in 2 days...</small><br></br>

                                    <div className="col">
                                        <div class="row justify-content-md-center">
                                            <div className="col-6">
                                                <h6 id="cars-card-listing-type">Auction</h6>
                                                <p id="cars-card-listing-price">$255.00</p>
                                                <a href="/na" className="btn btn-outline-secondary bid-btn">Make A Bid</a>
                                            </div>
                                            <div className="col-6">
                                                <h6 id="cars-card-listing-type">Buy It Now</h6>
                                                <p id="cars-card-listing-price">$1000.00</p>
                                                <a href="/na" className="btn btn-outline-primary buy-btn">Buy It Now</a>
                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img src="csf-intercooler.jpeg" className="card-img" alt="..."/><p></p>
                                    <h5 className="card-title" id="cars-card-title">CSF Charge Cooler - Custom Powdercoat</h5>
                                    <small className="cars-card-info">NIB - Located in Fort Lee, NJ</small>

                                    <div className="col">
                                        <div className="row justify-content-md-center">
                                            <div className="col-6">
                                                <h6 id="cars-card-listing-type">Buy It Now</h6>
                                                <p id="cars-card-listing-price">$2150.00</p>
                                                <a href="/na" className="btn btn-outline-primary buy-btn">Buy It Now</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img src="gintani-crankhub.jpeg" className="card-img" alt="..."/><p></p>
                                    <h5 className="card-title" id="cars-card-title">Gintani F8x/S55 Crankhub Solution</h5>
                                    <small className="cars-card-info">NIB - Located in Newark, NJ</small><br></br>
                                    <small className="cars-card-auction-info">ends on 2/2/22...</small><br></br>


                                    <div className="col">
                                        <div className="row justify-content-md-center">
                                            <div className="col-7">
                                                <h6 id="cars-card-listing-type">Raffle</h6>
                                                <p id="cars-card-listing-price">$100 per ticket</p>
                                                <a href="/na" class="btn btn-outline-primary buy-btn">Enter Giveaway</a>
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