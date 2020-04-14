import React from "react";
import Game from "./component/game/Game";
import SampleGame from "./component/sample-game/SampleGame";

export default function App() {
  return <Game initialScreen={<SampleGame />} />;
}
