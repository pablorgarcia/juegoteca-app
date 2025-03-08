import React from "react";
import PropTypes from "prop-types";
import "../../styles/styles.css";

const PhysicalFilter = ({ onToggle, isChecked }) => {
  const handleChange = (e) => {
    onToggle(e.target.checked); // Notifica al componente padre si el switch está activado
  };

  return (
    <div>
      <label htmlFor="physical-filter" className="switch-container">
        <input
          id="physical-filter"
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className="slider round"></span>
        <span className="switch-slider-text">Solo juegos físicos</span>
      </label>
    </div>
  );
};

PhysicalFilter.propTypes = {
  onToggle: PropTypes.func.isRequired, // Función para manejar cambios
  isChecked: PropTypes.bool.isRequired, // Estado del switch
};

export default PhysicalFilter;
