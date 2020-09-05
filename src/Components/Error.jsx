import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return(
    <>
        <main>
            <div className="main-part">
                <div className="error-404 banner_bg wow fadeInDown" style={ { backgroundImage: "url('images/banner1.jpg')" } }>
                    <div className="error-404-inner">
                        <div className="error-404-title">4 <img src="images/404.png" alt="" /> 4</div>
                        <h2>PAGE NOT FOUND</h2>
                        <p>Sorry, We couldn't find the page you're looking for.
                            <br/> Try returning to the <NavLink to="/">Homepage</NavLink> </p>
                    </div>
                </div>
            </div>
        </main>
    </>
    );
}

export default Error;
