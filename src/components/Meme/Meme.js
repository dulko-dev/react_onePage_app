import React from "react";
import Home from "../Home";
import styles from "../../style/Meme.module.css";

const Meme = () => {
  return (
    <div className={styles.meme}>
      <Home />
      <div>Meme</div>
    </div>
  );
};

export default Meme;
