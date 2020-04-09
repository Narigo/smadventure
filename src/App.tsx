import React from "react";
import InteractionScreen from "./component/interaction-screen/InteractionScreen";
import logo from "./asset/logo.svg";
import ActionButton from "./component/action-button/ActionButton";

export default function App() {
  const next = (
    <ActionButton
      label="click"
      action={() => {
        console.log("clicked!");
      }}
    />
  );
  return (
    <InteractionScreen
      picture={logo}
      description="hello description"
      actions={[next]}
    />
  );
}
