import React, { useState } from "react";
import Home from "../Home";
import Menu from "./Menu";
import Live from "./Live";
import styles from "../../style/Game.module.css";

const Game = () => {
  const [welcomeScreen, setWelcomeScreen] = useState(true);

  const startGame = () => {
    setWelcomeScreen(false);
  };

  return (
    <div className={styles.game}>
      <Home />
      {welcomeScreen ? <Menu startGame={startGame} /> : <Live />}
    </div>
  );
};

export default Game;
