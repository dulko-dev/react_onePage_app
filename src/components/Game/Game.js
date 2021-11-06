import React, { useState } from "react";
import Home from "../Home";
import Menu from "./Menu";
import Live from "./Live";
import styles from "../../style/Game.module.css";

const Game = () => {
  const [welcomeScreen, setWelcomeScreen] = useState(true);
  const [score, setScore] = useState(0);
  const [player, setPlayer] = useState("");
  const [data, setData] = useState("");

  const startGame = () => {
    setWelcomeScreen(false);
  };

  return (
    <div className={styles.game}>
      <Home />
      {welcomeScreen ? (
        <Menu startGame={startGame} setPlayer={setPlayer} setData={setData} />
      ) : (
        <Live score={score} setScore={setScore} player={player} data={data} />
      )}
    </div>
  );
};

export default Game;
