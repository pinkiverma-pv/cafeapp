import React from 'react';

function Contact() {
  return (<>
    <section className="contact-map">
                    <div className="map-outer">
                        <div id="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279909073!2d-74.25987368715491!3d40.69767006458873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1598423043042!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
                    </div>
                </section>
               
                <section className="default-section contact-part home-icon">
                    <div className="icon-default">
                        <img src="images/scroll-arrow.png" alt="" />
                    </div>
                    <div className="container">
                        <div className="title text-center">
                            <h2 className="text-coffee">Contact Us</h2>
                            <h6 className="heade-xs">We are a second-generation family business established in 1972</h6>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-sm-8 col-xs-12 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <h5 className="text-coffee">Leave us a Message</h5>
                                <p>Aenean massa diam, viverra vitae luctus sed, gravida eget est. Etiam nec ipsum porttitor, consequat libero eu, dignissim eros. Nulla auctor lacinia enim id mollis.</p>
                                <form className="form" method="post" name="contact-form">
                                    <div className="alert-container"></div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <label>First Name *</label>
                                            <input name="first_name" type="text" required />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <label>Last Name *</label>
                                            <input name="last_name" type="text" required />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <label>Email *</label>
                                            <input name="email" type="email" required />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <label>Subject *</label>
                                            <input name="subject" type="text" required />
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <label>Your Message *</label>
                                            <textarea name="message" required></textarea>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <input name="submit" value="SEND MESSAGE" className="btn-black pull-right send_message" type="submit" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <address>
                                    <span className="text-primary co-title">Our Address</span>
                                    <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                                    <p><a href="tel:1234567890">123 456 7890</a>
                                        <br /> <a href="mailto:support@despina.com">support@despina.com</a></p>
                                </address>
                                <h5 className="text-coffee">Opening Hours</h5>
                                <ul className="time-list">
                                    <li><span className="week-name">Monday</span> <span>12-6 PM</span></li>
                                    <li><span className="week-name">Tuesday</span> <span>12-6 PM</span></li>
                                    <li><span className="week-name">Wednesday</span> <span>12-6 PM</span></li>
                                    <li><span className="week-name">Thursday</span> <span>12-6 PM</span></li>
                                    <li><span className="week-name">Friday</span> <span>12-6 PM</span></li>
                                    <li><span className="week-name">Saturday</span> <span>12-6 PM</span></li>
                                    <li><span className="week-name">Sunday</span> <span>Closed</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
  </>);
}

export default Contact;
