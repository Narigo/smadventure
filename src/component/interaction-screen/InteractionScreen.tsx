import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import Screen from "../screen/Screen";

interface InteractionScreenProps {
  children: React.ReactNode;
  description: string;
  picture: ImageSourcePropType;
}

const InteractionScreen: React.FC<InteractionScreenProps> = ({
  picture,
  description,
  children,
}) => {
  return (
    <Screen>
      <View style={styles.picture}>
        <Image style={styles.image} resizeMode="contain" source={picture} />
        <Text>{picture}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.children}>
        <Text>{children}</Text>
      </View>
    </Screen>
  );
};

export default InteractionScreen;

const styles = StyleSheet.create({
  children: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    alignItems: "flex-end",
    alignSelf: "flex-start",
  },
  image: {
    borderColor: "#f00",
    borderWidth: 5,
    flexGrow: 1,
  },
  picture: {
    flex: 1,
    flexGrow: 3,
    backgroundColor: "#ff0",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
});
