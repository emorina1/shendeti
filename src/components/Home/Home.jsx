import React, { useState, useEffect } from "react";
import "./Home.css";

import homeImage2 from "../../imgs/Doki1.png";
import homeImage3 from "../../imgs/Doki2.png";


const images = [ homeImage2, homeImage3];

const quotes = [
 
  {
    text: "“Një mendje e shëndoshë qëndron në një trup të shëndoshë.”"
  },
  {
    text: "“Kujdesu për trupin tënd, është i vetmi vend ku duhet të jetosh.”"
  },
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showWelcomePage, setShowWelcomePage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomePage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="home-container">
      {showWelcomePage ? (
        <section className="welcome-page">
        <video
  src="/Video.mp4"
  autoPlay
  muted
  loop
  className="welcome-video"
/>

          <div className="welcome-text">
            <h1>Mirësevini në Shëndetin Tuaj!</h1>
            <p>
              Ne jemi këtu për t'ju udhëzuar në rrugën drejt një jete më të
              shëndetshme dhe më të lumtur.
            </p>
          </div>
        </section>
      ) : (
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title quote-text">{quotes[currentImage].text}</h1>
          </div>

          <div className="hero-image-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Shëndet i mirë ${index}`}
                className={`hero-image ${currentImage === index ? "visible" : ""}`}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
