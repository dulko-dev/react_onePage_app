import React from "react";
import Home from "../Home";
import styles from '../../style/About.module.css'


const About = () => {
  return (
    <div className={styles.about}>
      <Home />
      <div>About</div>
    </div>
  );
};

export default About;
