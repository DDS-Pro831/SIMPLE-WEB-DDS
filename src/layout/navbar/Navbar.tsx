// Ubicación: src/layout/navbar/Navbar.tsx
// Propósito: Navbar accesible con i18n (namespace "navbar") y switcher fijo arriba a la derecha.

import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import LanguageSwitcher from "@/core/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useTranslation("navbar");

  useEffect(() => {
    if (open) setOpen(false);
  }, [pathname, open]);

  const links = useMemo(
    () => [
      { to: "/sobre-nosotros", label: t("links.about") },
      { to: "/servicios", label: t("links.services") },
      { to: "/clientes", label: t("links.clients") },
      { to: "/equipo", label: t("links.team") },
    ],
    [t]
  );

  return (
    <header className="dd-header" role="banner" aria-label={t("aria.brand")}>
      {/* 🔹 Switch de idioma fijo al borde superior derecho */}
      <div className="dd-lang-global">
        <LanguageSwitcher compact />
      </div>

      <div className="dd-container">
        {/* Marca / Logo */}
        <Link className="dd-brand" to="/" aria-label={t("aria.brand")}>
          <img src="/logo.png" alt={t("aria.brand")} height={48} />
        </Link>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="dd-burger"
          aria-label={open ? t("aria.closeMenu") : t("aria.openMenu")}
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
          role="navigation"
          aria-label={t("aria.primary")}
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.tagName === "A") setOpen(false);
          }}
        >
          {links.map((lnk) => (
            <NavLink
              key={lnk.to}
              to={lnk.to}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {lnk.label}
            </NavLink>
          ))}

          {/* CTA Contacto al final */}
          <NavLink
            to="/contacto"
            className={({ isActive }) => `dd-btn ${isActive ? "active" : ""}`}
          >
            {t("links.contact")}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
