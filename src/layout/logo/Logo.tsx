/**
 * src/layout/logo/Logo.tsx
 *
 * Abstracción sobre el asset del logo DDS.
 *
 * Responsabilidades:
 *   - centralizar la referencia al archivo del logo
 *   - soportar variantes light/dark sin cambiar los consumidores
 *   - ser composable desde Navbar, Footer o cualquier layout
 *
 * Props:
 *   variant   → 'dark'  usa /logo.png       (default — fondo claro)
 *               'light' usa /logo-light.png  (fondo oscuro — TODO cuando exista el asset)
 *   height    → altura en px (default: 36)
 *   alt       → texto alternativo (default: 'DDS')
 *               Usar alt="" si el componente padre ya tiene aria-label
 *   className → clase CSS opcional para composición externa
 *
 * TODO: cuando design entregue /logo-light.png, el variant='light'
 *       funcionará automáticamente sin cambiar Navbar ni otros consumidores.
 */

import React from 'react';

interface LogoProps {
  variant?:  'dark' | 'light';
  height?:   number;
  alt?:      string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  variant   = 'dark',
  height    = 36,
  alt       = 'DDS',
  className,
}) => {
  /*
   * Cuando exista /logo-light.png para fondos oscuros (footer, banners),
   * el switch de src aquí es el único cambio necesario en todo el sistema.
   */
  const src = variant === 'light' ? '/logo-light.png' : '/logo.png';

  return (
    <img
      src={src}
      alt={alt}
      height={height}
      className={className}
      draggable={false}
      style={{
        display:       'block',
        userSelect:    'none',
        pointerEvents: 'none',
      }}
    />
  );
};

export default Logo;