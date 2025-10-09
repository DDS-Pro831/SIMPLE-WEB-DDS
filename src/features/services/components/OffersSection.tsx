// Ubicación: src/features/services/components/OffersSection.tsx
// Propósito: Sección “¿Qué ofrecemos?” (servicios). Reutilizable dentro de ServicesPage.
// Estilos: ../styles/services.css (antes offers.css)

import React from "react";
import "../styles/services.css";

const OffersSection: React.FC = () => {
  return (
    <section className="dd-offer" id="ofrecemos" aria-labelledby="offer-title">
      <div className="dd-offer-grid">
        <h2 id="offer-title" className="dd-offer-title">
          ¿Qué ofrecemos?
        </h2>

        {/* Teléfono / dashboard */}
        <figure className="dd-offer-phone" aria-hidden="true">
          <img
            src="/offers-cellphone.png" /* cámbialo por la ruta en /public */
            alt=""
            loading="lazy"
            decoding="async"
          />
        </figure>

        {/* Lista numerada */}
        <ol className="dd-offer-list">
          <li>
            <div className="dd-offer-item">
              <h3>Inteligencia de negocios (BI)</h3>
              <p>
                Desarrollo de dashboards interactivos y reportes automatizados
                para facilitar decisiones basadas en datos reales.
              </p>
            </div>
          </li>
          <li>
            <div className="dd-offer-item">
              <h3>Automatización de procesos (low-code)</h3>
              <p>
                Implementación de flujos automatizados que eliminan tareas
                repetitivas, mejoran la trazabilidad y reducen errores
                operativos.
              </p>
            </div>
          </li>
          <li>
            <div className="dd-offer-item">
              <h3>Desarrollo de soluciones web personalizadas</h3>
              <p>
                Aplicaciones web internas adaptadas a necesidades específicas
                (control de tareas, CRM, gestión operativa, etc.).
              </p>
            </div>
          </li>
          <li>
            <div className="dd-offer-item">
              <h3>Diagnóstico de madurez tecnológica</h3>
              <p>
                Evaluación del estado digital y hoja de ruta para
                digitalización, automatización y escalabilidad.
              </p>
            </div>
          </li>
          <li>
            <div className="dd-offer-item">
              <h3>Capacitación y soporte</h3>
              <p>
                Formación práctica en herramientas provistas y acompañamiento
                técnico para garantizar adopción y evolución.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default OffersSection;
