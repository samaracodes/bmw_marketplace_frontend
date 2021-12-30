import React from 'react';

const About = () => {
    return (
        <div className="parts-page-container">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="parts-page-carousel carousel-item active">
                        <img src="bmw-g8x-individuals-lineup.jpg" class="d-block w-100 img-fluid" alt="BMW G8x Lineup Banner" id="carousel-image"/>
                        <div class="carousel-caption d-none d-md-block" id="homepage-carousel-caption">
                            <h2>About Us</h2>
                        </div>
                    </div>
                </div>
            </div>

            <section class="feature py-2" id="cars-section-border">
                <div class="cars-section-1 container py-5">
                    <h3>Message from the owner of this platform.
                    </h3>

                    <p>
                        Thank you to everyone who supports this venture of mine. I wanted to build a platform for people like me that enjoy the BMW car culture. Make the process of sourcing and selling cars/parts simple and enjoyable to take part in. 
                    </p>
                    <p>
                        A little back story... Growing up as a BMW mechanic's daughter, surrounded by everything from 3 series, 5 series & 7 series, it was always a dream of mine to drive these cars just like my dad.
                        
                        Fast forwarding to now, being in a male predominiant community I wanted to make my own wave in the culture. Build something that everyone can benefit from. While kindly saying "f*ck misogyny & the stereotypical assumptions" that come with being a woman apart of the industry. Now here I am taking my dreams to new heights. 🙌🏼
                    </p>
                    <p><strong>
                        I've always been a visionary, and there's no limit to where it can go. ❤️
                        </strong>
                    </p>


                    
                </div>
            </section>

        </div>
    )
}

export default About