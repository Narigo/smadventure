import React from "react";
import InteractionScreen from "./component/screen/InteractionScreen";
import logo from "./asset/logo.png";

export default function App() {
  return (
    <InteractionScreen
      picture={logo}
      description="hello description"
      actions="hello actions"
    />
  );
}
