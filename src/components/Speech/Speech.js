import React, { useState, useEffect } from "react";
import Home from "../Home";

import styles from "../../style/Speech.module.css";

const Speech = () => {
  const [voices, setVoices] = useState([]);
  const [textareaValue, setTextareaValue] = useState("");
  const [voicer, setVoicer] = useState("");

  useEffect(() => {
    speechSynthesis.addEventListener("voiceschanged", () => {
      setVoices(speechSynthesis.getVoices());
    });
  }, []);

  const getText = () => {
    const message = new SpeechSynthesisUtterance();
    message.text = textareaValue;
    message.voice = voicer;
    speechSynthesis.speak(message);
  };

  const onChangeText = (e) => {
    setTextareaValue(e.target.value);
  };

  const onChangeVoicer = (e) => {
    setVoicer(voices.find((el) => el.name === e.target.value));
  };

  return (
    <div className={styles.speech}>
      <Home />
      <h2 className={styles.title}>
        Your personal <br /> text speech reader
      </h2>
      <div className={styles.content}>
        <div className={styles.leftWing}>
          <textarea
            value={textareaValue}
            onChange={onChangeText}
            placeholder="enter your text"
          ></textarea>
        </div>
        <div className={styles.rightWing}>
          <div className={styles.rightContent}>
            <div className={styles.selected}>
              <h3>Choose Voicer</h3>
              <select onChange={onChangeVoicer}>
                {voices.length &&
                  voices.map((voice, index) => (
                    <option key={index} value={voice.name}>
                      {voice.name}
                    </option>
                  ))}
              </select>
            </div>
            <button className={styles.btn} onClick={getText}>
              Read Text
            </button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Speech;
