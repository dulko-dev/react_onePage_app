import React from "react";
import styles from "../../style/Home.module.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { GoLocation } from "react-icons/go";
import { FaGamepad } from "react-icons/fa";
import { BsChatRightText, BsCardImage } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";

const Home = () => {
  return (
    <IconContext.Provider
      value={{
        color: "#F6F7EB",
        size: "2.5em",
        style: { cursor: "pointer" },
      }}
    >
      <nav className={styles.nav}>
        <Link to="/location">
          <GoLocation />
        </Link>
        <Link to="/game">
          <FaGamepad />
        </Link>
        <Link to="/speech">
          <BsChatRightText />
        </Link>
        <Link to="/meme">
          <BsCardImage />
        </Link>
        <Link to="/about">
          <SiAboutdotme />
        </Link>
      </nav>
    </IconContext.Provider>
  );
};

export default Home;
