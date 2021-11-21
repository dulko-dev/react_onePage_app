import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../../style/Live.module.css";

const Game = ({ score, setScore, player, data, openCount, setOpenCount }) => {
  const [column, setColumn] = useState("");
  const [row, setRow] = useState("");
  const [takeScore, setTakeScore] = useState("");
  const [active, setActive] = useState(true);
  const [startGame, setStartGame] = useState(false);
  const [time, setTime] = useState({
    second: 0,
    minute: 0,
  });

  const history = useHistory();

  const menu = () => {
    history.push("/");
  };
  
  const restart = () => {
    window.location.reload();
  };

  const matrix = (e) => {
    setColumn(e.target.dataset.column);
    setRow(e.target.dataset.row);
    e.target.style.display = "none";
    setTakeScore(e.target.children[0].innerText);
    setActive(!active);
    setStartGame(true);
  };

  useEffect(() => {
    if (startGame == true) {
      const setInt = setInterval(() => {
        if (time.second === 60) {
          setTime((prev) => ({ ...prev, second: 0, minute: time.minute + 1 }));
        } else {
          setTime((prev) => ({ ...prev, second: time.second + 1 }));
        }
      }, 1000);
      return () => {
        clearInterval(setInt);
      };
    }
  }, [time.second, startGame]);

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
    if (openCount === 1) {
      setStartGame(false);
    }
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
    if (openCount === 1) {
      setStartGame(false);
    }
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
        <div>
          time: {time.minute < 10 ? "0" : ""}
          {time.minute}:{time.second < 10 ? "0" : ""}
          {time.second}
        </div>
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
          <div style={{ position: "relative" }}>
            <h4>Thank you for playing game {player}</h4>
            <p>Score = {score}</p>
            <p>
              Time = {time.minute < 10 ? "0" : ""}
              {time.minute}min {time.second < 10 ? "0" : ""}
              {time.second}sec
            </p>
            <div>
              <button onClick={restart}>Restart</button>
              <button onClick={menu}>Quit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
