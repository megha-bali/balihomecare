import React from 'react';
import logoImg from './img/logo.png';
const Header = (props) => {
  return (
    <>
      <header className="box">
        <div className="header">
          <div className="logo">
            <img src={logoImg} alt="Bali HomeCare Services" />
          </div>
          <div className="menu" id="menu">
            <div className="bar radius10 transition4"></div>
            <div className="bar radius10 transition4"></div>
            <div className="bar radius10 transition4"> </div>
          </div>
        </div>
        <nav className="transition4" id="navbar">
          <div className="navChild c1 active">
            <a href="#sectionHome">Home</a>
          </div>
          <div className="navChild c2">
            <a href="#sectionService">Care Services</a>
          </div>
          <div className="navChild c2">
            <a href="#section-about">About</a>
          </div>
          <div className="navChild c3">
            <a href="#section-contact">Contact</a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
