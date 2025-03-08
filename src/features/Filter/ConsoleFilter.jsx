import React from "react";
import PropTypes from "prop-types";
import consoles from "../../data/consoles.json";

const ConsoleFilter = ({ onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange(e.target.value); // Notifica al padre la consola seleccionada
  };

  return (
    <div>
      <label htmlFor="console-filter">Consola:</label>
      <select id="console-filter" onChange={handleChange}>
        <option value="todos">Todas</option>
        {consoles.map((console) => (
          <option key={console.id} value={console.id}>
            {console.name}
          </option>
        ))}
      </select>
    </div>
  );
};

ConsoleFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default ConsoleFilter;
