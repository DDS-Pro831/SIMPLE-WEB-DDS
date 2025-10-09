// Ubicación: src/features/contact/pages/ContactPage.tsx
// Propósito: Página “Contacto” con SEO dependiente de i18n (namespace "contact").

import React, { useEffect } from "react";
import ContactSection from "../components/ContactSection";
import { useTranslation } from "react-i18next";

const ContactPage: React.FC = () => {
  const { t } = useTranslation("contact");

  useEffect(() => {
    const prev = document.title;
    document.title = `${t("pageTitle")} — Data Driven Solutions`;
    return () => { document.title = prev; };
  }, [t]);

  return (
    <main aria-label={t("aria.page")}>
      <ContactSection />
    </main>
  );
};

export default ContactPage;
