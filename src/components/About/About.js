import React, { useRef, useState, useEffect } from "react";
import Home from "../Home";
import styles from "../../style/About.module.css";
import arrowDown from "../../asset/down-arrow.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";
import { icons } from "./icons";
import { projects } from "./projects";

const About = () => {
  const [showCard, setShowCard] = useState({
    about: false,
    skills: false,
    projects: false,
  });

  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();

  useEffect(() => {
    const checked = (e) => {
      if (aboutRef.current && aboutRef.current.contains(e.target)) {
        setShowCard((prev) => ({ ...prev, about: true }));
      } else {
        setShowCard((prev) => ({ ...prev, about: false }));
      }

      if (skillsRef.current && skillsRef.current.contains(e.target)) {
        setShowCard((prev) => ({ ...prev, skills: true }));
      } else {
        setShowCard((prev) => ({ ...prev, skills: false }));
      }

      if (projectRef.current && projectRef.current.contains(e.target)) {
        setShowCard((prev) => ({ ...prev, projects: true }));
      } else {
        setShowCard((prev) => ({ ...prev, projects: false }));
      }
    };
    window.addEventListener("click", checked);
    return () => {
      window.removeEventListener("click", checked);
    };
  }, []);

  return (
    <div className={styles.about}>
      <Home />
      <div className={styles.contentAbout}>
        <div className={styles.contentCard}>
          <div
            ref={aboutRef}
            className={`${styles.card} ${showCard.about && styles.cardHover} `}
          >
            <div className={`${styles.front} ${styles.frontAbout}`}>
              <p>About me</p>
            </div>
            <div className={styles.back}>
              <div className={styles.back_content}>
                <h2>Where can you catch me</h2>
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
                  href="https://dulko-dev.pl"
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
          <div
            ref={skillsRef}
            className={`${styles.card} ${showCard.skills && styles.cardHover} `}
          >
            <div className={`${styles.front} ${styles.frontSkill}`}>
              <p>Skills</p>
            </div>
            <div className={styles.back}>
              <h2 className={styles.titleIcon}>Skills</h2>
              <div className={styles.iconsContent}>
                {icons.map((icon) => {
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
          <div
            ref={projectRef}
            className={`${styles.card} ${
              showCard.projects && styles.cardHover
            } `}
          >
            <div className={`${styles.front} ${styles.frontSpareTime}`}>
              <p>Projects</p>
            </div>
            <div className={styles.back2}>
              {projects.map((project, index) => {
                return (
                  <div className={styles.projectContent_simple} key={index}>
                    <h3>{project.title}</h3>
                    <ul>
                      {project.tech.map((name, index) => (
                        <li key={index}>
                          <span>{name}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.btn}
                    >
                      DEMO
                      <div
                        className={styles.downArrowRight}
                        style={
                          project.title === "Flag Countries"
                            ? { display: "none" }
                            : { display: "block" }
                        }
                      >
                        <img alt="arrow down" src={arrowDown} />
                      </div>
                      <div
                        className={styles.downArrowLeft}
                        style={
                          project.title === "Flag Countries"
                            ? { display: "none" }
                            : { display: "block" }
                        }
                      >
                        <img alt="arrow down" src={arrowDown} />
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
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
