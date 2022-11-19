import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/ME.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__prologue">
          <h5 className="text-twitter">Hello I'm</h5>
          <h1>R. Wigar Wijaya W.</h1>
          <h5 className="text-twitter typewriter animation">Fullstack Web Developer</h5>
        </div>
        <CTA />
        <HeaderSocial />

        <div className="gradient"></div>
        <div className="me">
          <img src={ME} alt="profile" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
