// Ubicación: src/features/about/components/AboutSection.tsx
// Propósito: Componente “Sobre nosotros” i18n-ready, usando el namespace de módulo: "about".
// Depende de: ../styles/about.css, NodeBall, y archivos JSON de locales en src/features/about/locales/*

import React from "react";
import "../styles/about.css";
import NodeBall from "@/core/components/NodeBall";
import { useTranslation, Trans } from "react-i18next";

const AboutSection: React.FC = () => {
  const { t } = useTranslation("about"); // ← namespace por módulo

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
            alt="" /* Decorativa */
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* 2) Texto principal */}
        <div className="dd-about-content">
          <h2 id="about-title">{t("title")}</h2>
          <div className="dd-about-text">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </div>
        </div>

        {/* 3) Texto corto (con <strong>) */}
        <div className="dd-about2-text">
          <p>
            <Trans
              i18nKey="shortBlock"
              ns="about"
              components={{ strong: <strong /> }}
            />
          </p>
        </div>

        {/* 4) Imagen con doble borde */}
        <figure className="dd-about2-image">
          <img
            src="https://media-public.canva.com/4hqHU/MAFdvo4hqHU/1/s.jpg"
            alt={t("teamImageAlt")}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
};

export default AboutSection;
