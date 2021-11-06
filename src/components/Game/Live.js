import React from "react";
import styles from "../../style/Live.module.css";

const Game = ({ score, setScore, player, data }) => {
  
  console.log(data)

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
              data[0].results.map((question,index) => (
                <div className={styles.question} key={index}>{question.question}</div>
              ))}
          </div>
          <div className={styles.questionRow}>
            {data &&
              data[1].results.map((question,index) => (
                <div className={styles.question} key={index}>{question.question}</div>
              ))}
          </div>
          <div className={styles.questionRow}>
            {data &&
              data[2].results.map((question,index) => (
                <div className={styles.question} key={index}>{question.question}</div>
              ))}
          </div>
          <div className={styles.questionRow}>
            {data &&
              data[3].results.map((question,index) => (
                <div className={styles.question} key={index}>{question.question}</div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
