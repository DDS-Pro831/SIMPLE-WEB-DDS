// Ubicación: src/features/team/components/TeamSection.tsx
// Propósito: Sección “Nuestro equipo” con i18n (namespace "team").
// Estilos: ../styles/team.css
// Nota: las fotos viven en /public. Los textos (título, roles, grados) en locales/*

import React from "react";
import "../styles/team.css";
import NodeBallTeam from "@/core/components/NodeBallTeam";
import { useTranslation } from "react-i18next";

type Member = {
  id: string;       // clave para i18n (members.<id>.*)
  name: string;     // nombre propio (no se traduce)
  photo: string;
  alt?: string;     // alt genérico o específico (puede mantenerse sin traducir)
};

const MEMBERS: Member[] = [
  { id: "gabriel",  name: "Gabriel Alejandro Vera Pinto", photo: "/Gabriel-min.jpg", alt: "Gabriel Vera" },
  { id: "daniela",  name: "Daniela Holguín Michel",        photo: "/Daniela.png",     alt: "Daniela Holguín" },
  { id: "santiago", name: "Santiago Vega",                 photo: "/Santiago-min.png",alt: "Santiago Vega" },
  { id: "emanuel",  name: "Emanuel Gonzales Quiroz",       photo: "/Emanuel-min.jpg", alt: "Emanuel Gonzales" },
  { id: "kevin",    name: "Kevin Uruchi Coarite",          photo: "/Kiwi-min.png",    alt: "Kevin Uruchi" },
  { id: "edely",    name: "Edely Tito Laredo",             photo: "/Edely-min.jpg",   alt: "Edely Tito" },
  { id: "gerardo",  name: "Gerardo Morales López",         photo: "/Gerardo-min.jpg", alt: "Gerardo Morales" }
];

const TeamSection: React.FC = () => {
  const { t } = useTranslation("team");

  return (
    <section className="dd-team" id="equipo" aria-labelledby="team-title" aria-label={t("aria.section")}>
      <NodeBallTeam />
      <div className="dd-team-bg" aria-hidden="true" />
      <div className="dd-team-inner">
        <h2 id="team-title" className="dd-team-title">{t("title")}</h2>

        <ul className="dd-team-grid">
          {MEMBERS.map((m) => (
            <li key={m.id} className="dd-team-card">
              <figure className="dd-team-photo">
                <img
                  src={m.photo}
                  alt={m.alt ?? t("aria.photoAlt", { name: m.name })}
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              {/* Rol traducido */}
              <div className="dd-team-role">{t(`members.${m.id}.role`)}</div>

              <div className="dd-team-person">
                {/* Nombre propio sin traducir */}
                <h3 className="dd-team-name">{m.name}</h3>
                {/* Grado / formación traducida */}
                <p className="dd-team-degree">{t(`members.${m.id}.degree`)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeamSection;
