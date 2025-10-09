// Ubicación: src/features/about/pages/AboutPage.tsx
// Propósito: Página “Sobre nosotros” que compone AboutSection + MissionVision.
// Nota: MissionVision ya trae su propio <section> y CSS, no lo volvemos a envolver.

import React, { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import MissionVision from "../components/MissionVision";

const AboutPage: React.FC = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Sobre nosotros — Data Driven Solutions";
    return () => { document.title = prev; };
  }, []);

  return (
    <main aria-label="Sobre nosotros">
      <AboutSection />
      <MissionVision />
    </main>
  );
};

export default AboutPage;
