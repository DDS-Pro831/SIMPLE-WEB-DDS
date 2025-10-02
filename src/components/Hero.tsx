import React from "react";
import "./hero.css";

const Hero: React.FC = () => {
  return (
    <section className="dd-hero" id="top">
      <div className="dd-hero-overlay">
        <div className="dd-hero-content">
          <h1>Transformamos tus datos en<br />decisiones inteligentes</h1>
          <p>
            Consultora tecnológica especializada en BI, automatización low-code
            y desarrollo web accesible. Desde Bolivia para toda América.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
