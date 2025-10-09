// Ubicación: src/features/about/components/AboutSection.tsx
// Propósito: Componente “Sobre nosotros” (antes About.tsx) reusable dentro de la página About.
// Depende de: ../styles/about.css y del NodeBall global.

import React from "react";
import "../styles/about.css";
import NodeBall from "@/core/components/NodeBall";

const AboutSection: React.FC = () => {
  return (
    <section className="dd-about" id="about" aria-labelledby="about-title">
      {/* Fondo decorativo: no participa del grid */}
      <div className="dd-about-bg" aria-hidden="true">
        <NodeBall />
      </div>

      <div className="dd-about-grid">
        {/* 1) Ilustración izquierda */}
        <div className="dd-about-art" aria-hidden="true">
          <img
            src="https://media-public.canva.com/eyoZc/MAFdvgeyoZc/1/s.jpg"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* 2) Texto principal */}
        <div className="dd-about-content">
          <h2 id="about-title">¿Quiénes somos?</h2>
          <div className="dd-about-text">
            <p>
              En Data Driven Solutions ayudamos a las organizaciones a convertir
              sus datos en decisiones inteligentes.
            </p>
            <p>
              Somos una consultora tecnológica especializada en automatización
              de procesos, inteligencia de negocios y desarrollo de soluciones
              digitales personalizadas.
            </p>
            <p>
              Trabajamos de forma remota desde Bolivia con clientes en toda
              Norteamérica, Latinoamérica y el Caribe.
            </p>
          </div>
        </div>

        {/* 3) Texto corto */}
        <div className="dd-about2-text">
          <p>
            <strong>Nuestro enfoque combina herramientas accesibles</strong> con
            un alto impacto operativo, permitiendo a nuestros clientes optimizar
            recursos, escalar operaciones y mejorar su rentabilidad.
          </p>
        </div>

        {/* 4) Imagen con doble borde */}
        <figure className="dd-about2-image">
          <img
            src="https://media-public.canva.com/4hqHU/MAFdvo4hqHU/1/s.jpg"
            alt="Equipo de trabajo en reunión"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
};

export default AboutSection;
