/**
 * src/core/components/NodeBallTeam.tsx
 *
 * Wrapper delgado de NodeBall con configuración específica
 * para la sección Team. Mantiene el mismo nombre de export
 * para no romper los consumidores existentes (TeamSection.tsx).
 *
 * Diferencias respecto a NodeBall defaults:
 *   id           "node-ball-team"  (vs "node-ball")
 *   count        20               (vs 5)
 *   densityW/H   300×300          (vs 115×115)
 *   detectRetina false            (vs true)
 *   random       false            (vs true)
 *   linksOpacity 0.5              (vs 0.25)
 *
 * Si en el futuro se necesita una tercera variante,
 * solo hay que pasar props a NodeBall — sin duplicar código.
 */

import React from "react";
import NodeBall from "./NodeBall";

const NodeBallTeam: React.FC<{ className?: string }> = ({ className = "" }) => (
  <NodeBall
    className={className}
    id="node-ball-team"
    count={20}
    densityW={300}
    densityH={300}
    detectRetina={false}
    random={false}
    linksOpacity={0.5}
  />
);

export default NodeBallTeam;