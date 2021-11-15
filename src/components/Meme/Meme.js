import React from "react";
import Home from "../Home";
import Canvas from "./Canvas";
import styles from "../../style/Meme.module.css";

const Meme = () => {
  const addObject = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    console.log(url);
  };

  return (
    <div className={styles.meme}>
      <Home />
      <div className={styles.container}>
        <div className={styles.contentText}>
          <div className={styles.setupCanvas}>
            <h2>Create your own MEME</h2>
            <form>
              <label htmlFor="imageFiles">Load image</label>
              <input type="file" id="imageFiles" onChange={addObject} />
              <label htmlFor="topText">Top Label Text</label>
              <input id="topText" />
              <label htmlFor="bottomText">Bottom Label Text</label>
              <input id="bottomText" />
            </form>
          </div>
        </div>
        <div className={styles.imageCanvas}>
          <Canvas />
        </div>
      </div>
    </div>
  );
};

export default Meme;
