import react from 'react';

const Home = () => {
    return (
        <div className="homepage-container">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="bmw-trio-banner.png" class="d-block w-100 img-fluid" alt="BMW M Trio Banner"/>
                        <div class="carousel-caption d-none d-md-block" id="homepage-carousel-caption">
                            <h2>Where All BMW
                            <br></br>Enthusiasts ///Meet.</h2>
                        </div>
                    </div>
                </div>
            </div>

            <section class="feature py-0">
                <div class="homepage-section-1 py-5">
                <span class="vertLine1">
                    <p class="section-caption-1">You can use BMW Marketplace to buy and sell easily with fellow enthusiasts in the community.</p>
                </span>

                <span class="vertLine2">
                    <p class="section-caption-2">Find amazing deals on new and used cars, parts, or the best rated BMW repair shops/mechanics in your area.</p>
                </span>

                    <p class="section-caption-3">We are strict on keeping this platform clean and safe for everyone.</p>
                </div>
            </section>

            <section class="feature py-0">
                <div class="homepage-section-2 py-1">
                    <div class="row row-cols-1 row-cols-md-3 g-5">
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Find Cars</h5>
                                    <img src="imola-red-m3.jpg" class="card-img-top" alt="..."/><p></p>
                                    <a href="#" class="btn btn-sm  btn-outline-primary">See All Cars</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Find Parts</h5>
                                    <img src="bmw-brakes.jpg" class="card-img-top" alt="..."/><p></p>
                                    <a href="#" class="btn btn-sm btn-outline-primary">See All Parts</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Find Shops</h5>
                                    <img src="BMW-Service-Center-Cropped.jpg" class="card-img-top" alt="..."/><p></p>
                                    <a href="#" class="btn btn-sm btn-outline-primary">See All Shops</a>
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