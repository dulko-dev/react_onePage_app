import React from "react";
import styles from "../../style/Live.module.css";

const Game = ({ score, setScore, player, data }) => {
  const comparisonAnswer = (e) => {
    e.preventDefault();
    console.log(e.target.innerText);
    const correct = e.target.dataset.answer;
    if (correct === e.target.innerText) {
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
            {data && (
              <div className={styles.question}>
                <p>
                  {data[0].response_code == 0 && data[0].results[0].question}
                </p>
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  True
                </button>
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  False
                </button>
              </div>
            )}
            {data && (
              <div className={styles.question}>
                <p>
                  {data[1].response_code == 0 && data[1].results[0].question}
                </p>
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  True
                </button>
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  False
                </button>
              </div>
            )}
            {data && (
              <div className={styles.question}>
                {data[2].response_code == 0 && data[2].results[0].question}
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  True
                </button>
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  False
                </button>
              </div>
            )}
          </div>
          <div className={styles.questionRow}>
            {data && (
              <div className={styles.question}>
                {data[3].response_code == 0 && data[3].results[0].question}
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  True
                </button>
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  False
                </button>
              </div>
            )}
            {data && (
              <div className={styles.question}>
                {data[4].response_code == 0 && data[4].results[0].question}
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  True
                </button>
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  False
                </button>
              </div>
            )}
            {data && (
              <div className={styles.question}>
                {data[5].response_code == 0 && data[5].results[0].question}
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  True
                </button>
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  False
                </button>
              </div>
            )}
          </div>
          <div className={styles.questionRow}>
            {data && (
              <div className={styles.question}>
                {data[6].response_code == 0 && data[6].results[0].question}
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  True
                </button>
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  False
                </button>
              </div>
            )}
            {data && (
              <div className={styles.question}>
                {data[7].response_code == 0 && data[7].results[0].question}
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  True
                </button>
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  False
                </button>
              </div>
            )}
            {data && (
              <div className={styles.question}>
                {data[8].response_code == 0 && data[8].results[0].question}
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  True
                </button>
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  False
                </button>
              </div>
            )}
          </div>
          <div className={styles.questionRow}>
            {data && (
              <div className={styles.question}>
                {data[9].response_code == 0 && data[9].results[0].question}
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  True
                </button>
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  False
                </button>
              </div>
            )}
            {data && (
              <div className={styles.question}>
                {data[10].response_code == 0 && data[10].results[0].question}
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  True
                </button>
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  False
                </button>
              </div>
            )}
            {data && (
              <div className={styles.question}>
                {data[11].response_code == 0 && data[11].results[0].question}
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  True
                </button>
                <button
                  onClick={comparisonAnswer}
                  data-answer={data[0].results[0].correct_answer}
                >
                  False
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
