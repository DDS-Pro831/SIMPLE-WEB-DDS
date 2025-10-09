// Ubicación: src/features/clients/pages/ClientsPage.tsx
// Propósito: Página “Clientes” que encapsula la sección ClientsSection.

import React, { useEffect } from "react";
import ClientsSection from "../components/ClientsSection";

const ClientsPage: React.FC = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Clientes — Data Driven Solutions";
    return () => { document.title = prev; };
  }, []);

  return (
    <main aria-label="Clientes">
      <ClientsSection />
    </main>
  );
};

export default ClientsPage;
