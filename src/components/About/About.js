import React from "react";
import Home from "../Home";
import styles from "../../style/About.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdWebAsset } from "react-icons/md";

const About = () => {
  return (
    <div className={styles.about}>
      <Home />
      <div className={styles.content}>
        <div className={styles.contentCard}>
          <div className={styles.card}>
            <div className={`${styles.front} ${styles.frontAbout}`}>
              <p>About me</p>
            </div>
            <div className={styles.back}>
              <BsLinkedin />
              <BsGithub />
              <MdWebAsset />
            </div>
          </div>
        </div>
        <div className={styles.contentCard}>
          <div className={styles.card}>
            <div className={`${styles.front} ${styles.frontSkill}`}>
              <p>Skills</p>
            </div>
            <div className={styles.back}>Skills</div>
          </div>
        </div>
        <div className={styles.contentCard}>
          <div className={styles.card}>
            <div className={`${styles.front} ${styles.frontSpareTime}`}>
              <p>Spare Time</p>
            </div>
            <div className={styles.back}>Spare Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// Photo by <a href="https://unsplash.com/@r3dmax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jonatan Pie</a> on <a href="https://unsplash.com/s/photos/star?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@wimvanteinde?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Wim van 't Einde</a> on <a href="https://unsplash.com/s/photos/chess?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//Photo by <a href="https://unsplash.com/@quincoetzee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Quinton Coetzee</a> on <a href="https://unsplash.com/s/photos/coding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
