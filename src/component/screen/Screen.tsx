import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

interface ScreenProps extends React.FC {
  actions: string;
  description: string;
  picture: string;
}

export default function Screen({ picture, description, actions }) {
  return (
    <View style={styles.root}>
      <View style={styles.picture}>
        <Image style={styles.image} resizeMode="contain" source={picture} />
        <Text>{picture}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.actions}>
        <Text>{actions}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center"
  },
  actions: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center"
  },
  description: {
    alignItems: "flex-end",
    alignSelf: "flex-start"
  },
  image: {
    borderColor: "#f00",
    borderWidth: 5,
    flexGrow: 1
  },
  picture: {
    flex: 1,
    flexGrow: 3,
    backgroundColor: "#ff0",
    alignItems: "stretch",
    justifyContent: "space-between"
  }
});
