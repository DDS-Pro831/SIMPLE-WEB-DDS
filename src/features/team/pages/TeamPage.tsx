// Ubicación: src/features/team/pages/TeamPage.tsx
// Propósito: Página “Equipo” que encapsula la sección TeamSection.

import React, { useEffect } from "react";
import TeamSection from "../components/TeamSection";

const TeamPage: React.FC = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Equipo — Data Driven Solutions";
    return () => { document.title = prev; };
  }, []);

  return (
    <main aria-label="Equipo">
      <TeamSection />
    </main>
  );
};

export default TeamPage;
