import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
    <TouchableOpacity onPress={() => action(gameContext)} style={styles.button}>
      <View style={styles.text}>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "stretch",
    borderWidth: 5,
    borderColor: "#f00",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ActionButton;
