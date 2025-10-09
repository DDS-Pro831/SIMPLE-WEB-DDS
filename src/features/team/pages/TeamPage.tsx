// Ubicación: src/features/team/pages/TeamPage.tsx
// Propósito: Página “Equipo” con título SEO dependiente de i18n (namespace "team").

import React, { useEffect } from "react";
import TeamSection from "../components/TeamSection";
import { useTranslation } from "react-i18next";

const TeamPage: React.FC = () => {
  const { t } = useTranslation("team");

  useEffect(() => {
    const prev = document.title;
    document.title = `${t("pageTitle")} — Data Driven Solutions`;
    return () => { document.title = prev; };
  }, [t]);

  return (
    <main aria-label={t("aria.page")}>
      <TeamSection />
    </main>
  );
};

export default TeamPage;
