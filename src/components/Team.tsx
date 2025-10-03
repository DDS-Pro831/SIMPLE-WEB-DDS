import React from "react";
import "./team.css";
import NodeBallTeam from "./NodeBallTeam";

type Member = {
  name: string;
  role: string;
  degree: string;
  photo: string;
  alt?: string;
};

const MEMBERS: Member[] = [
  {
    name: "Gabriel Alejandro Vera Pinto",
    role: "Director de Tecnología y Operaciones",
    degree: "Ing. de Sistemas MSc MBA",
    photo: "Gabriel-min.jpg",
    alt: "Gabriel Vera"
  },
  {
    name: "Daniela Holguín Michel",
    role: "Directora de Estrategia y Marketing",
    degree: "Psicóloga MSc MBA",
    photo: "Daniela.png",
    alt: "Daniela Holguín"
  },
  {
    name: "Santiago Vega",
    role: "Consultor Externo de Desarrollo Estratégico",
    degree: "Administrador de Empresas; Ing. Industrial MSc",
    photo: "Santiago-min.png",
    alt: "Santiago Vega"
  },
  {
    name: "Emanuel Gonzales Quiroz",
    role: "Full Stack Developer",
    degree: "Ing. de Sistemas",
    photo: "Emanuel-min.jpg",
    alt: "Emanuel Gonzales"
  },
  {
    name: "Kevin Uruchi Coarite",
    role: "Full Stack Developer",
    degree: "Ing. de Sistemas",
    photo: "Kiwi-min.png",
    alt: "Kevin Uruchi"
  },
  {
    name: "Edely Tito Laredo",
    role: "Business Analyst",
    degree: "Ing. de Sistemas",
    photo: "/Edely-min.jpg",
    alt: "Edely Tito"
  },
  {
    name: "Gerardo Morales López",
    role: "Business Analyst",
    degree: "Lic. en Adm. de Empresas",
    photo: "/Gerardo-min.jpg",
    alt: "Gerardo Morales"
  },
];

const Team: React.FC = () => {
  return (
    <section className="dd-team" id="equipo" aria-labelledby="team-title">
      <NodeBallTeam />
      <div className="dd-team-bg" aria-hidden="true" />
      <div className="dd-team-inner">
        <h2 id="team-title" className="dd-team-title">Nuestro equipo</h2>
        <ul className="dd-team-grid">
          {MEMBERS.map((m) => (
            <li key={m.name} className="dd-team-card">
              <figure className="dd-team-photo">
                <img src={m.photo} alt={m.alt ?? `Foto de ${m.name}`} loading="lazy" decoding="async" />
              </figure>

              <div className="dd-team-role">{m.role}</div>

              <div className="dd-team-person">
                <h3 className="dd-team-name">{m.name}</h3>
                <p className="dd-team-degree">{m.degree}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
