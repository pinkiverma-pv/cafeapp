import  React from 'react';

function Footer() {
    return (<>
       <footer>
            <div className="footer-part wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                <div className="icon-default icon-dark">
                    <img src="images/footer-logo.png" alt="" />
                </div>
                <div className="container">
                    <div className="footer-inner">
                        <div className="footer-info">
                            <h3>La boom Restaurant</h3>
                            <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                            <p><a href="#">123 456 7890</a></p>
                            <p><a href="#">support@laboom.com</a></p>
                        </div>
                    </div>
                    <div className="copy-right">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12 copyright-before">
                                <span>Copyright © 2017 Polygon Theme. All rights reserved.</span>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 copyright-after">
                                <div className="social-round">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="icon-find">
                    <a href="#">
                        <img src="images/location.png" alt="" />
                        <span>Find us on Map</span>
                    </a>
                </div>
                <div className="location-footer-map">
                    <div className="icon-find-location">
                        <a href="#">
                            <img src="images/location.png" alt="" />
                            <span>Find us on Map</span>
                        </a>
                    </div>
                    <div className="footer-map-outer">
                        <div id="footer-map"></div>
                    </div>
                </div>
            </div>
        </footer>
    </>);
}
export default Footer;    