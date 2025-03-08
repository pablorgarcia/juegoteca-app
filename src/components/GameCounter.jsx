import React from "react";
import PropTypes from "prop-types";

const GameCounter = ({ count }) => {
  return (
    <div>
      <p><strong>Número de juegos:</strong> {count}</p>
    </div>
  );
};

GameCounter.propTypes = {
  count: PropTypes.number.isRequired, // Aseguramos que 'count' sea un número
};

export default GameCounter;