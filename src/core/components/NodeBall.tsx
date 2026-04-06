/**
 * src/core/components/NodeBall.tsx
 *
 * Componente unificado de fondo animado de partículas (red de nodos).
 *
 * Usado por:
 *   - features/about  → <NodeBall className="dd-about-bg" />
 *   - features/team   → a través de NodeBallTeam (wrapper delgado)
 *
 * ── Props opcionales ────────────────────────────────────────
 * Todas tienen defaults que reproducen el comportamiento
 * original de NodeBall (sección about). NodeBallTeam
 * sobreescribe solo las que difieren.
 *
 * ── Posicionamiento ─────────────────────────────────────────
 * Este componente NO gestiona su posición en el layout.
 * La posición la define el className que el padre le pasa
 * + los inline styles del wrapper (efecto de clip lateral).
 *
 * IMPORTANTE — conflicto documentado:
 *   El wrapper aplica `position: absolute` e `inset: "0 auto 0 0"`
 *   sobreescribiendo intencionalmente el `inset: 0` de dd-about-bg.
 *   Revisar ambos antes de cambiar el posicionamiento.
 *
 * ── Colores de partículas ────────────────────────────────────
 * #000000 y #bdbdbd son configuración de tsparticles,
 * no tokens del sistema DDS.
 */

import React, { useEffect, useState } from "react";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export interface NodeBallConfig {
  /** ID único del canvas de partículas */
  id?:           string;
  /** Cantidad de partículas */
  count?:        number;
  /** Dimensiones de la celda de densidad (px) */
  densityW?:     number;
  densityH?:     number;
  /** Activar detección de pantalla retina */
  detectRetina?: boolean;
  /** Movimiento aleatorio */
  random?:       boolean;
  /** Opacidad de las líneas entre nodos */
  linksOpacity?: number;
}

interface NodeBallProps extends NodeBallConfig {
  className?: string;
}

const NodeBall: React.FC<NodeBallProps> = ({
  className    = "",
  id           = "node-ball",
  count        = 5,
  densityW     = 115,
  densityH     = 115,
  detectRetina = true,
  random       = true,
  linksOpacity = 0.25,
}) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <div
      className={className}
      style={{
        position:      "absolute",
        inset:         "0 auto 0 0",
        width:         "100%",
        pointerEvents: "none",
        clipPath:      "circle(48% at 50% 50%)",
        WebkitMaskImage:
          "linear-gradient(90deg, black 0%, black 78%, rgba(0,0,0,0.1) 100%)",
        maskImage:
          "linear-gradient(90deg, black 0%, black 78%, rgba(0,0,0,0.1) 100%)",
        opacity: 0.4,
      }}
      aria-hidden="true"
    >
      <Particles
        id={id}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          detectRetina,
          interactivity: { events: { onHover: { enable: false, mode: [] } } },
          particles: {
            number: {
              value: count,
              density: { enable: true, height: densityH, width: densityW },
            },
            move: {
              enable:   true,
              speed:    0.2,
              random,
              outModes: { default: "bounce" },
            },
            shape: { type: "circle" },
            color:   { value: ["#000000", "#bdbdbd"] },
            opacity: { value: 1 },
            size:    { value: { min: 2.4, max: 3.6 } },
            links: {
              enable:   true,
              color:    "#000000",
              distance: 150,
              width:    1,
              opacity:  linksOpacity,
            },
          },
        }}
      />
    </div>
  );
};

export default NodeBall;