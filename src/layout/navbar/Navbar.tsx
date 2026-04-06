// src/layout/navbar/Navbar.tsx

import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./navbar.css";
import LanguageSwitcher from "@/core/components/LanguageSwitcher";
import Logo from "@/layout/logo/Logo";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useTranslation("navbar");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).tagName === "A") setOpen(false);
  }, []);

  const links = useMemo(
    () => [
      { to: "/sobre-nosotros", label: t("links.about")    },
      { to: "/servicios",      label: t("links.services") },
      { to: "/clientes",       label: t("links.clients")  },
      { to: "/equipo",         label: t("links.team")     },
    ],
    [t]
  );

  return (
    <header className="dd-header" role="banner" aria-label={t("aria.brand")}>
      <div className="dd-container">

        {/* ── Zona 1: Brand / Logo ── */}
        <Link className="dd-brand" to="/" aria-label={t("aria.brand")}>
          {/*
           * alt="" porque el <Link> ya tiene aria-label.
           * El logo es decorativo en este contexto semántico.
           * variant="dark" → /logo.png (fondo claro del navbar).
           */}
          <Logo variant="dark" height={48} alt="" />
        </Link>

        {/* ── Zona 2: Navegación principal ── */}
        <nav
          id="primary-nav"
          className={`dd-nav${open ? " open" : ""}`}
          role="navigation"
          aria-label={t("aria.primary")}
          onClick={handleNavClick}
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

          <NavLink
            to="/contacto"
            className={({ isActive }) => `dd-btn${isActive ? " active" : ""}`}
          >
            {t("links.contact")}
          </NavLink>

          <a
            href="https://datadrivensolutions.dev/dds-front/login"
            className="dd-btn-login"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("links.login")}
          </a>
        </nav>

        {/* ── Zona 3: Acciones (switcher + burger) ── */}
        <div className="dd-actions">
          <LanguageSwitcher compact />

          <button
            type="button"
            className="dd-burger"
            aria-label={open ? t("aria.closeMenu") : t("aria.openMenu")}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-haspopup="menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;