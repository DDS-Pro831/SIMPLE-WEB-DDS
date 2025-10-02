import React, { useEffect, useState } from "react";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const NodeBallTeam: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);           // build liviano
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: "0 auto 0 0",
        width: "min(100%, 100%)",
        pointerEvents: "none",
        // look “globo”
        clipPath: "circle(48% at 50% 50%)-box",
        // leve desvanecido hacia la derecha (como tu captura)
        WebkitMaskImage:
          "linear-gradient(90deg, black 0%, black 78%, rgba(0,0,0,0.1) 100%)",
        maskImage:
          "linear-gradient(90deg, black 0%, black 78%, rgba(0,0,0,0.1) 100%)",
        opacity: 0.4,
      }}
      aria-hidden="true"
    >
      <Particles
        id="node-ball-team"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          detectRetina: false,
          interactivity: { events: { onHover: { enable: false, mode: [] } } },
          particles: {
            // más densidad y radio de enlace corto -> malla como la imagen
            number: { value: 20, density: { enable: true, height: 300, width: 300 } },
            move: {
              enable: true,
              speed: 0.2,            // MUY sutil
              random: false,
              outModes: { default: "bounce" },
            },
            shape: { type: "circle" },
            // mezcla de negros y grises en puntos
            color: { value: ["#000000", "#bdbdbd"] },
            opacity: { value: 1 },
            size: { value: { min: 2.4, max: 3.6 } },
            // líneas finas negras, con opacidad como en el mock
            links: {
              enable: true,
              color: "#000000",
              distance: 150,
              width: 1,
              opacity: 0.5,
            },
          },
        }}
      />
    </div>
  );
};

export default NodeBallTeam;
