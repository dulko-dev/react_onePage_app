import React from "react";
import Home from "../Home";
import styles from "../../style/Game.module.css";

const Game = () => {
  return (
    <div className={styles.game}>
      <Home />
      <div className={styles.gameContent}>
        <div className={styles.categoryContent}>
          <div className={styles.category}>Chemia</div>
          <div className={styles.category}>Prawo</div>
          <div className={styles.category}>Gospodarka</div>
          <div className={styles.category}>Sport</div>
        </div>
        <div className={styles.questionContent}>
          <div className={styles.questionRow}>
            <div className={styles.question}>100</div>
            <div className={styles.question}>200</div>
            <div className={styles.question}>300</div>
          </div>
          <div className={styles.questionRow}>
            <div className={styles.question}>100</div>
            <div className={styles.question}>200</div>
            <div className={styles.question}>300</div>
          </div>
          <div className={styles.questionRow}>
            <div className={styles.question}>100</div>
            <div className={styles.question}>200</div>
            <div className={styles.question}>300</div>
          </div>
          <div className={styles.questionRow}>
            <div className={styles.question}>100</div>
            <div className={styles.question}>200</div>
            <div className={styles.question}>300</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
