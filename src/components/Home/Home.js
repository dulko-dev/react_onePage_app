import React from "react";
import styles from "../../style/Home.module.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { GoLocation } from "react-icons/go";
import { FaGamepad } from "react-icons/fa";
import { BsChatRightText, BsCardImage } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";

const Home = ({ icons }) => {
  console.log(icons);
  return (
    <div className={styles.home}>
      <IconContext.Provider
        value={{
          color: "#F6F7EB",
          size: "2.5em",
          style: { cursor: "pointer" },
        }}
      >
        <nav className={styles.nav}>
          <Link to="/location">
            <GoLocation className={icons ? styles.haha : undefined} />
          </Link>
          <Link to="/game">
            <FaGamepad className={icons ? styles.haha : undefined} />
          </Link>
          <Link to="/speech">
            <BsChatRightText className={icons ? styles.haha : undefined} />
          </Link>
          <Link to="/meme">
            <BsCardImage className={icons ? styles.haha : undefined} />
          </Link>
          <Link to="/about">
            <SiAboutdotme />
          </Link>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Home;
