import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Featureblog() {
  return (<>
  <section className="feature-blog-wrap bg-skeen home-icon wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
    <div className="icon-default icon-skeen">
        <img src="images/icon20.png" alt="" />
    </div>
    <div className="container">
    <div className="build-title">
        <h2>Feature Blog</h2>
        <h6>Read Latest Delicious Posts And News</h6>
    </div>
    <div className="feature-blog">
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
    <div className="feature-img">
        <img src="images/feature1.jpg" alt="" />
        <div className="date-feature">27
            <br/> <small>may</small></div>
    </div>
    <div className="feature-info">
        <span><i className="icon-user"></i> By Ali TUFAN</span>
        <span><i className="icon-comment"></i> 5 Comments</span>
        <h5>Easy Sparkling Sangria</h5>
        <p>Aptent taciti sociosqu ad litora euismod atras vulputate iltricies etri elit className.</p>
        <a href="#">Read More <i className="icon-more"></i></a>
    </div>
</div>
<div className="item">
    <div className="feature-img">
        <img src="images/feature2.jpg" alt="" />
        <div className="date-feature">27
            <br/> <small>may</small></div>
    </div>
    <div className="feature-info">
        <span><i className="icon-user"></i> By Ali TUFAN</span>
        <span><i className="icon-comment"></i> 5 Comments</span>
        <h5>Easy Sparkling Sangria</h5>
        <p>Aptent taciti sociosqu ad litora euismod atras vulputate iltricies etri elit className.</p>
        <a href="#">Read More <i className="icon-more"></i></a>
    </div>
</div>
<div className="item">
    <div className="feature-img">
        <img src="images/feature3.jpg" alt="" />
        <div className="date-feature">27
            <br/> <small>may</small></div>
    </div>
    <div className="feature-info">
        <span><i className="icon-user"></i> By Ali TUFAN</span>
        <span><i className="icon-comment"></i> 5 Comments</span>
        <h5>Easy Sparkling Sangria</h5>
        <p>Aptent taciti sociosqu ad litora euismod atras vulputate iltricies etri elit className.</p>
        <a href="#">Read More <i className="icon-more"></i></a>
    </div>
</div>
<div className="item">
    <div className="feature-img">
        <img src="images/feature1.jpg" alt="" />
        <div className="date-feature">27
            <br/> <small>may</small></div>
    </div>
    <div className="feature-info">
        <span><i className="icon-user"></i> By Ali TUFAN</span>
        <span><i className="icon-comment"></i> 5 Comments</span>
        <h5>Easy Sparkling Sangria</h5>
        <p>Aptent taciti sociosqu ad litora euismod atras vulputate iltricies etri elit className.</p>
        <a href="#">Read More <i className="icon-more"></i></a>
    </div>
</div>
<div className="item">
    <div className="feature-img">
        <img src="images/feature2.jpg" alt="" />
        <div className="date-feature">27
            <br/> <small>may</small></div>
    </div>
    <div className="feature-info">
        <span><i className="icon-user"></i> By Ali TUFAN</span>
        <span><i className="icon-comment"></i> 5 Comments</span>
        <h5>Easy Sparkling Sangria</h5>
        <p>Aptent taciti sociosqu ad litora euismod atras vulputate iltricies etri elit className.</p>
        <a href="#">Read More <i className="icon-more"></i></a>
    </div>
</div>
<div className="item">
    <div className="feature-img">
        <img src="images/feature3.jpg" alt="" />
        <div className="date-feature">27
            <br/> <small>may</small></div>
    </div>
    <div className="feature-info">
        <span><i className="icon-user"></i> By Ali TUFAN</span>
        <span><i className="icon-comment"></i> 5 Comments</span>
        <h5>Easy Sparkling Sangria</h5>
        <p>Aptent taciti sociosqu ad litora euismod atras vulputate iltricies etri elit className.</p>
        <a href="#">Read More <i className="icon-more"></i></a>
    </div>
</div>
</OwlCarousel>
</div>
</div>
</section>     
</>);
}

export default Featureblog;
