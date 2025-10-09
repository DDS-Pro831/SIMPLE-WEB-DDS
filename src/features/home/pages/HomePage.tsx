// Ubicación: src/features/home/pages/HomePage.tsx
// Propósito: Página de portada (Home). Muestra solo el hero full-screen con CTA.
// Notas: No renderiza más secciones; el resto vive en rutas independientes.

import React, { useEffect } from "react";
import "../styles/hero.css";
import Hero from "../components/Hero";

const HomePage: React.FC = () => {
  // SEO mínimo de la ruta Home
  useEffect(() => {
    const prev = document.title;
    document.title = "Data Driven Solutions — Transformamos tus datos en decisiones inteligentes";
    return () => { document.title = prev; };
  }, []);

  return (
    <main id="home" aria-label="Página de inicio">
      <Hero />
      {/* Importante: no agregamos más contenido aquí. El resto irá en otras rutas. */}
    </main>
  );
};

export default HomePage;
