// Ubicación: src/features/home/components/Hero.tsx
// Propósito: Sección Hero con soporte i18n (namespace "home"), textos traducibles y accesibles.
// Depende de: ../styles/hero.css y archivos locales en src/features/home/locales/*

import React from "react";
import "../styles/hero.css";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation("home");

  return (
    <section className="dd-hero" id="top" role="region" aria-label={t("aria.hero")}>
      <div className="dd-hero-overlay">
        <div className="dd-hero-content">
          <h1
            dangerouslySetInnerHTML={{ __html: t("headline") }}
          />
          <p>{t("subtext")}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
