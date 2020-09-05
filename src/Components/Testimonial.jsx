import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Testimonial() {
  return (<>
  <section className="client banner_bg invert invert-black home-icon wow fadeInDown" style={ { backgroundImage: "url('images/banner3.jpg')" } } data-wow-duration="1000ms" data-wow-delay="300ms">
    <div className="icon-default icon-black">
        <img src="images/icon21.png" alt="" />
    </div>
    <div className="container">
    <div className="build-title">
        <h2>What Clients Say</h2>
        <h6>1500+ Satisfied Clients</h6>
    </div>
    <div className="client-say">
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
<div className="item">
    <p><img src="images/client1.png" alt=""/></p>
    <h5>Alice Williams</h5>
    <p>Kitchen Manager</p>
    <p>Success isn’t really that difficult. There is a significant portion of the
        <br/> population here in North America, that actually want and need
        <br/>success really no magic to be hard.</p>
</div> 
<div className="item">
    <p><img src="images/client1.png" alt=""/></p>
    <h5>Alice Williams</h5>
    <p>Kitchen Manager</p>
    <p>Success isn’t really that difficult. There is a significant portion of the
        <br/> population here in North America, that actually want and need
        <br/>success really no magic to be hard.</p>
</div>    
<div className="item">
    <p><img src="images/client1.png" alt=""/></p>
    <h5>Alice Williams</h5>
    <p>Kitchen Manager</p>
    <p>Success isn’t really that difficult. There is a significant portion of the
        <br/> population here in North America, that actually want and need
        <br/>success really no magic to be hard.</p>
</div>       
</OwlCarousel>
</div>
</div>
</section>     
</>);
}

export default Testimonial;
