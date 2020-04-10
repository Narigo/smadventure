import React from "react";
import InteractionScreen from "./component/interaction-screen/InteractionScreen";
import logo from "./asset/logo.svg";
import ActionButton from "./component/action-button/ActionButton";

export default function App() {
  const prev = (
    <ActionButton
      label="prev"
      action={() => {
        console.log("clicked prev!");
      }}
    />
  );
  const next = (
    <ActionButton
      label="next"
      action={() => {
        console.log("clicked next!");
      }}
    />
  );
  return (
    <InteractionScreen picture={logo} description="hello description">
      {prev}
      {next}
    </InteractionScreen>
  );
}
