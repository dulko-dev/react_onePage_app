import React, { useState } from "react";
import styles from "../../style/Live.module.css";

const Game = ({ score, setScore, player, data }) => {
  const [column, setColumn] = useState("");
  const [row, setRow] = useState("");

  console.log(data);

  const matrix = (e) => {
    setColumn(e.target.dataset.column);
    setRow(e.target.dataset.row);
  };

  const goodcolumn = (e) => {
    e.preventDefault();
    const correct = e.target.innerText;
    if (correct === data[column].results[row].correct_answer) {
      e.target.style.background = "green";
    } else {
      e.target.style.background = "red";
    }
  };

  const badcolumn = (e) => {
    e.preventDefault();
    const fail = e.target.innerText;
    if (fail === data[column].results[row].correct_answer) {
      e.target.style.background = "green";
    } else {
      e.target.style.background = "red";
    }
  };

  return (
    <div className={styles.gameLive}>
      <div className={styles.infoUser}>
        <div>
          {player} : {score}
        </div>
        <div>time: 00:00</div>
      </div>
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
              data[0].results.map((question, index) => (
                <div className={styles.question} key={index}>
                  <p data-column={0} data-row={index} onClick={matrix}>
                    {question.question}
                  </p>
                  <button onClick={goodcolumn}>True</button>
                  <button onClick={badcolumn}>False</button>
                </div>
              ))}
          </div>
          <div className={styles.questionRow}>
            {data &&
              data[1].results.map((question, index) => (
                <div className={styles.question} key={index}>
                  <p data-column={1} data-row={index} onClick={matrix}>
                    {question.question}
                  </p>
                  <button onClick={goodcolumn}>True</button>
                  <button onClick={badcolumn}>False</button>
                </div>
              ))}
          </div>
          <div className={styles.questionRow}>
            {data &&
              data[2].results.map((question, index) => (
                <div className={styles.question} key={index}>
                  <p data-column={2} data-row={index} onClick={matrix}>
                    {question.question}
                  </p>
                  <button onClick={goodcolumn}>True</button>
                  <button onClick={badcolumn}>False</button>
                </div>
              ))}
          </div>
          <div className={styles.questionRow}>
            {data &&
              data[3].results.map((question, index) => (
                <div className={styles.question} key={index}>
                  <p data-column={3} data-row={index} onClick={matrix}>
                    {question.question}
                  </p>
                  <button onClick={goodcolumn}>True</button>
                  <button onClick={badcolumn}>False</button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
