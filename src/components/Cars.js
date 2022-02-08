import React from 'react';

const Cars = ({ cars }) => {
    


    return (

        <div className="cars-page-container">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="cars-page-carousel carousel-item active">
                        <img src="g82-m4-santorini-blue.jpeg" className="d-block w-100 img-fluid" alt="BMW M Trio Banner" id="carousel-image"/>
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

                    <h3>Shop All Cars</h3> 
                    <div className="row row-cols-1 row-cols-lg-3 g-6">

                        {cars.map(car =>
                            <div className="col" key={car.id}> 
                                <div className="card h-100" key={car.id}>
                                    <div className="card-body">
                                        <img src={car.attributes.image} className="card-img" alt="Car for sale"/><p></p>

                                        <h5 className="card-title" id="cars-card-title">{car.attributes.title}</h5>

                                        <small className="cars-card-info">{car.attributes.description}</small><br></br>

                                        <small className="cars-card-auction-info">ends in {car.attributes.duration}...</small><br></br>

                                        <div className="col">
                                            <div className="row justify-content-md-center">
                                                <div className="col-6">
                                                        <h6 id="cars-card-listing-type">Auction</h6>
                                                        <p id="cars-card-listing-price">${car.attributes.price}.00</p>
                                                        <a href="/na" className="btn btn-outline-secondary bid-btn">Make A Bid</a>
                                                </div>

                                                <div className="col-6">
                                                        <h6 id="cars-card-listing-type">Buy It Now</h6>
                                                        <p id="cars-card-listing-price">${car.attributes.price}.00</p>
                                                        <a href="/na" className="btn btn-outline-primary buy-btn">Buy It Now</a>
                                                        
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
    
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cars