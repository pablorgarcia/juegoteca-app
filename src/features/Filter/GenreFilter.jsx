import React from "react";
import PropTypes from "prop-types";
import genres from "../../data/genres.json";

const GenreFilter = ({ onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange(e.target.value); // Notifica al padre el género seleccionado
  };

  return (
    <div>
      <label htmlFor="genre-filter">Género:</label>
      <select id="genre-filter" onChange={handleChange}>
        <option value="todos">Todos</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

GenreFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default GenreFilter;
