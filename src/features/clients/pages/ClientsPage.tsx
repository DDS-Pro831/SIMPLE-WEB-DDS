// Ubicación: src/features/clients/pages/ClientsPage.tsx
// Propósito: Página “Clientes” que encapsula la sección ClientsSection con SEO por idioma.

import React, { useEffect } from "react";
import ClientsSection from "../components/ClientsSection";
import { useTranslation } from "react-i18next";

const ClientsPage: React.FC = () => {
  const { t } = useTranslation("clients");

  useEffect(() => {
    const prev = document.title;
    document.title = `${t("pageTitle")} — Data Driven Solutions`;
    return () => { document.title = prev; };
  }, [t]);

  return (
    <main aria-label={t("aria.page")}>
      <ClientsSection />
    </main>
  );
};

export default ClientsPage;
