import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Slider.css'
function Slider() {
  return (<>
  <section className="home-slider">
        <div className="tp-banner-container">
            <div className="tp-banner">
  <OwlCarousel
    className="owl-theme"
    loop
    margin={0}
    nav
    items={1}
    dots={false}
    smartSpeed={700}
    autoPlay={true}
>
     
<div className="item fs-fullheight">
    <div className="normal-bg slider-bg" style={{backgroundImage: "url(" + "images/slider1.jpg" + ")"}}>
		<div className="fs-overlay overlay-bg"></div>
	</div>
	<div className="container">
	<div className="fs-slide-caption slotholder">
		<h1 className="tp-caption very_large_text start">WE’RE <span>LABOOM</span> <i>Restaurant</i>
        </h1>
		<p className="tp-caption medium_text start">Traditional Turkish Delicacies</p>
		<a href="#."  className="button-white">Explore NOW</a>
		</div>
	</div>
</div>
<div className="item fs-fullheight">
	<div className="normal-bg slider-bg" style={{ backgroundImage: "url(" + "images/slider1.jpg" + ")"}}>
		<div className="fs-overlay overlay-bg"></div>
	</div>
	<div className="container">
	<div className="fs-slide-caption slotholder text-light">
		<h1 className="tp-caption very_large_text start">WE’RE <span>LABOOM</span> <i>Restaurant</i>
        </h1>
		<p className="tp-caption medium_text start">Traditional Turkish Delicacies</p>
		<a href="#."  className="button-white">Explore NOW</a>
		</div>
	</div>
</div>
<div className="item fs-fullheight">
	<div className="normal-bg slider-bg" style={{backgroundImage: "url(" + "images/slider1.jpg" + ")"}}>
		<div className="fs-overlay overlay-bg"></div>
	</div>
	<div className="container">
	<div className="fs-slide-caption slotholder text-light">
		<h1 className="tp-caption very_large_text start">WE’RE <span>LABOOM</span> <i>Restaurant</i>
        </h1>
		<p className="tp-caption medium_text start">Traditional Turkish Delicacies</p>
		<a href="#."  className="button-white">Explore NOW</a>
		</div>
	</div>
</div>
</OwlCarousel>
</div>
</div>
</section>
     
  </>);
}

export default Slider;
