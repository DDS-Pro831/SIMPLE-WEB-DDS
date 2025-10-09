// Ubicación: src/features/contact/components/ContactSection.tsx
// Propósito: Sección “Contacto” reusable dentro de la página Contact.
// Estilos: ../styles/contact.css

import React from "react";
import "../styles/contact.css";

const PhoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.31 1.77.57 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.09a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.61.57A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
    <path d="m22 6-10 7L2 6"/>
  </svg>
);

const IgIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.05C12.67 8.86 14.27 8 16.43 8 21 8 22 10.91 22 15.23V24h-4v-7.37c0-1.76-.03-4.03-2.46-4.03-2.46 0-2.84 1.92-2.84 3.91V24h-4V8z"/>
  </svg>
);

const items = [
  { label: "(591) 72031600", href: "https://wa.me/59172031600", icon: <PhoneIcon /> },
  { label: "(506) 6187 2840", href: "https://wa.me/50661872840", icon: <PhoneIcon /> },
  { label: "info@datadrivensolutions.dev", href: "mailto:info@datadrivensolutions.dev", icon: <MailIcon /> },
  { label: "@dds-dev", href: "https://instagram.com/dds-dev", icon: <IgIcon /> },
  { label: "linkedin.com/company/dds-dev", href: "https://www.linkedin.com/company/dds-dev", icon: <LinkedinIcon /> }
];

const ContactSection: React.FC = () => {
  return (
    <section className="dd-contact" id="contacto" aria-labelledby="dd-contact-title">
      <div className="dd-contact__container">
        <div className="dd-contact__left">
          <h2 id="dd-contact-title">Contacto</h2>
          <div className="dd-contact__brand">
            <img
              src="/logo-white.png"
              alt="Data Driven Solutions"
              className="dd-contact__logo"
            />
          </div>
        </div>

        <ul className="dd-contact__list">
          {items.map((it, i) => (
            <li key={i} className="dd-contact__item">
              <span className="dd-contact__icon">{it.icon}</span>
              {it.href ? (
                <a
                    href={it.href}
                    target={it.href.startsWith("http") ? "_blank" : undefined}
                    rel={it.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={it.label}
                    className="dd-contact__link"
                >
                  {it.label}
                </a>
              ) : (
                <span className="dd-contact__text">{it.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
