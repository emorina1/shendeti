import React from "react";
import Navbar from "../NavBar/NavBar"; // Importimi i Navbar-it
import "./Home.css";
import homeImage from "../../imgs/home.png";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar /> {/* Navbar-i vendosur sipër */}
      <section className="hero">
        <div className="hero-content">
          <h1>Mirësevini në Shëndetin Tuaj!</h1>
          <p>
            Angazhohuni për një jetë më të shëndetshme dhe të lumtur me ne. Ne ofrojmë këshilla 
            dhe burime që do t'ju ndihmojnë të zhvilloni zakone të shëndetshme për trupin dhe 
            mendjen tuaj, duke përmirësuar cilësinë e jetës suaj çdo ditë. Bashkohuni me ne dhe 
            bëni ndryshimin që do të ndikojë pozitivisht në shëndetin tuaj dhe në mirëqenien tuaj të përgjithshme.
          </p>
          <button className="cta-btn">Mëso më shumë</button>
        </div>
        <img src={homeImage} alt="Shëndet i mirë" />
      </section>
    </div>
  );
}
