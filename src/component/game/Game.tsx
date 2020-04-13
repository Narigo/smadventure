import React from "react";

import ActionButton from "../action-button/ActionButton";
import InteractionScreen from "../interaction-screen/InteractionScreen";
import logo from "../../asset/logo.svg";

const Game = () => {
  return (
    <InteractionScreen picture={logo} description="hello description">
      <ActionButton
        label="left"
        action={({ navigate }) => {
          console.log("clicked left!");
          navigate({ screen: "left" });
        }}
      />
      <ActionButton
        label="right"
        action={({ navigate }) => {
          console.log("clicked right!");
          navigate({ screen: "right" });
        }}
      />
    </InteractionScreen>
  );
};

export default Game;
