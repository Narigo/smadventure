import React, { createContext, useContext, useState, useMemo } from "react";

interface GameContext {
  navigate: (to: { screen: React.ReactNode }) => void;
  restart: () => void;
}

const NotInitializedError = () => {
  throw new Error("Game not initialized - did you use 'createGame()'?");
};

const initialState: GameContext = {
  navigate: NotInitializedError,
  restart: NotInitializedError,
};

const GameContext = createContext(initialState);

const Game = ({ initialScreen }) => {
  const [currentScreen, setCurrentScreen] = useState(initialScreen);
  const context = useMemo(
    () => ({
      navigate: ({ screen }) => setCurrentScreen(screen),
      restart: () => initialScreen,
    }),
    [initialScreen, setCurrentScreen]
  );
  return (
    <GameContext.Provider value={context}>{currentScreen}</GameContext.Provider>
  );
};

export default Game;

export function useGameContext() {
  const context = useContext(GameContext);
  return context;
}
