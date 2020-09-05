import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Gallery() {
  return (<>
  <section className="instagram-main home-icon wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
    <div className="icon-default">
        <img src="images/icon23.png" alt="" />
    </div>
    <div className="container">
    <div className="build-title">
        <h2>#laboom</h2>
        <h6>Enjoyed your stay at La Boom? Share your moments with us. Follow us on Instagram and use</h6>
    </div>
    <div className="gallery-slider">
  <OwlCarousel
    className="owl-theme"
    loop
    margin={20}
    nav
    items={6}
    dots={false}
    smartSpeed={700}
    autoPlay={true}
>
<div className="item">
    <a href="images/gallery/gallery-big1.jpeg" className="magnific-popup">
        <img src="images/gallery/gallery1.png" alt="" className="animated" />
        <div className="gallery-overlay">
            <div className="gallery-overlay-inner">
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
    </a>
</div>
<div className="item">
    <a href="images/gallery/gallery-big2.jpeg" className="magnific-popup">
        <img src="images/gallery/gallery2.png" alt="" className="animated" />
        <div className="gallery-overlay">
            <div className="gallery-overlay-inner">
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
    </a>
</div>
<div className="item">
    <a href="images/gallery/gallery-big3.jpeg" className="magnific-popup">
        <img src="images/gallery/gallery3.png" alt="" className="animated" />
        <div className="gallery-overlay">
            <div className="gallery-overlay-inner">
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
    </a>
</div>
<div className="item">
    <a href="images/gallery/gallery-big4.jpeg" className="magnific-popup">
        <img src="images/gallery/gallery4.png" alt="" className="animated" />
        <div className="gallery-overlay">
            <div className="gallery-overlay-inner">
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
    </a>
</div>
<div className="item">
    <a href="images/gallery/gallery-big5.jpeg" className="magnific-popup">
        <img src="images/gallery/gallery5.png" alt="" className="animated" />
        <div className="gallery-overlay">
            <div className="gallery-overlay-inner">
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
    </a>
</div>
<div className="item">
    <a href="images/gallery/gallery-big6.jpeg" className="magnific-popup">
        <img src="images/gallery/gallery6.png" alt="" className="animated" />
        <div className="gallery-overlay">
            <div className="gallery-overlay-inner">
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
    </a>
</div>
<div className="item">
    <a href="images/gallery/gallery-big1.jpeg" className="magnific-popup">
        <img src="images/gallery/gallery1.png" alt="" className="animated" />
        <div className="gallery-overlay">
            <div className="gallery-overlay-inner">
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
    </a>
</div>
<div className="item">
    <a href="images/gallery/gallery-big2.jpeg" className="magnific-popup">
        <img src="images/gallery/gallery2.png" alt="" className="animated" />
        <div className="gallery-overlay">
            <div className="gallery-overlay-inner">
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
    </a>
</div>
</OwlCarousel>
</div>
</div>
</section>     
</>);
}

export default Gallery;
