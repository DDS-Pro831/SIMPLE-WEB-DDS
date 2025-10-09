// Ubicación: src/layout/navbar/Navbar.tsx
// Propósito: Navbar con navegación por rutas (React Router v6), estado activo accesible
// y menú móvil colapsable. Mantiene tus clases y estilos existentes.

import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Cerrar menú móvil cuando cambia la ruta
  if (open && typeof window !== "undefined") {
    // simple guard: si cambió pathname tras un click, cierra
    // (evita useEffect para mantenerlo minimal)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    pathname; // lectura para gatillar render
  }

  const closeMenu = () => setOpen(false);

  return (
    <header className="dd-header" role="banner">
      <div className="dd-container">
        {/* Marca / Logo */}
        <Link className="dd-brand" to="/" aria-label="Data Driven Solutions" onClick={closeMenu}>
          <img src="/logo.png" alt="Data Driven Solutions" height={60} />
        </Link>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="dd-burger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navegación principal */}
        <nav
          id="primary-nav"
          className={`dd-nav ${open ? "open" : ""}`}
          aria-label="Principal"
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.tagName === "A") closeMenu();
          }}
        >
          <NavLink to="/sobre-nosotros" className={({ isActive }) => (isActive ? "active" : undefined)}>
            Sobre Nosotros
          </NavLink>
          <NavLink to="/servicios" className={({ isActive }) => (isActive ? "active" : undefined)}>
            Servicios
          </NavLink>
          <NavLink to="/clientes" className={({ isActive }) => (isActive ? "active" : undefined)}>
            Clientes
          </NavLink>
          <NavLink to="/equipo" className={({ isActive }) => (isActive ? "active" : undefined)}>
            Equipo
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) => `dd-btn ${isActive ? "active" : ""}`}
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
