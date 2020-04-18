import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import Screen from "../screen/screen";

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
      <View style={styles.background}>
        <Image style={styles.image} resizeMode="contain" source={picture} />
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.children}>{children}</View>
    </Screen>
  );
};

export default InteractionScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexGrow: 3,
    backgroundColor: "#ff0",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  children: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "stretch",
    flexDirection: "row",
  },
  description: {
    alignItems: "flex-end",
    alignSelf: "flex-start",
  },
  image: {
    flexGrow: 1,
  },
});
