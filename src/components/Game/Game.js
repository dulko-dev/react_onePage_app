import React, { useState } from "react";
import Home from "../Home";
import styles from "../../style/Game.module.css";

const Game = () => {
  const [data, setData] = useState("");

  const handleFetch = async () => {
    const url1 =
      "https://opentdb.com/api.php?amount=3&category=17&difficulty=medium&type=boolean";
    const url2 =
      "https://opentdb.com/api.php?amount=3&category=17&difficulty=medium&type=boolean";
    const url3 =
      "https://opentdb.com/api.php?amount=3&category=17&difficulty=medium&type=boolean";
    const url4 =
      "https://opentdb.com/api.php?amount=3&category=17&difficulty=medium&type=boolean";

    const promiseAll = await Promise.all([
      fetch(url1),
      fetch(url2),
      fetch(url3),
      fetch(url4),
    ]);
    const data = await promiseAll.map((data) => data.json());
    const final = Promise.all(data);
    final.then((el) => setData(el));
  };

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
            {data &&
              data[0].results.map((question) => (
                <div className={styles.question}>{question.question}</div>
              ))}
          </div>
          <div className={styles.questionRow}>
            {data &&
              data[1].results.map((question) => (
                <div className={styles.question}>{question.question}</div>
              ))}
          </div>
          <div className={styles.questionRow}>
            {data &&
              data[2].results.map((question) => (
                <div className={styles.question}>{question.question}</div>
              ))}
          </div>
          <div className={styles.questionRow}>
            {data &&
              data[3].results.map((question) => (
                <div className={styles.question}>{question.question}</div>
              ))}
          </div>
        </div>
      </div>
      <button onClick={handleFetch}>Button</button>
    </div>
  );
};

export default Game;
