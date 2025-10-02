import React from "react";
import "./mission-vision.css";

const MissionVision: React.FC = () => {
  return (
    <section className="dd-mv" id="mision-vision" aria-labelledby="mv-title">
      {/* patrón de puntos decorativo */}
      <div className="dd-mv-bg" aria-hidden="true" />

      <div className="dd-mv-grid">
        <article className="dd-mv-card" role="region" aria-labelledby="mv-m-title">
          <h2 id="mv-m-title" className="dd-mv-title">Misión</h2>
          <p>
            Empoderar a organizaciones para tomar decisiones basadas en datos mediante soluciones
            tecnológicas accesibles, personalizadas y orientadas a resultados. Enfocados en transformar
            procesos, visibilizar información crítica y automatizar tareas clave, generando impactos
            reales en la eficiencia operativa, la agilidad estratégica y la rentabilidad de nuestros clientes.
          </p>
        </article>

        <article className="dd-mv-card" role="region" aria-labelledby="mv-v-title">
          <h2 id="mv-v-title" className="dd-mv-title">Visión</h2>
          <p>
            Ser la consultora tecnológica de referencia en Latinoamérica para organizaciones que buscan
            escalar, optimizar y transformar su operación sin depender de soluciones complejas ni costosas.
            Aspiramos a democratizar el acceso a herramientas inteligentes, ágiles y efectivas que
            permitan competir en cualquier entorno, con decisiones mejor fundamentadas.
          </p>
        </article>
      </div>
    </section>
  );
};

export default MissionVision;
