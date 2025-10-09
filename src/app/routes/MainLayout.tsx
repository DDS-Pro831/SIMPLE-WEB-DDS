// Ubicación: src/app/routes/MainLayout.tsx
// Propósito: Layout global con Navbar arriba, Outlet en el centro y FooterReveal abajo.
// Notas: Evita duplicar Navbar/Footer fuera de este layout.

import { Outlet } from "react-router-dom";
import Navbar from "@/layout/navbar/Navbar";
import FooterReveal from "@/layout/footer-reveal/FooterReveal";

export default function MainLayout() {
  return (
    <>
      {/* Cabecera fija */}
      <Navbar />

      {/* Contenido dinámico de las rutas */}
      <div className="dds-layout-body dds-has-fixed-footer">
        <Outlet />
      </div>


      {/* Footer Reveal animado */}
      <FooterReveal />
    </>
  );
}
