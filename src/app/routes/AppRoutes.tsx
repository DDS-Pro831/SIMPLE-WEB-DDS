// Ubicación: src/app/routes/AppRoutes.tsx
// Propósito: Definir rutas con React Router v6 (Routes/Route/Navigate).

import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./MainLayout";

// Páginas (imports relativos, sin alias @)
import HomePage from "../../features/home/pages/HomePage";
import AboutPage from "../../features/about/pages/AboutPage";
import ServicesPage from "../../features/services/pages/ServicesPage";
import ClientsPage from "../../features/clients/pages/ClientsPage";
import TeamPage from "../../features/team/pages/TeamPage";
import ContactPage from "../../features/contact/pages/ContactPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Home */}
        <Route index element={<HomePage />} />
        {/* Páginas */}
        <Route path="sobre-nosotros" element={<AboutPage />} />
        <Route path="servicios" element={<ServicesPage />} />
        <Route path="clientes" element={<ClientsPage />} />
        <Route path="equipo" element={<TeamPage />} />
        <Route path="contacto" element={<ContactPage />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
