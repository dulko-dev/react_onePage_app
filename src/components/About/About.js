import React from "react";
import Home from "../Home";
import styles from "../../style/About.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";
import arrayIcons from "./icons";

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
              <div className={styles.back_content}>
                <h2>You can catch me here</h2>
                <a
                  href="https://linkedin.com/in/kamil-duliniec"
                  alt="linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Linkedin</span>
                  <BsLinkedin />
                </a>
                <a
                  href="https://github.com/dulko-dev"
                  alt="github profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GitHub</span>

                  <BsGithub />
                </a>
                <a
                  href="https://dulko-dev.com"
                  alt="website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Website</span>
                  <MdOutlineContactPage />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentCard}>
          <div className={styles.card}>
            <div className={`${styles.front} ${styles.frontSkill}`}>
              <p>Skills</p>
            </div>
            <div className={styles.back}>
              <h2 className={styles.titleIcon}>Skills</h2>
              <div className={styles.iconsContent}>
                {arrayIcons.map((icon) => {
                  return (
                    <div className={styles.iconImage} key={icon.id}>
                      <img src={icon.img} alt={icon.title} />
                      <span>{icon.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
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
// Photo by <a href="https://unsplash.com/@nordwood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NordWood Themes</a> on <a href="https://unsplash.com/s/photos/dark-brick-wall?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
