import React, { useState, useEffect } from "react";
import "./Home.css";
import homeImage1 from "../../imgs/Doki3.png";
import homeImage2 from "../../imgs/Doki1.png";
import homeImage3 from "../../imgs/Doki2.png";

const images = [homeImage1, homeImage2, homeImage3];

const quotes = [
  {
    text: "“Shëndeti është pasuria më e madhe.”"
   
  },
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
    }, 3000); // 3 sekonda
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // çdo 4 sekonda
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="home-container">
      {showWelcomePage ? (
        <section className="welcome-page">
          <h1>Mirësevini në Shëndetin Tuaj!</h1>
          <p>Ne jemi këtu për t'ju udhëzuar në rrugën drejt një jete më të shëndetshme dhe më të lumtur.</p>
        </section>
      ) : (
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title quote-text">{quotes[currentImage].text}</h1>
            <p className="hero-author">— {quotes[currentImage].author}</p>
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
