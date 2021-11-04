import React, { useState } from "react";
import Home from "../Home";
import Menu from "./Menu";
import Live from "./Live";
import styles from "../../style/Game.module.css";

const Game = () => {
  const [welcomeScreen, setWelcomeScreen] = useState(true);

  return (
    <div className={styles.game}>
      <Home />
      {welcomeScreen ? <Menu /> : <Live />}
    </div>
  );
};

export default Game;
