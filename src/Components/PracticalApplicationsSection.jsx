import React from "react";
import "./PracticalApplicationsSection.css";

const PracticalApplicationsSection = () => {
  const applications = [
    "Planificación empresarial: aumento de ventas.",
    "Estrategias de marketing: mejora de la presencia en redes sociales.",
    "Gestión personal: planificación de metas a largo plazo.",
  ];

  return (
    <div className="applications-container">
      <h2>Aplicaciones Prácticas</h2>

      <section className="applications-section">
        <ul className="applications-list">
          {applications.map((app, index) => (
            <li key={index}>{app}</li>
          ))}
        </ul>
        <video
          className="video-bg"
          id="video-bg"
          autoPlay
          muted
          loop
          src="https://res.cloudinary.com/ds8cp2nxp/video/upload/v1731727769/landing-estrategias/Dise%C3%B1o_sin_t%C3%ADtulo_online-video-cutter.com_uckuig.webm"
        />
      </section>

      <h3>Hecho por Jonatan</h3>
    </div>
  );
};

export default PracticalApplicationsSection;
