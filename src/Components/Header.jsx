import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (<>
   <header>
            <div className="header-part header-reduce sticky">
                <div className="header-top">
                    <div className="container">
                        <div className="header-top-inner">
                            <div className="header-top-left">
                                <a href="#" className="top-cell"><img src="images/fon.png" alt="" /> <span>123-456-7890</span></a>
                                <a href="#" className="top-email"><span>support@laboom.com</span></a>
                            </div>
                            <div className="header-top-right">
                                <div className="social-top">
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
                <div className="header-bottom">
                    <div className="container">
                        <div className="header-info">
                            <div className="header-info-inner">
                                <div className="book-table header-collect book-md">
                                    <a href="#" data-toggle="modal" data-target="#booktable"><img src="images/icon-table.png" alt="" />Book a Table</a>
                                </div>
                                <div className="shop-cart header-collect">
                                    <a href="#"><img src="images/icon-basket.png" alt="" />2 items - $ 20.89</a>
                                    <div className="cart-wrap">
                                        <div className="cart-blog">
                                            <div className="cart-item">
                                                <div className="cart-item-left">
                                                    <img src="images/img59.png" alt="" />
                                                </div>
                                                <div className="cart-item-right">
                                                    <h6>Caramel Chesse Cake</h6>
                                                    <span>$ 14.00</span>
                                                </div>
                                                <span className="delete-icon"></span>
                                            </div>
                                            <div className="cart-item">
                                                <div className="cart-item-left">
                                                    <img src="images/img60.png" alt="" />
                                                </div>
                                                <div className="cart-item-right">
                                                    <h6>Caramel Chesse Cake</h6>
                                                    <span>$ 14.00</span>
                                                </div>
                                                <span className="delete-icon"></span>
                                            </div>
                                            <div className="subtotal">
                                                <div className="col-md-6 col-sm-6 col-xs-6">
                                                    <h6>Subtotal :</h6>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-6">
                                                    <span>$ 140.00</span>
                                                </div>
                                            </div>
                                            <div className="cart-btn">
                                                <a href="#" className="btn-black view">VIEW ALL</a>
                                                <a href="#" className="btn-main checkout">CHECK OUT</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="search-part">
                                    <a href="#"></a>
                                    <div className="search-box">
                                        <input type="text" name="txt" placeholder="Search" />
                                        <input type="submit" name="submit" value=" " />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="menu-icon">
                            <a href="#" className="hambarger">
                                <span className="bar-1"></span>
                                <span className="bar-2"></span>
                                <span className="bar-3"></span>
                            </a>
                        </div>
                        <div className="book-table header-collect book-sm">
                            <a href="#" data-toggle="modal" data-target="#booktable"><img src="images/icon-table.png" alt="" />Book a Table</a>
                        </div>
                        <div className="menu-main">
                            <ul>
                            <li className="has-child">
                                <NavLink exact activeClassName="active_class" to="/">
                                 Home
                                </NavLink>
                            </li>
                            <li className="has-child">
                                <NavLink exact activeClassName="active_class" to="/services">
                                 Services
                                </NavLink>
                            </li>
                            <li className="has-child">
                                <NavLink exact activeClassName="active_class" to="/shop">
                                 Shop
                                </NavLink>
                            </li>
                            <li className="has-child">
                                <NavLink exact activeClassName="active_class" to="/blog">
                                 Blog
                                </NavLink>
                            </li>     
                            <li className="has-child">
                                <NavLink exact activeClassName="active_class" to="/contact">
                                 Contact
                                </NavLink>
                            </li>                           
                            </ul>
                        </div>
                        <div className="logo">
                            <a href="index.html"><img src="images/logo.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  </>);
}

export default Header;
