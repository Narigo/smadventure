import React from "react";
import { createGame, GameProvider } from "./service/use-game-context";
import Game from "./component/game/Game";

export default function App() {
  const game = createGame();
  return (
    <GameProvider value={game}>
      <Game />
    </GameProvider>
  );
}
