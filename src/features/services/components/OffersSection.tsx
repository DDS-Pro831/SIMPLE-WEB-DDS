/**
 * src/features/services/components/OffersSection.tsx
 *
 * Sección "¿Qué ofrecemos?" con i18n (namespace "services").
 *
 * ── Cambio respecto a versión anterior ──────────────────────
 * Los ítems ahora se renderizan dinámicamente desde los locales.
 * Antes: 5 ítems hardcodeados en JSX (offer1…offer5).
 * Ahora: array "offers" en los JSON de locales, leído con
 *        t("offers", { returnObjects: true }).
 *
 * Estructura esperada en locales/es.json y locales/en.json:
 * {
 *   "offerTitle": "...",
 *   "aria": { "offerSection": "..." },
 *   "offers": [
 *     { "title": "...", "text": "..." },
 *     { "title": "...", "text": "..." },
 *     ...
 *   ]
 * }
 *
 * Ventaja: añadir o quitar ítems solo requiere editar el JSON,
 * sin tocar el componente.
 *
 * ── Accesibilidad ────────────────────────────────────────────
 * - <ol> semántico para lista ordenada de servicios
 * - <figure aria-hidden> para imagen decorativa
 * - aria-labelledby apunta a h2#offer-title
 */

import React from "react";
import "../styles/services.css";
import { useTranslation } from "react-i18next";

interface OfferItem {
  title: string;
  text:  string;
}

const OffersSection: React.FC = () => {
  const { t } = useTranslation("services");

  /*
   * returnObjects: true devuelve el array completo del JSON.
   * El cast a OfferItem[] es seguro porque controlamos la
   * estructura de los locales.
   */
  const offers = t("offers", { returnObjects: true }) as OfferItem[];

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

        {/* Mockup de teléfono / dashboard — decorativo */}
        <figure className="dd-offer-phone" aria-hidden="true">
          <img
            src="/offers-cellphone.png"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </figure>

        {/* Lista de servicios — renderizada desde locales */}
        <ol className="dd-offer-list">
          {offers.map((offer, i) => (
            <li key={i}>
              <div className="dd-offer-item">
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default OffersSection;