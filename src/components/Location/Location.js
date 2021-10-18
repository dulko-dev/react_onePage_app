import React from "react";
import Home from "../Home";
import styles from "../../style/Location.module.css";

const Location = () => {
  const getLocation = (e) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);

      function error(err) {
        if (err.code === 1) {
          e.target.innerText = err.message;
        } else if (err.code === 2) {
          e.target.innerText = "Location not available";
        } else {
          e.target.innerText = "Something gone wrong";
        }
      }

      function success(pos) {
        const time = pos.timestamp;
        const setTime = new Date(time).toLocaleTimeString("en-US");
        const setDate = new Date(time).toLocaleDateString("pl-PL");
        console.log(setTime, setDate);
        const { latitude, longitude } = pos.coords;
        console.log(latitude, longitude);
      }
    } else {
      e.target.innerText = "Your browser doesn't support geolocation";
    }
  };

  return (
    <div className={styles.location}>
      <Home />
      <div className={styles.content}>
        <div className={styles.buttonLocation}>
          <button type="button" className={styles.button} onClick={getLocation}>
            Detect your Location
          </button>
        </div>
        <div className={styles.map}>Here will be map...</div>
      </div>
    </div>
  );
};

export default Location;
