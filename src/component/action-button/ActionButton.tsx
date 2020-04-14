import React from "react";
import { Button } from "react-native";
import Flavor from "../../type/flavor";
import { useGameContext } from "../game/Game";

export type Action = Flavor<(GameContext) => void, "Action">;

export interface ActionButtonProps {
  action: Action;
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ action, label }) => {
  const gameContext = useGameContext();
  return <Button onPress={() => action(gameContext)} title={label} />;
};

export default ActionButton;
