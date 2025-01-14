import React, { useState, useEffect } from "react";
import axios from "axios";
import VehicleFeatures from "./VehicleFeatures";
import "../themes/vehicle.css";

const Vehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const convertYouTubeLink = (link) => {
    if (link.includes("watch?v=")) {
      return link.replace("watch?v=", "embed/");
    }
    return link;
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/vehicle")
      .then((response) => {
        setVehicles(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Erro ao carregar veículos:", error));
  }, []);

  return (
    <div className="body">
      <div className="background-wrapper">
        <div className="container">
          <div className="breadcrumb-header">
            <p className="breadcrumb">
              Ofertas → <a href="/novo-serie-1" className="breadcrumb-link">Novo Série 1</a>
            </p>
            <p className="back-link">
              <a href="/pagina-anterior" className="back-link-anchor">Voltar para página anterior</a>
            </p>
          </div>
            {vehicles.map((vehicle) => (
              <h2 key={vehicle.id} className="body-title">{vehicle.name}</h2> 
            ))}
          <VehicleFeatures />
        </div>
      </div>
      <div className="container">
          <div className="about">
            <h2 className="title-about">A vida é melhor<br /> quando compartilhada. <br />BMW Série 4 Cabrio</h2>
            <p className="subtitle-about">
              A performance irradia de cada ângulo do design inovador do BMW Série 4 Cabrio. Começando pela dianteira, que conta com para-choque clássico dos modelos BMW. Ao correr os olhos pelo design, nota-se imediatamente o teto inclinado e a linha do ombro marcante, que equilibra o centro de gravidade do carro. Voltando-se para as laterais, são os robustos arcos de 10 mm e as incomuns rodas de 21 polegadas que chamam a atenção. Ao chegar na traseira do BMW Série 4 Cabrio, a força do design continua surpreendendo. O para-choque com difusão clássica dos modelos BMW, as lâminas horizontais e teto com spoiler ganham um toque a mais de amplitude devido ao vidro traseiro levemente rebaixado.
            </p>
          </div>
          <div className="video-about">
            <h2 className="vehicle-video-title">Conheça o BMW Série 4 Cabrio</h2>
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="vehicle-container">
                <div className="veichle-video">
                  <iframe
                    src={convertYouTubeLink(vehicle.video)}
                    title={vehicle.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="vehicle-legal_text">
                  <h3>Texto Legal:</h3>
                  <span>{vehicle.legal_text}</span>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Vehicle;
