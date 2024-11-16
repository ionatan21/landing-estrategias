import React, { useEffect, useState } from "react";
import "./App.css";
import DefinitionSection from "./Components/DefinitionSection";
import HeroSection from "./Components/HeroSection";
import PracticalApplicationsSection from "./Components/PracticalApplicationsSection";
import StrategicProcessSection from "./Components/StrategicProcessSection";
import StrategyTypesSection from "./Components/StrategyTypesSection";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar dispositivo móvil usando el User-Agent
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  if (isMobile) {
    // Mostrar mensaje para dispositivos móviles
    return (
      <div className="mobile-message">
        <p>Esta página solo está disponible para computadoras. Por favor, accede desde un dispositivo de escritorio. <br /> {":("}</p>
      </div>
    );
  }

  // Mostrar contenido para computadoras
  return (
    <div className="main-container">
      <HeroSection />
      <DefinitionSection />
      <StrategyTypesSection />
      <StrategicProcessSection />
      <PracticalApplicationsSection />
    </div>
  );
}

export default App;