import React from "react";
import PropTypes from "prop-types";
import "../../styles/styles.css";

const EverdriveFilter = ({ isChecked, onToggle }) => {
  const handleChange = (e) => {
    onToggle(e.target.checked); // Notifica al componente padre si el switch está activado
  };

  return (
    <div>
      <label htmlFor="everdrive-filter" className="switch-container">
        <input
          id="everdrive-filter"
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className="slider round"></span>
        <span className="switch-slider-text">Solo juegos compatibles con Everdrive</span>
      </label>
    </div>
  );
};

EverdriveFilter.propTypes = {
  isChecked: PropTypes.bool.isRequired, // Función para manejar cambios
  onToggle: PropTypes.func.isRequired, // Estado del switch
};

export default EverdriveFilter;
