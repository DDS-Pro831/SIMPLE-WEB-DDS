// Ubicación: src/features/services/components/OffersSection.tsx
// Propósito: Sección “¿Qué ofrecemos?” con i18n (namespace "services").
// Estilos: ../styles/services.css

import React from "react";
import "../styles/services.css";
import { useTranslation } from "react-i18next";

const OffersSection: React.FC = () => {
  const { t } = useTranslation("services");

  return (
    <section
      className="dd-offer"
      id="ofrecemos"
      role="region"
      aria-labelledby="offer-title"
      aria-label={t("aria.offerSection")}
    >
      <div className="dd-offer-grid">
        <h2 id="offer-title" className="dd-offer-title">
          {t("offerTitle")}
        </h2>

        {/* Teléfono / dashboard (decorativo) */}
        <figure className="dd-offer-phone" aria-hidden="true">
          <img
            src="/offers-cellphone.png" /* cámbialo por la ruta en /public si usas otra */
            alt=""
            loading="lazy"
            decoding="async"
          />
        </figure>

        {/* Lista numerada */}
        <ol className="dd-offer-list">
          <li>
            <div className="dd-offer-item">
              <h3>{t("offer1.title")}</h3>
              <p>{t("offer1.text")}</p>
            </div>
          </li>
          <li>
            <div className="dd-offer-item">
              <h3>{t("offer2.title")}</h3>
              <p>{t("offer2.text")}</p>
            </div>
          </li>
          <li>
            <div className="dd-offer-item">
              <h3>{t("offer3.title")}</h3>
              <p>{t("offer3.text")}</p>
            </div>
          </li>
          <li>
            <div className="dd-offer-item">
              <h3>{t("offer4.title")}</h3>
              <p>{t("offer4.text")}</p>
            </div>
          </li>
          <li>
            <div className="dd-offer-item">
              <h3>{t("offer5.title")}</h3>
              <p>{t("offer5.text")}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default OffersSection;
