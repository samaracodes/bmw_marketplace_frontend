import React from 'react';

const Footer = () => {
    return ( 
        <div className="mt-6 footer">
                <div className="container">
                    <div className="row">
                        <div className="col about-company">
                            <h4 className="mt-lg-0 mt-sm-3">Follow Us!</h4>
                            <p className="text-white">See what's going on our social media. <br></br>BMW Mrkt is coming soon on the App Store 😊</p>

                            <p><a href="https://instagram.com/bmwmrkt"> Our Instagram</a></p>

                        </div>

                        <div className="col links">
                            <h4 className="mt-lg-0 mt-sm-3">See More</h4>
                                
                            <p><a href="/about">About Us</a></p>

                            <p><a href="/selling">Sell Your Stuff</a></p>

                            <p><a href="/service">Service & Repair</a></p>
                        </div>

                        <div className="col contact">
                            <h4 className="mt-lg-0 mt-sm-3">Contact Us</h4>
                           
                            <p className="text-white"> If you need to reach out to us, please email us at: <a href="mailto:contact@bmwmrkt.com" className="fa fa-envelope-o mr-3">contact@bmwmrkt.com</a>
                            </p>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col copyright">
                        <p className=""><small className="text-white-50"> 2022 BMW Marketplace.</small></p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer