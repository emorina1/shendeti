import React from "react";
import './Home.css';
import homeImage from '../../imgs/home.png'; // Mund ta importoni si variabël për të përdorur më pas

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Mirësevini në Shëndetin Tuaj!</h1>
          <p>Angazhohuni për një jetë më të shëndetshme dhe të lumtur me ne. Ne ofrojmë këshilla dhe burime që do t'ju ndihmojnë të zhvilloni zakone të shëndetshme për trupin dhe mendjen tuaj, duke përmirësuar cilësinë e jetës suaj çdo ditë. Bashkohuni me ne dhe bëni ndryshimin që do të ndikojë pozitivisht në shëndetin tuaj dhe në mirëqenien tuaj të përgjithshme.</p>

          <button className="cta-btn">Mëso më shumë</button>
        </div>
        <img src={homeImage} alt="Shëndet i mirë" /> {/* Përdorni variablën */}
      </section>
    </div>
  );
}


