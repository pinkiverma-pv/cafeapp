import React from 'react';

function Menu() {
  return (<>
    <section className="special-menu bg-skeen home-icon wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
        <div className="icon-default icon-skeen">
            <img src="images/icon6.png" alt="" />
        </div>
        <div className="container">
            <div className="build-title">
                <h2>Our Special Menu</h2>
                <h6>The role of a good cook ware in the preparation of a sumptuous meal cannot be over emphasized then one consider white bread</h6>
            </div>
            <div className="menu-wrapper">
                <div className="portfolioFilter">
                    <div className="portfolioFilter-inner">
                        <a href="javascript:;" data-filter="*" className="current">All</a>
                        <a href="javascript:;" data-filter=".breakfast">BREAKFAST</a>
                        <a href="javascript:;" data-filter=".dessert">DESSERT</a>
                        <a href="javascript:;" data-filter=".dinner">DINNER</a>
                        <a href="javascript:;" data-filter=".freshfood">FRESHFOOD</a>
                        <a href="javascript:;" data-filter=".lunch">LUNCH</a>
                    </div>
                </div>
                <div className="portfolioContainer row">
                    <div className="col-md-6 col-sm-6 col-xs-12 isotope-item breakfast">
                        <div className="menu-list">
                            <span className="menu-list-product">
                                <img src="images/img3.png" alt="" />
                            </span>
                            <h5>LASAL CHEESE <span>$ 15.00</span></h5>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 isotope-item lunch">
                        <div className="menu-list">
                            <span className="menu-list-product">
                                <img src="images/img4.png" alt="" />
                            </span>
                            <h5>JUMBO CARB SHRIMP <span>$ 25.00</span></h5>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 isotope-item dessert">
                        <div className="menu-list">
                            <span className="menu-list-product">
                                <img src="images/img5.png" alt="" />
                            </span>
                            <h5>SURMAI CHILLI <span>$ 15.00</span></h5>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 isotope-item dinner">
                        <div className="menu-list">
                            <span className="menu-list-product">
                                <img src="images/img6.png" alt="" />
                            </span>
                            <h5>CAPO STEAK <span>$ 45.00</span></h5>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 isotope-item freshfood">
                        <div className="menu-list">
                            <span className="menu-list-product">
                                <img src="images/img7.png" alt="" />
                            </span>
                            <h5>ORGANIC FRUIT SALAD <span>$ 15.00</span></h5>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 isotope-item freshfood">
                        <div className="menu-list">
                            <span className="menu-list-product">
                                <img src="images/img8.png" alt="" />
                            </span>
                            <h5>PRAWNS BUTTER GARLIC <span>$ 15.00</span></h5>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</p>
                        </div>
                    </div>
                </div>
                <div className="btn-outer">
                    <a href="#" className="btn-main btn-shadow">Explore Full Menu</a>
                </div>
            </div>
        </div>
        <div className="float-main">
            <div className="icon-top-left">
                <img src="images/icon7.png" alt="" />
            </div>
            <div className="icon-bottom-left">
                <img src="images/icon8.png" alt="" />
            </div>
            <div className="icon-top-right">
                <img src="images/icon9.png" alt="" />
            </div>
            <div className="icon-bottom-right">
                <img src="images/icon10.png" alt="" />
            </div>
        </div>
    </section>
  </>);
}

export default Menu;
