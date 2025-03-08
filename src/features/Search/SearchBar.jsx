import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe para buscar..."
        onChange={handleInputChange}
        className="search-bar"
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
