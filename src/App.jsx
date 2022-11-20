import React, { Fragment } from "react";
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Technologies from "./components/technologies/Technologies";


function App() {
  return (
<Fragment>
  <Header />
  <Nav />
  <About />
  <Experience />
  <Portfolio />
  <Technologies/>
  <Contact />
  <Footer />
</Fragment>
  );
}

export default App;
