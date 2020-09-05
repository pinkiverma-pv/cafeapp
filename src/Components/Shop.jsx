import  React  from 'react';
import { NavLink } from 'react-router-dom';

function Shop(props){
    return(<>
<section className="breadcrumb-part banner_bg" style={ { backgroundImage: "url('images/breadbg1.jpg')" } }>
        <div className="container">
            <div className="breadcrumb-inner">
                <h2>{props.name}</h2>
                <NavLink to="/">Home</NavLink>
                <span>{props.name}</span>
            </div>
        </div>
 </section>
<section className="home-icon blog-main-section shop-page">
                    <div className="icon-default">
                        <img src="images/scroll-arrow.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="portfolioFilter">
                            <div className="portfolioFilter-inner bg-skeen">
                                <a href="javascript:;" data-filter=".breakfast" className="current">BREAKFAST</a>
                                <a href="javascript:;" data-filter=".dessert">DESSERT</a>
                                <a href="javascript:;" data-filter=".dinner">DINNER</a>
                                <a href="javascript:;" data-filter=".freshfood">FRESHFOOD</a>
                                <a href="javascript:;" data-filter=".lunch">LUNCH</a>
                            </div>
                        </div>
                        <div className="portfolioContainer row" data-defaultfilter=".breakfast">
                            <div className="col-md-3 col-sm-4 col-xs-12 breakfast dessert dinner wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="shop-main-list">
                                    <div className="shop-product">
                                        <img src="images/img60.png" alt=""/>
                                        <div className="cart-overlay-wrap">
                                            <div className="cart-overlay">
                                                <a href="#" className="shop-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#"><h5>Paper Pouch</h5></a>
                                    <h5><strong>$ 15.00</strong></h5>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-12 breakfast dinner lunch wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="shop-main-list">
                                    <div className="shop-product">
                                        <img src="images/img59.png" alt=""/>
                                        <div className="cart-overlay-wrap">
                                            <div className="cart-overlay">
                                                <a href="#" className="shop-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#"><h5>Paper Pouch</h5></a>
                                    <h5><strong>$ 15.00</strong></h5>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-12 breakfast dessert wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="shop-main-list">
                                    <div className="shop-product">
                                        <img src="images/img59.png" alt=""/>
                                        <div className="cart-overlay-wrap">
                                            <div className="cart-overlay">
                                                <a href="#" className="shop-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#"><h5>Paper Pouch</h5></a>
                                    <h5><strong>$ 15.00</strong></h5>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-12 breakfast dinner wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="shop-main-list">
                                    <div className="shop-product">
                                        <img src="images/img59.png" alt=""/>
                                        <div className="cart-overlay-wrap">
                                            <div className="cart-overlay">
                                                <a href="#" className="shop-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#"><h5>Paper Pouch</h5></a>
                                    <h5><strong>$ 15.00</strong></h5>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-12 breakfast freshfood wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="shop-main-list">
                                    <div className="shop-product">
                                        <img src="images/img60.png" alt=""/>
                                        <div className="cart-overlay-wrap">
                                            <div className="cart-overlay">
                                                <a href="#" className="shop-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#"><h5>Paper Pouch</h5></a>
                                    <h5><strong>$ 15.00</strong></h5>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-12 breakfast lunch wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="shop-main-list">
                                    <div className="shop-product">
                                        <img src="images/img60.png" alt=""/>
                                        <div className="cart-overlay-wrap">
                                            <div className="cart-overlay">
                                                <a href="#" className="shop-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#"><h5>Paper Pouch</h5></a>
                                    <h5><strong>$ 15.00</strong></h5>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-12 breakfast freshfood wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="shop-main-list">
                                    <div className="shop-product">
                                        <img src="images/img60.png" alt=""/>
                                        <div className="cart-overlay-wrap">
                                            <div className="cart-overlay">
                                                <a href="#" className="shop-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#"><h5>Paper Pouch</h5></a>
                                    <h5><strong>$ 15.00</strong></h5>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-12 breakfast lunch wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="shop-main-list">
                                    <div className="shop-product">
                                        <img src="images/img60.png" alt=""/>
                                        <div className="cart-overlay-wrap">
                                            <div className="cart-overlay">
                                                <a href="#" className="shop-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#"><h5>Paper Pouch</h5></a>
                                    <h5><strong>$ 15.00</strong></h5>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-pagination">
                            <div className="gallery-pagination-inner">
                                <ul>
                                    <li><a href="#" className="pagination-prev"><i className="fa fa-arrow-left" aria-hidden="true"></i> <span>PREV page</span></a></li>
                                    <li className="active"><a href="#"><span>1</span></a></li>
                                    <li><a href="#"><span>2</span></a></li>
                                    <li><a href="#"><span>3</span></a></li>
                                    <li><a href="#" className="pagination-next"><span>next page</span> <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
    </>);
}
export default Shop;