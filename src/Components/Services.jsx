import React from 'react';
import { NavLink } from 'react-router-dom';

const Services = (props) =>{
    return(
        <>
            <section className="breadcrumb-part banner_bg" style={ { backgroundImage: "url('images/breadbg1.jpg')" } }>
                    <div className="container">
                        <div className="breadcrumb-inner">
                            <h2>Our {props.name}</h2>
                            <NavLink to="/">Home</NavLink>
                            <span>Our {props.name}</span>
                        </div>
                    </div>
             </section>
            <section className="home-icon service-record pad-bottom-remove wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <div className="icon-default">
                        <img src="images/scroll-arrow.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="build-title">
                            <h2>La Boom Service</h2>
                            <h6>This is what we do and we do it perfectly</h6>
                        </div>
                        <div className="service-port-outer">
                            <div className="service-port odd wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-12 service-port-left">
                                        <div className="service-port-prev">
                                            <img src="images/img37.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12 service-port-right">
                                        <div className="service-port-next">
                                            <h5>INGREDIENT SUPPLY</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                            <a href="#" className="btn-black">LEARN MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-port even wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-12 service-port-left">
                                        <div className="service-port-prev">
                                            <img src="images/img38.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12 service-port-right">
                                        <div className="service-port-next">
                                            <h5>INGREDIENT SUPPLY</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                            <a href="#" className="btn-black">LEARN MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-port odd wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-12 service-port-left">
                                        <div className="service-port-prev">
                                            <img src="images/img39.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12 service-port-right">
                                        <div className="service-port-next">
                                            <h5>INGREDIENT SUPPLY</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                            <a href="#" className="btn-black">LEARN MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-port even wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-12 service-port-left">
                                        <div className="service-port-prev">
                                            <img src="images/img40.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12 service-port-right">
                                        <div className="service-port-next">
                                            <h5>INGREDIENT SUPPLY</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                            <a href="#" className="btn-black">LEARN MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}

export default Services;