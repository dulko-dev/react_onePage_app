import React from "react";
import Home from "../Home";
import styles from "../../style/Location.module.css";

const Location = () => {
  return (
    <div className={styles.location}>
      <Home />
      <div>Location</div>
    </div>
  );
};

export default Location;
