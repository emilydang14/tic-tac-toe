import React from "react";
import classes from "./App.module.css";
import Header from "../Header/Header";
import GameBoard from "../GameBoard/GameBoard";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <GameBoard />
    </div>
  );
}

export default App;
