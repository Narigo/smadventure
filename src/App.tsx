import React from "react";
import InteractionScreen from "./component/interaction-screen/InteractionScreen";
import logo from "./asset/logo.svg";

export default function App() {
  return (
    <InteractionScreen
      picture={logo}
      description="hello description"
      actions="hello actions"
    />
  );
}
