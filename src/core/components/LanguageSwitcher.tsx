// Ubicación: src/core/components/LanguageSwitcher.tsx
// Propósito: Toggle ES/EN con diseño "pill", accesible y sin errores de i18n.
// Notas:
//  - Usamos SIEMPRE la instancia global de i18n que inicializas en src/i18n.ts
//    para que changeLanguage(...) exista y no dé TypeError.
//  - Ajuste de tamaños con CSS variables (is-compact reduce tamaño).

import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n"; // Asegura que i18n esté inicializado (por si no se importó en main)
import i18nextInstance from "../../i18n";
import "../styles/LanguageSwitcher.css";

import flagES from "./assets/es.webp";
import flagEN from "./assets/EEUU.png";

type Props = {
  /** Mostrar texto "Idioma/Language" a la izquierda */
  showLabel?: boolean;
  /** Variante compacta (navbar) */
  compact?: boolean;
  /** Clases extra del contenedor externo */
  className?: string;
};

const LanguageSwitcher: React.FC<Props> = ({
  showLabel = false,
  compact = true,
  className = "",
}) => {
  // t se usa si quisieras traducir el label; i18n del hook no lo usamos para cambiar idioma
  const { i18n: hookI18n } = useTranslation();

  const current = (hookI18n.resolvedLanguage || hookI18n.language || "es")
    .slice(0, 2)
    .toLowerCase() as "es" | "en";
  const isES = current === "es";
  const next = isES ? "en" : "es";

  const bgUrl = useMemo(() => (isES ? flagES : flagEN), [isES]);

  const toggle = () => {
    // Usar SIEMPRE la instancia global, garantiza .changeLanguage(...)
    i18nextInstance.changeLanguage(next);
    try {
      localStorage.setItem("i18nextLng", next);
    } catch {
      /* no-op */
    }
    // El listener en src/i18n.ts ya sincroniza <html lang="...">,
    // esto es redundante pero harmless si quieres respuesta inmediata:
    document.documentElement.setAttribute("lang", next);
  };

  const onKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className={`langwrap ${className} ${compact ? "is-compact" : ""}`}>
      {showLabel && (
        <span className="langwrap__label">
          {isES ? "Idioma" : "Language"}
        </span>
      )}

      <span className="langwrap__side langwrap__side--left">EN</span>

      <button
        type="button"
        className={`langpill ${isES ? "is-es" : "is-en"} ${
          compact ? "is-compact" : ""
        }`}
        style={{ backgroundImage: `url(${bgUrl})` }}
        role="switch"
        aria-checked={isES}
        aria-label={isES ? "Cambiar a English" : "Switch to Español"}
        title={isES ? "Cambiar a English" : "Switch to Español"}
        onClick={toggle}
        onKeyDown={onKey}
      >
        <span aria-hidden="true" className="langpill__knob" />
        <span className="sr-only">
          {isES ? "Español activo" : "English active"}
        </span>
      </button>

      <span className="langwrap__side langwrap__side--right">ES</span>
    </div>
  );
};

export default LanguageSwitcher;
