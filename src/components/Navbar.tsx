import { useState } from "react";
import "./navbar.css";
// Si importas un SVG como archivo, descomenta esta línea y crea el .d.ts de abajo
// import logo from "../assets/logo-dds.svg";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="dd-header" role="banner">
      <div className="dd-container">
        <a className="dd-brand" href="#top" aria-label="Data Driven Solutions">
          <img src="/logo.png" alt="Data Driven Solutions" height={60} />
        </a>

        <button
          className="dd-burger"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-nav" className={`dd-nav ${open ? "open" : ""}`} aria-label="Principal">
          <a href="#about">Sobre Nosotros</a>
          <a href="#ofrecemos">Servicios</a>
          <a href="#clientes">Clientes</a>
          <a href="#contacto" className="dd-btn">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
