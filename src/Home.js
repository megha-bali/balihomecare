import React from 'react';
import logoImg from './img/home.jpeg';
const Home = (props) => {
  return (
    <>
      <section id="sectionHome" className="children child1 dark-color">
        <div className="home-img">
          <img src={logoImg} alt="Bali HomeCare Services Home" />
        </div>
      </section>
    </>
  );
};
export default Home;
