import React, { useState } from "react";
import Home from "../Home";
import Menu from "./Menu";
import Live from "./Live";
import styles from "../../style/Game.module.css";

const Game = () => {
  const [welcomeScreen, setWelcomeScreen] = useState(true);
  const [score, setScore] = useState(0);
  const [player, setPlayer] = useState("defaultName");
  const [data, setData] = useState("");
  const [openCount, setOpenCount] = useState(0);

  const startGame = () => {
    setWelcomeScreen(false);
  };

  return (
    <div className={styles.game}>
      <Home />
      {welcomeScreen ? (
        <Menu
          startGame={startGame}
          setPlayer={setPlayer}
          setData={setData}
          setOpenCount={setOpenCount}
        />
      ) : (
        <Live
          score={score}
          setScore={setScore}
          player={player}
          data={data}
          setOpenCount={setOpenCount}
          openCount={openCount}
        />
      )}
    </div>
  );
};

export default Game;
