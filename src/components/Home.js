import React from 'react';

const Home = () => {
    return (
        <div className="homepage-container">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="bmw-trio-banner.png" className="d-block w-100 img-fluid" alt="BMW M Trio Banner"/>
                        <div className="carousel-caption d-none d-md-block" id="homepage-carousel-caption">
                            <h2>Where All BMW
                            <br></br>Enthusiasts ///Meet.</h2>
                        </div>
                    </div>
                </div>
            </div>

            <section className="feature py-0">
                <div className="homepage-section-1 py-5">
                <span className="vertLine1">
                    <p className="section-caption-1">You can use BMW Marketplace to buy and sell easily with fellow enthusiasts in the community.</p>
                </span>

                <span className="vertLine2">
                    <p className="section-caption-2">Find amazing deals on new and used cars, parts, or the best rated BMW repair shops/mechanics in your area.</p>
                </span>

                    <p className="section-caption-3">We are strict on keeping this platform clean and safe for everyone.</p>
                </div>
            </section>

            <section className="feature py-0">
                <div className="homepage-section-2 py-1">
                    <div className="row row-cols-1 row-cols-md-3 g-5">
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Find Cars</h5>
                                    <img src="imola-red-m3.jpg" className="card-img-top" alt="..."/><p></p>
                                    <a href="/na" className="btn btn-sm  btn-outline-primary">See All Cars</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Find Parts</h5>
                                    <img src="bmw-brakes.jpg" className="card-img-top" alt="..."/><p></p>
                                    <a href="/na" className="btn btn-sm btn-outline-primary">See All Parts</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Find Shops</h5>
                                    <img src="BMW-Service-Center-Cropped.jpg" className="card-img-top" alt="..."/><p></p>
                                    <a href="/na" className="btn btn-sm btn-outline-primary">See All Shops</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home