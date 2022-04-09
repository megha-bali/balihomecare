import React from 'react';
import image from './img/logo.png';
const Contact = (props) => {
  return (
    <>
      <section className="about" id="section-contact">
        <div className="service-header">
          <h1>Contact</h1>
        </div>
        <div className="contact-detail">
          <div>
            <img src={image} alt="Bali Home care services" class="box"></img>
          </div>
          Looking for caretakers for your loved ones,
          <br /> Contact Bali Home care services.
          <div>Contact Number: +1 (236) 516-3294</div>
          <div>Email: balihomecare@gmail.com</div>
        </div>
      </section>
    </>
  );
};
export default Contact;
