import React, { useState, useEffect } from "react";
import Home from "../Home";
import styles from "../../style/Speech.module.css";

const Speech = () => {
  const [voices, setVoices] = useState([]);
  const [textareaValue, setTextareaValue] = useState("");
  const [voicer, setVoicer] = useState("");

  const getVoices = () => {
    return new Promise((resolve) => {
      let voices = speechSynthesis.getVoices();
      if (voices.length) {
        resolve(voices);
        return;
      }
      speechSynthesis.onvoiceschanged = () => {
        voices = speechSynthesis.getVoices();
        resolve(voices);
      };
    });
  };

  useEffect(() => {
    getVoices().then((voices) => setVoices(voices));
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
      <div className={styles.containerSpeech}>
        <h2 className={styles.title}>
          Your personal <br /> text speech reader
        </h2>
        <div className={styles.contentSpeech}>
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
                <h3>Choose Voicer*</h3>
                <select style={{ width: "100%" }} onChange={onChangeVoicer}>
                  {voices.length &&
                    voices.map((voice, index) => (
                      <option key={index} value={voice.name}>
                        {voice.name}
                      </option>
                    ))}
                </select>
                <p className={styles.recommend}>
                  *Recommend browser
                  <a
                    style={{ color: "inherit" }}
                    href="https://www.google.com/intl/eng_eng/chrome/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    - Google Chrome
                  </a>
                </p>
              </div>
              <button className={styles.btn} onClick={getText}>
                Read Text
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speech;
