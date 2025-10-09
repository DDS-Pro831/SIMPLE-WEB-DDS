// Ubicación: src/features/about/components/MissionVision.tsx
// Propósito: Bloque “Misión y Visión” con soporte i18n (namespace "about").
// Estilos: ../styles/mission-vision.css

import React from "react";
import "../styles/mission-vision.css";
import { useTranslation } from "react-i18next";

const MissionVision: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <section
      className="dd-mv"
      id="mision-vision"
      role="region"
      aria-labelledby="mv-title"
      aria-label={t("mv.aria.section")}
    >
      {/* patrón de puntos decorativo */}
      <div className="dd-mv-bg" aria-hidden="true" />

      <div className="dd-mv-grid" role="group" aria-label={t("mv.aria.group")}>
        {/* Misión */}
        <article className="dd-mv-card" role="region" aria-labelledby="mv-m-title">
          <h2 id="mv-m-title" className="dd-mv-title">
            {t("mv.mission.title")}
          </h2>
          <p>{t("mv.mission.text")}</p>
        </article>

        {/* Visión */}
        <article className="dd-mv-card" role="region" aria-labelledby="mv-v-title">
          <h2 id="mv-v-title" className="dd-mv-title">
            {t("mv.vision.title")}
          </h2>
          <p>{t("mv.vision.text")}</p>
        </article>
      </div>
    </section>
  );
};

export default MissionVision;
