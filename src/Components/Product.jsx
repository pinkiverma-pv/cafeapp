import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Product() {
  return (<>
  <section className="dishes banner_bg invert invert-black home-icon wow fadeInDown" style={ { backgroundImage: "url('images/banner1.jpg')" } } data-wow-duration="1000ms" data-wow-delay="300ms">
    <div className="icon-default icon-black">
        <img src="images/icon5.png" alt="" />
    </div>
    <div className="container">
    <div className="build-title">
        <h2>Welcome To The La Boom</h2>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
    </div>
    <div className="slider multiple-items">
  <OwlCarousel
    className="owl-theme"
    loop
    margin={50}
    nav
    items={3}
    dots={false}
    smartSpeed={700}
    autoPlay={true}
>
     
<div className="item">
    <div className="product-blog">
       <img src="images/product1.png" alt="" />
       <h3>Quattro Formaggi</h3>
       <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</p>
       <del>$ 55.00</del><strong className="txt-default">$ 18.00</strong>
   </div>
</div>
<div className="item">
    <div className="product-blog">
       <img src="images/product2.png" alt="" />
       <h3>Quattro Formaggi</h3>
       <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</p>
       <del>$ 55.00</del><strong className="txt-default">$ 18.00</strong>
   </div>
</div>
<div className="item">
    <div className="product-blog">
       <img src="images/product3.png" alt="" />
       <h3>Quattro Formaggi</h3>
       <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</p>
       <del>$ 55.00</del><strong className="txt-default">$ 18.00</strong>
   </div>
</div>
<div className="item">
    <div className="product-blog">
       <img src="images/product1.png" alt="" />
       <h3>Quattro Formaggi</h3>
       <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</p>
       <del>$ 55.00</del><strong className="txt-default">$ 18.00</strong>
   </div>
</div>
<div className="item">
    <div className="product-blog">
       <img src="images/product2.png" alt="" />
       <h3>Quattro Formaggi</h3>
       <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</p>
       <del>$ 55.00</del><strong className="txt-default">$ 18.00</strong>
   </div>
</div>
<div className="item">
    <div className="product-blog">
       <img src="images/product3.png" alt="" />
       <h3>Quattro Formaggi</h3>
       <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</p>
       <del>$ 55.00</del><strong className="txt-default">$ 18.00</strong>
   </div>
</div>
</OwlCarousel>
</div>  
</div> 
</section>
     
  </>);
}

export default Product;
