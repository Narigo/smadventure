import React from "react";
import Game from "./component/game/game";
import SampleGame from "./component/sample-game/sample-game";

export default function App() {
  return <Game initialScreen={<SampleGame />} />;
}
