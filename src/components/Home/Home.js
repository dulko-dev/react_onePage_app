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
  const [showArrow, setShowArrow] = useState({
    location: false,
    game: false,
    chat: false,
    card: false,
    about: false,
  });
  const [burgerClick, setBurgerClick] = useState(false);
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

  const handleClick = () => {
    setBurgerClick(!burgerClick);
  };

  return (
    <div className={styles.home}>
      <div
        className={`${styles.burgerMenuContainer} ${
          burgerClick && styles.burgerMenuContainerOpen
        }`}
      >
        <div className={styles.burgerMenuContent} onClick={handleClick}>
          <div
            className={!burgerClick ? styles.burger : styles.burgerOpen}
          ></div>
        </div>
      </div>
      <IconContext.Provider
        value={{
          color: "#F6F7EB",
          style: {
            cursor: "pointer",
          },
        }}
      >
        <nav className={`${styles.nav} ${burgerClick && styles.navActive}`}>
          <Link to="/location">
            <GoLocation
              className={
                selectedIcon.location ? styles.orderIcon : styles.unOrderIcon
              }
              onMouseEnter={() =>
                setShowArrow(window.innerWidth > 500 && { location: true })
              }
              onMouseLeave={() =>
                setShowArrow(window.innerWidth > 500 && { location: false })
              }
            />
            <div
              className={
                showArrow.location
                  ? styles.modalLocation
                  : styles.modalLocaionNan
              }
            >
              <p className={styles.modalName}>Location</p>
            </div>
          </Link>
          <Link to="/game">
            <FaGamepad
              className={
                selectedIcon.game ? styles.orderIcon : styles.unOrderIcon
              }
              onMouseEnter={() =>
                setShowArrow(window.innerWidth > 500 && { game: true })
              }
              onMouseLeave={() =>
                setShowArrow(window.innerWidth > 500 && { game: false })
              }
            />
            <div
              className={
                showArrow.game ? styles.modalLocation : styles.modalLocaionNan
              }
            >
              <p className={styles.modalName}>Game</p>
            </div>
          </Link>
          <Link to="/speech">
            <BsChatRightText
              className={
                selectedIcon.chat ? styles.orderIcon : styles.unOrderIcon
              }
              onMouseEnter={() =>
                setShowArrow(window.innerWidth > 500 && { chat: true })
              }
              onMouseLeave={() =>
                setShowArrow(window.innerWidth > 500 && { chat: false })
              }
            />
            <div
              className={
                showArrow.chat ? styles.modalLocation : styles.modalLocaionNan
              }
            >
              <p className={styles.modalName}>Voice</p>
            </div>
          </Link>
          <Link to="/meme">
            <BsCardImage
              className={
                selectedIcon.card ? styles.orderIcon : styles.unOrderIcon
              }
              onMouseEnter={() =>
                setShowArrow(window.innerWidth > 500 && { card: true })
              }
              onMouseLeave={() =>
                setShowArrow(window.innerWidth > 500 && { card: false })
              }
            />
            <div
              className={
                showArrow.card ? styles.modalLocation : styles.modalLocaionNan
              }
            >
              <p className={styles.modalName}>Text</p>
            </div>
          </Link>
          <Link to="/about">
            <SiAboutdotme
              className={
                selectedIcon.about ? styles.orderIcon : styles.unOrderIcon
              }
              onMouseEnter={() =>
                setShowArrow(window.innerWidth > 500 && { about: true })
              }
              onMouseLeave={() =>
                setShowArrow(window.innerWidth > 500 && { about: false })
              }
            />
            <div
              className={
                showArrow.about ? styles.modalLocation : styles.modalLocaionNan
              }
            >
              <p className={styles.modalName}>About Me</p>
            </div>
          </Link>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Home;
