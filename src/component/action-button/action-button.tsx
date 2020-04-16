import React from "react";
import { Button, StyleSheet } from "react-native";

import Flavor from "../../type/flavor";
import { useGameContext } from "../game/game";

export type Action = Flavor<(GameContext) => void, "Action">;

export interface ActionButtonProps {
  action: Action;
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ action, label }) => {
  const gameContext = useGameContext();
  return (
    <Button
      onPress={() => action(gameContext)}
      style={styles.button}
      title={label}
    />
  );
};

const styles = StyleSheet.create({
  button: {},
});

export default ActionButton;
