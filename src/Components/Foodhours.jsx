import React from 'react';

function Foodhours() {
  return (<>
    <section className="food-hours home-icon wow fadeInDown" data-stellar-offset-parent="true" data-stellar-background-ratio="0.5" data-wow-duration="1000ms" data-wow-delay="300ms" style={{backgroundImage: "url(" + "images/banner2.jpg" + ")"}}>
        <div className="icon-default icon-gold">
            <img src="images/icon19.png" alt="" />
        </div>
        <div className="container">
            <div className="food-blog">
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-12 food-mxs">
                        <div className="food-blog-inner">
                            <div className="food-item">
                                <div className="food-item-inner">
                                    <img src="images/icon15.png" alt="" />
                                </div>
                            </div>
                            <h2>Breakfast</h2>
                            <span>8.00 am 10.00 am</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 food-mxs">
                        <div className="food-blog-inner">
                            <div className="food-item">
                                <div className="food-item-inner">
                                    <img src="images/icon16.png" alt="" />
                                </div>
                            </div>
                            <h2>Lunch</h2>
                            <span>1.00 am 2.00 am</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 food-mxs">
                        <div className="food-blog-inner">
                            <div className="food-item">
                                <div className="food-item-inner">
                                    <img src="images/icon17.png" alt="" />
                                </div>
                            </div>
                            <h2>Dinner</h2>
                            <span>7.00 am 9.00 am</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 food-mxs">
                        <div className="food-blog-inner">
                            <div className="food-item">
                                <div className="food-item-inner">
                                    <img src="images/icon18.png" alt="" />
                                </div>
                            </div>
                            <h2>Dessert</h2>
                            <span>All Day</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>);
}

export default Foodhours;
