// Ubicación: src/features/contact/pages/ContactPage.tsx
// Propósito: Página “Contacto” que encapsula la sección ContactSection.

import React, { useEffect } from "react";
import ContactSection from "../components/ContactSection";

const ContactPage: React.FC = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Contacto — Data Driven Solutions";
    return () => { document.title = prev; };
  }, []);

  return (
    <main aria-label="Contacto">
      <ContactSection />
    </main>
  );
};

export default ContactPage;
