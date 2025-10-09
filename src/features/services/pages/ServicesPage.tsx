import React, { useEffect } from "react";
import OffersSection from "../components/OffersSection";

const ServicesPage: React.FC = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Servicios — Data Driven Solutions";
    return () => { document.title = prev; };
  }, []);

  return (
    <main aria-label="Servicios">
      <OffersSection />
    </main>
  );
};

export default ServicesPage;
