import React from "react";
import "./DefinitionSection.css";

const DefinitionSection = () => {
  return (
    <div className="definition-container" id="definition">
      <h2>Definición y Contexto</h2>

      <section className="definition-section">
        <div className="definition-video">
          <video
            autoPlay
            muted
            loop
            src="https://res.cloudinary.com/ds8cp2nxp/video/upload/v1731728105/landing-estrategias/background_ogeviu.webm"
          ></video>
        </div>

        <section className="definition">
          <p>
            Una estrategia es un conjunto de acciones planificadas para alcanzar
            un objetivo específico.
          </p>

          <p>
            Surge del término griego "strategos", que significa liderazgo o
            dirección milita.
          </p>

          <p>
            Hoy se aplica a múltiples disciplinas como negocios, comunicación, y
            desarrollo personal.
          </p>
        </section>
      </section>
    </div>
  );
};

export default DefinitionSection;
