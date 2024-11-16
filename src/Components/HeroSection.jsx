import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>¿Qué es una Estrategia y por qué es importante?</h1>
          <p>
            Conoce cómo las estrategias conectan recursos y objetivos para
            alcanzar el éxito.
          </p>
          <a className="cta-button" href="#definition">Descubre más</a>
        </div>
        <div className="hero-image">
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
