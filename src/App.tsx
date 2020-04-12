import React from "react";
import InteractionScreen from "./component/interaction-screen/InteractionScreen";
import logo from "./asset/logo.svg";
import ActionButton from "./component/action-button/ActionButton";

export default function App() {
  return (
    <InteractionScreen picture={logo} description="hello description">
      <ActionButton
        label="prev"
        action={() => {
          console.log("clicked prev!");
        }}
      />
      <ActionButton
        label="next"
        action={() => {
          console.log("clicked next!");
        }}
      />
    </InteractionScreen>
  );
}
