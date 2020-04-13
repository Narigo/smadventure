import { createContext, useContext } from "react";

interface GameContext {
  navigate: (to: { screen: React.ReactNode }) => void;
}

const initialState = {
  navigate: ({ screen }) =>
    console.log("should navigate to screen now", { screen }),
};

const GameContext = createContext(initialState);

export const GameProvider = GameContext.Provider;

export const createGame = () => {
  return initialState;
};

export function useGameContext() {
  const context = useContext(GameContext);
  return context;
}
