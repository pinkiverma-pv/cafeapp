import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import Shop from './Components/Shop';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Error from './Components/Error';
import './App.css';




const App = () => {
  return (<>
  <Header/>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route  path="/services" render={ () => <Services name="Services"/>} />
    <Route  path="/shop" render={ () => <Shop name="Shop"/>} />
    <Route  path="/blog" render={ () => <Blog name="News"/>} />
    <Route  path="/contact" render={ () => <Contact name="Contact"/>} />
    <Route component={Error} />
  </Switch>
  <Footer/>
  </>);
}

export default App;
