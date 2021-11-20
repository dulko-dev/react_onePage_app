import React, { useState } from "react";
import styles from "../../style/Live.module.css";

const Game = ({ score, setScore, player, data, openCount, setOpenCount }) => {
  const [column, setColumn] = useState("");
  const [row, setRow] = useState("");
  const [takeScore, setTakeScore] = useState("");
  const [active, setActive] = useState(true);
  const [time, setTime] = useState({
    second: "",
    minute: "",
  });

  const matrix = (e) => {
    setColumn(e.target.dataset.column);
    setRow(e.target.dataset.row);
    e.target.style.display = "none";
    setTakeScore(e.target.children[0].innerText);
    setActive(!active);
  };

  const goodcolumn = (e) => {
    e.preventDefault();
    const correct = e.target.innerText;
    if (correct === data[column].results[row].correct_answer) {
      e.target.style.background = "green";
      setScore(score + Number(takeScore));
      if (e.target.style.background === "green") {
        e.target.disabled = true;
        e.target.nextElementSibling.disabled = true;
      }
    } else {
      e.target.style.background = "red";
      setScore(score - Number(takeScore));
      if (e.target.style.background === "red") {
        e.target.disabled = true;
        e.target.nextElementSibling.disabled = true;
      }
    }
    setActive(!active);
    setOpenCount(openCount - 1);
  };

  const badcolumn = (e) => {
    e.preventDefault();
    const fail = e.target.innerText;
    if (fail === data[column].results[row].correct_answer) {
      e.target.style.background = "green";
      setScore(score + Number(takeScore));
      if (e.target.style.background === "green") {
        e.target.disabled = true;
        e.target.previousElementSibling.disabled = true;
      }
    } else {
      e.target.style.background = "red";
      setScore(score - Number(takeScore));
      if (e.target.style.background === "red") {
        e.target.disabled = true;
        e.target.previousElementSibling.disabled = true;
      }
    }
    setActive(!active);
    setOpenCount(openCount - 1);
  };

  function escapeHtml(text) {
    return text
      .replaceAll("&amp;", "&")
      .replaceAll("&lt;", "<")
      .replaceAll("&gt;", ">")
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'");
  }

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
          <div className={styles.category}>
            {data && data[0].response_code == 0
              ? data[0].results[0].category
              : "None"}
          </div>
          <div className={styles.category}>
            {data && data[1].response_code == 0
              ? data[1].results[0].category
              : "None"}
          </div>
          <div className={styles.category}>
            {data && data[2].response_code == 0
              ? data[2].results[0].category
              : "None"}
          </div>
          <div className={styles.category}>
            {data && data[3].response_code == 0
              ? data[3].results[0].category
              : "None"}
          </div>
        </div>
        <div className={styles.questionContent}>
          <div className={styles.questionRow}>
            {data && data[0].response_code === 1 ? (
              <div className={styles.emptyQuestions}>
                <p>Sorry we don't have enough questions in this category</p>
              </div>
            ) : (
              data &&
              data[0].results.map((question, index) => (
                <div className={styles.question} key={index}>
                  <>
                    <div
                      className={styles.scoreBoard}
                      data-column={0}
                      data-row={index}
                      onClick={active ? matrix : undefined}
                    >
                      <p className={styles.score}>
                        {question.difficulty === "easy"
                          ? "100"
                          : question.difficulty === "medium"
                          ? "200"
                          : "300"}
                      </p>
                    </div>
                    <p>{escapeHtml(question.question)}</p>

                    <button onClick={goodcolumn}>True</button>
                    <button onClick={badcolumn}>False</button>
                  </>
                </div>
              ))
            )}
          </div>
          <div className={styles.questionRow}>
            {data && data[1].response_code === 1 ? (
              <div className={styles.emptyQuestions}>
                <p>Sorry we don't have enough questions in this category</p>
              </div>
            ) : (
              data &&
              data[1].results.map((question, index) => (
                <div className={styles.question} key={index}>
                  <>
                    <div
                      className={styles.scoreBoard}
                      data-column={1}
                      data-row={index}
                      onClick={active ? matrix : undefined}
                    >
                      <p className={styles.score}>
                        {question.difficulty === "easy"
                          ? "100"
                          : question.difficulty === "medium"
                          ? "200"
                          : "300"}
                      </p>
                    </div>
                    <p>{escapeHtml(question.question)}</p>
                    <button onClick={goodcolumn}>True</button>
                    <button onClick={badcolumn}>False</button>
                  </>
                </div>
              ))
            )}
          </div>
          <div className={styles.questionRow}>
            {data && data[2].response_code === 1 ? (
              <div className={styles.emptyQuestions}>
                <p>Sorry we don't have enough questions in this category</p>
              </div>
            ) : (
              data &&
              data[2].results.map((question, index) => (
                <div className={styles.question} key={index}>
                  <>
                    <div
                      className={styles.scoreBoard}
                      data-column={2}
                      data-row={index}
                      onClick={active ? matrix : undefined}
                    >
                      <p className={styles.score}>
                        {question.difficulty === "easy"
                          ? "100"
                          : question.difficulty === "medium"
                          ? "200"
                          : "300"}
                      </p>
                    </div>
                    <p>{escapeHtml(question.question)}</p>
                    <button onClick={goodcolumn}>True</button>
                    <button onClick={badcolumn}>False</button>
                  </>
                </div>
              ))
            )}
          </div>
          <div className={styles.questionRow}>
            {data && data[3].response_code === 1 ? (
              <div className={styles.emptyQuestions}>
                <p>Sorry we don't have enough questions in this category</p>
              </div>
            ) : (
              data &&
              data[3].results.map((question, index) => (
                <div className={styles.question} key={index}>
                  <>
                    <div
                      className={styles.scoreBoard}
                      data-column={3}
                      data-row={index}
                      onClick={active ? matrix : undefined}
                    >
                      <p className={styles.score}>
                        {question.difficulty === "easy"
                          ? "100"
                          : question.difficulty === "medium"
                          ? "200"
                          : "300"}
                      </p>
                    </div>
                    <p>{escapeHtml(question.question)}</p>
                    <button onClick={goodcolumn}>True</button>
                    <button onClick={badcolumn}>False</button>
                  </>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {openCount === 0 && (
        <div className={styles.modalWindow}>
          <div style={{position:'relative'}}>
            <h4>Thank you for playing game {player}</h4>
            <p>you score is {score}</p>
            <div>
              <button>Restart</button>
              <button>Quit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
