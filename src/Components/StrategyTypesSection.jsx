import React from "react";
import "./StrategyTypesSection.css";

const StrategyTypesSection = () => {
  const strategies = [
    { type: "Microestrategias", description: "Acciones específicas y detalladas.", link : "https://res.cloudinary.com/ds8cp2nxp/image/upload/v1731729794/landing-estrategias/1_gpyfsu_background_txxjgt.webp" },
    { type: "Macroestrategias", description: "Planes generales para el logro de metas amplias.", link : "https://res.cloudinary.com/ds8cp2nxp/image/upload/v1731729868/landing-estrategias/2_nokved_background_itef2s.webp" },
  ];

  return (
    <div className="types-container">
      <h2>La comunicación oral estratégica incluye:</h2>
      <div className="types-list">
        {strategies.map((strategy, index) => (
          <div key={index} className="strategy-card">
            <h3>{strategy.type}</h3>
            <p>{strategy.description}</p>
            <img src={strategy.link} alt="logo"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyTypesSection;
