// Ubicación: src/features/clients/components/ClientsSection.tsx
// Propósito: Sección “Nuestros Clientes”, i18n-ready (namespace "clients").
// Estilos: ../styles/clients.css

import React from "react";
import "../styles/clients.css";
import { useTranslation } from "react-i18next";

type ClientItem = {
  name: string; // nombre comercial (no se traduce)
  src: string;
  href?: string;
};

const items: ClientItem[] = [
  { name: "VetSoft",      src: "/client1.png" },
  { name: "IG Solutions", src: "/client2.png" },
  { name: "H&D Bakery",   src: "/client3.png" },
  { name: "eCloud",       src: "/client4.png" },
];

const ClientsSection: React.FC = () => {
  const { t } = useTranslation("clients");

  return (
    <section
      className="dd-clients"
      id="clientes"
      role="region"
      aria-labelledby="clients-title"
      aria-label={t("aria.section")}
    >
      <div className="dd-clients__container">
        <h2 id="clients-title" className="dd-clients__title">
          {t("title")}
        </h2>

        <ul className="dd-clients__grid">
          {items.map((c) => {
            const img = (
              <img
                src={c.src}
                alt={c.name} // marca comercial (no traducir)
                loading="lazy"
                width={140}
                height={140}
              />
            );

            return (
              <li key={c.name} className="dd-clients__item">
                {c.href ? (
                  <a
                    className="dd-clients__link"
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${t("aria.logoLink")} ${c.name}`}
                    title={`${t("aria.logoLink")} ${c.name}`}
                  >
                    {img}
                  </a>
                ) : (
                  img
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ClientsSection;
