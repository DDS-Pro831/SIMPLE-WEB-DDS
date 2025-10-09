// Ubicación: src/features/services/pages/ServicesPage.tsx
// Propósito: Página de Servicios (SEO + sección OffersSection)

import React, { useEffect } from "react";
import OffersSection from "../components/OffersSection";
import { useTranslation } from "react-i18next";

const ServicesPage: React.FC = () => {
  const { t } = useTranslation("services");

  // SEO mínimo por idioma
  useEffect(() => {
    const prev = document.title;
    document.title = `${t("pageTitle")} — Data Driven Solutions`;
    return () => {
      document.title = prev;
    };
  }, [t]);

  return (
    <main aria-label={t("aria.page")}>
      <OffersSection />
    </main>
  );
};

export default ServicesPage;
