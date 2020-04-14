import React from "react";

import ActionButton from "../action-button/ActionButton";
import InteractionScreen from "../interaction-screen/InteractionScreen";
import logo from "../../asset/logo.svg";

const SampleGame = () => {
  const left = (
    <InteractionScreen picture={logo} description="left screen">
      <ActionButton
        label="center"
        action={({ navigate }) => {
          console.log("clicked center!");
          navigate({ screen: center });
        }}
      />
    </InteractionScreen>
  );
  const center = (
    <InteractionScreen picture={logo} description="center screen">
      <ActionButton
        label="left"
        action={({ navigate }) => {
          console.log("clicked left!");
          navigate({ screen: left });
        }}
      />
      <ActionButton
        label="right"
        action={({ navigate }) => {
          console.log("clicked right!");
          navigate({ screen: right });
        }}
      />
    </InteractionScreen>
  );
  const right = (
    <InteractionScreen picture={logo} description="right screen">
      <ActionButton
        label="center"
        action={({ navigate }) => {
          console.log("clicked center!");
          navigate({ screen: center });
        }}
      />
    </InteractionScreen>
  );

  return center;
};

export default SampleGame;
