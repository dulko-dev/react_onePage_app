import React, { useEffect, useState } from "react";
import styles from "../../style/Home.module.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { GoLocation } from "react-icons/go";
import { FaGamepad } from "react-icons/fa";
import { BsChatRightText, BsCardImage } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [selectedIcon, setSelectedIcon] = useState({
    location: false,
    game: false,
    chat: false,
    card: false,
    about: false,
  });
  const locationPath = useLocation();

  useEffect(() => {
    let path = locationPath.pathname;

    switch (path) {
      case "/location":
        setSelectedIcon({ location: true });
        break;
      case "/game":
        setSelectedIcon({ game: true });
        break;
      case "/speech":
        setSelectedIcon({ chat: true });
        break;
      case "/meme":
        setSelectedIcon({ card: true });
        break;
      case "/about":
        setSelectedIcon({ about: true });
        break;
    }
  }, []);

  return (
    <div className={styles.home}>
      <IconContext.Provider
        value={{
          color: "#F6F7EB",
          size: "2.5em",
          style: {
            cursor: "pointer",
          },
        }}
      >
        <nav className={styles.nav}>
          <Link to="/location">
            <GoLocation
              className={
                selectedIcon.location ? styles.orderIcon : styles.unOrderIcon
              }
            />
          </Link>
          <Link to="/game">
            <FaGamepad
              className={
                selectedIcon.game ? styles.orderIcon : styles.unOrderIcon
              }
            />
          </Link>
          <Link to="/speech">
            <BsChatRightText
              className={
                selectedIcon.chat ? styles.orderIcon : styles.unOrderIcon
              }
            />
          </Link>
          <Link to="/meme">
            <BsCardImage
              className={
                selectedIcon.card ? styles.orderIcon : styles.unOrderIcon
              }
            />
          </Link>
          <Link to="/about">
            <SiAboutdotme
              className={
                selectedIcon.about ? styles.orderIcon : styles.unOrderIcon
              }
            />
          </Link>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Home;
