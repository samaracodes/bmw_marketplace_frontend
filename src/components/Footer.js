import React from 'react';

const Footer = () => {
    return ( 
        <div className="mt-6 footer">
                <div className="container">
                    <div className="row">
                        <div className="col about-company">
                            <h4 className="mt-lg-0 mt-sm-3">About Us</h4>
                            <p className="text-white">BMW Marketplace is a space for enthusiasts to enjoy. </p>
                        </div>

                        <div className="col links">
                            <h4 className="mt-lg-0 mt-sm-3">See More</h4>
                                
                            <p><a href="/signup">Signup </a></p>

                            <p><a href="/cars">Buy Cars</a></p>
                            
                            <p><a href="/parts">Buy Parts</a></p>

                            <p><a href="/na">Sell Your Items</a></p>

                            <p><a href="/na">Service & Repair</a></p>
                        </div>

                        <div className="col location">
                            <h4 className="mt-lg-0 mt-sm-3">Location</h4>
                            <p>123 Main Street, New York, NY 10001</p>
                            <p className="mb-0"><i className="fa fa-phone mr-3"></i>(212) 123-4567</p>
                            <p><i className="fa fa-envelope-o mr-3"></i>contact@bmwmarketplace.com</p>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col copyright">
                        <p className=""><small className="text-white-50">© 2021 BMW Marketplace. All Rights Reserved.</small></p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer