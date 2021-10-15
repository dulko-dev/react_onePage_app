import React from "react";
import Home from "../Home";
import styles from "../../style/Game.module.css";

const Game = () => {
  return (
    <div className={styles.game}>
      <Home />
      <div>Game</div>;
    </div>
  );
};

export default Game;
