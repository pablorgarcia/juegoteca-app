import React, { useState, useEffect } from "react";
import { filterGames } from "./services/gameService";
import SearchBar from "./features/Search/SearchBar";
import GenreFilter from "./features/Filter/GenreFilter";
import ConsoleFilter from "./features/Filter/ConsoleFilter";
import PhysicalFilter from "./features/Filter/PhysicalFilter";
import EverdriveFilter from "./features/Filter/EverdriveFilter";
import GameDetail from "./components/GameDetail";
import GameCounter from "./components/GameCounter";

const App = () => {
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Texto del buscador
  const [genreFilter, setGenreFilter] = useState("todos"); // Género seleccionado
  const [consoleFilter, setConsoleFilter] = useState("todos"); // Consola seleccionada
  const [physicalFilter, setPhysicalFilter] = useState(false); // Filtro físico
  const [everdriveFilter, setEverdriveFilter] = useState(false); // Filtro de Everdrive

  // Lógica combinada de filtros
  useEffect(() => {
    const results = filterGames(searchTerm, genreFilter, consoleFilter, physicalFilter, everdriveFilter);
    setFilteredGames(results);
  }, [searchTerm, genreFilter, consoleFilter, physicalFilter, everdriveFilter]);

  return (
    <div>
      <h1>Buscador de Juegos</h1>

      {/* Barra de búsqueda */}
      <SearchBar onSearch={setSearchTerm} />

      {/* Filtros */}
      <GenreFilter onFilterChange={setGenreFilter} />
      <ConsoleFilter onFilterChange={setConsoleFilter} />
      <PhysicalFilter isChecked={physicalFilter} onToggle={setPhysicalFilter} />
      <EverdriveFilter isChecked={everdriveFilter} onToggle={setEverdriveFilter} />

      {/* Contador */}
      <GameCounter count={filteredGames.length} />

      {/* Lista de juegos */}
      <div>
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => <GameDetail key={game.id} game={game} />)
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default App;
