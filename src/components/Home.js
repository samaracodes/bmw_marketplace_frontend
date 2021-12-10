import react from 'react';

const Home = () => {
    return (
        <div className="homepage-container">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="autoswift-banner.png" class="d-block w-100 img-fluid" alt="BMW M Trio Banner"/>
                    </div>
                </div>
            </div>

            <section class="feature py-5">
                <div class="homepage-section py-5">
                    Section Text
                </div>
            </section>

        </div>
    )
}

export default Home