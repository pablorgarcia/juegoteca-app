import React from "react";
import PropTypes from "prop-types";

const GameDetail = ({ game }) => {
  if (!game) return null; // Manejar el caso en que no se pase un juego

  // Desestructuramos las propiedades relevantes del juego
  const { title, genre, console, physical, everdrive } = game;

  return (
    <div className="game-detail-component">
      <h2>{title}</h2>
      <p><strong>Género:</strong> {genre || "No especificado"}</p>
      <p><strong>Consolas:</strong> {console || "No especificadas"}</p>
      <p><strong>Físico:</strong> {physical ? "Sí" : "No"}</p>
      <p><strong>Everdrive:</strong> {everdrive ? "Sí" : "No"}</p>
    </div>
  );
};

// Definimos las PropTypes para validación 
GameDetail.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired, // El título es obligatorio
    genre: PropTypes.string, // El género puede estar ausente
    console: PropTypes.string, // Las consolas pueden estar ausentes
    physical: PropTypes.bool.isRequired, // Es obligatorio que sea booleano
    everdrive: PropTypes.bool.isRequired, // Es obligatorio que sea booleano
  }).isRequired,
};

export default GameDetail;
