import React, { useState, useEffect } from "react";
import axios from "axios";
import "../themes/vehiclefeatures.css";
import Modal from "./Modal";
import consumoLogo from '../assets/consumoLogo.png'
import potenciaLogo from '../assets/potenciaLogo.png'
import velocidadeLogo from '../assets/velocidadeLogo.png'
import cilidradaLogo from '../assets/cilindradaLogo.png'

const VehicleFeatures = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/vehicle")
      .then((response) => {
        setVehicles(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Erro ao carregar veículos:", error));
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    //console.log("Dados enviados:", formData);
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="vehicle-info">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
            <div className="vehicle-card-features">
              <p className="vehicle-subtitle">
                Descubra o BMW Série 4 Cabrio.
                <br /> Cliente On-line tem Condições Especiais e aqui na Dealer BMW!
              </p>
              <h3 className="vehicle-name">
                A partir de R$ {vehicle.price.toLocaleString("pt-BR")}
              </h3>
              <div className="vehicle-content">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="vehicle-image"
                />
                <div className="vehicle-features">
                  <h4 className="features-title">Destaques</h4>
                  <div className="features-grid">
                    <div className="features">
                      <img
                        src={consumoLogo}
                        alt="Consumo"
                        className="consumo-icon"
                      />
                      <div className="features-text">
                        <strong>Consumo</strong>
                        <span>{vehicle.features.consumption}</span>
                      </div>
                    </div>
                    <div className="features">
                      <img
                        src={cilidradaLogo}
                        alt="Cilindrada"
                        className="cilindrada-icon"
                      />
                      <div className="features-text">
                        <strong>Cilindrada</strong>
                        <span>{vehicle.features.engine}</span>
                      </div>
                    </div>
                    <div className="features">
                      <img
                        src={potenciaLogo}
                        alt="Potência"
                        className="potencia-icon"
                      />
                      <div className="features-text">
                        <strong>Potência</strong>
                        <span>{vehicle.features.power}</span>
                      </div>
                    </div>
                    <div className="features">
                      <img
                        src={velocidadeLogo}
                        alt="Velocidade Máxima"
                        className="velocidade-icon"
                      />
                      <div className="features-text">
                        <strong>Velocidade Máx.</strong>
                        <span>{vehicle.features.speed}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="vehicle-button"
                    onClick={handleOpenModal}
                  >
                    TENHO INTERESSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default VehicleFeatures;
