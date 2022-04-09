import React from 'react';
import image from './img/home-care-services.jpg';
const About = (props) => {
  return (
    <>
      <section className="about" id="section-about">
        <div className="service-header">
          <h1>About</h1>
        </div>
        <div className="about-head">Bali Home care services</div>
        <div className="about-detail">
          <div>
            <img src={image} alt="Bali Home care services"></img>
          </div>
          Bali Home care services is the home care service provider located in
          Vancouver(BC, Canada), that provides professional caregivers in the
          individual home where the patient or client is living. Our
          organization provides range of services, including paramedical aid by
          nurses and assistance in daily living for ill, disabled or elderly
          people. We also provide special care to Covid Patients in there own
          homes.
        </div>
      </section>
    </>
  );
};
export default About;
