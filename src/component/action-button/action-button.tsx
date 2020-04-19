import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        end={[1, 1]}
        start={[0, 0]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <View style={styles.text}>
          <Text>{label}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "stretch",
    backgroundColor: "",
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
