// src/services/gameService.js
import games from "../data/games.json";
import genres from "../data/genres.json";
import consoles from "../data/consoles.json";

export const filterGames = (query, genreFilter, consoleFilter, physicalFilter, everdriveFilter) => {
  let matchingGames = games;

  // Filtrar por búsqueda
  if (query.trim()) {
    const cleanQuery = query.trim().toLowerCase();
    matchingGames = matchingGames.filter((game) =>
      game.title.toLowerCase().includes(cleanQuery)
    );
  }

  // Filtrar por género
  if (genreFilter !== "todos") {
    matchingGames = matchingGames.filter(
      (game) => game.genreId === Number(genreFilter)
    );
  }

  // Filtrar por consola
  if (consoleFilter !== "todos") {
    matchingGames = matchingGames.filter((game) =>
      game.consoleId.includes(Number(consoleFilter))
    );
  }

  // Filtrar por juegos físicos
  if (physicalFilter) {
    matchingGames = matchingGames.filter((game) => game.physical);
  }

  // Filtrar por Everdrive
  if (everdriveFilter) {
    matchingGames = matchingGames.filter((game) => game.everdrive);
  }

  // Añadir detalles de género y consolas
  return matchingGames.map((game) => ({
    ...game,
    genre: genres.find((g) => g.id === game.genreId)?.name || "Desconocido",
    console: game.consoleId
      .map((id) => consoles.find((c) => c.id === id)?.name || "Desconocida")
      .join(", "),
  }));
};
