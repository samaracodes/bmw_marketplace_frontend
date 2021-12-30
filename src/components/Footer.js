import react from 'react';

const Footer = () => {
    return ( 
        <div class="mt-6 footer">
                <div class="container">
                    <div class="row">
                        <div class="col about-company">
                            <h4 class="mt-lg-0 mt-sm-3">About Us</h4>
                            <p class="text-white">BMW Marketplace was built as a space for enthusiasts to enjoy </p>
                        </div>

                        <div class="col links">
                            <h4 class="mt-lg-0 mt-sm-3">See More</h4>
                                
                            <p><a href="/signup">Signup </a></p>

                            <p><a href="/cars">Buy Cars</a></p>
                            
                            <p><a href="/parts">Buy Parts</a></p>

                            <p><a href="/s">Sell Your Items</a></p>

                            <p><a href="#">Service & Repair</a></p>
                        </div>

                        <div class="col location">
                            <h4 class="mt-lg-0 mt-sm-3">Location</h4>
                            <p>123 Main Street, New York, NY 10001</p>
                            <p class="mb-0"><i class="fa fa-phone mr-3"></i>(212) 123-4567</p>
                            <p><i class="fa fa-envelope-o mr-3"></i>contact@bmwmarketplace.com</p>
                        </div>
                    </div>

                    <div class="row mt-2">
                        <div class="col copyright">
                        <p class=""><small class="text-white-50">© 2021 BMW Marketplace. All Rights Reserved.</small></p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer