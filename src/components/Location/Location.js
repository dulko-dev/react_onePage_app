import React, { useState } from "react";
import Home from "../Home";
import styles from "../../style/Location.module.css";

const Location = () => {
  const [data, setData] = useState({
    clock: "",
    date: "",
  });
  const [dataLocation, setDataLocation] = useState();
  const [visibleInfo, setVisibleInfo] = useState(false);

  const getLocation = (e) => {
    const apiKey = process.env.REACT_APP_API_KEY;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);

      function error(err) {
        if (err.code === 1) {
          e.target.innerText = err.message;
        } else if (err.code === 2) {
          e.target.innerText = "Location not available";
        } else {
          e.target.innerText = "Something has gone wrong";
        }
      }

      async function success(pos) {
        const time = pos.timestamp;
        const setTime = new Date(time).toLocaleTimeString("en-US");
        const setDate = new Date(time).toLocaleDateString("pl-PL");
        const { latitude, longitude } = pos.coords;
        setData({ date: setDate, clock: setTime });
        await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
        )
          .then((data) => {
            if (data.ok) {
              return data.json();
            } else {
              throw Error("something has gone wrong");
            }
          })
          .then((data) => setDataLocation(data.results[0].components));
        await setVisibleInfo(true);

        if (setVisibleInfo) {
          e.target.setAttribute("disabled", true);
          e.target.innerText = "Done, enjoy it";
        }
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
          <button type="button" className={styles.btn} onClick={getLocation}>
            Detect your Location
          </button>
          {visibleInfo && (
            <div className={styles.information}>
              <h2>Details Information</h2>
              <div className={styles.infoBlock}>
                <p>road</p>
                <span>{dataLocation.road}</span>
              </div>
              <div className={styles.infoBlock}>
                <p>city</p>
                <span>{dataLocation.city}</span>
              </div>
              <div className={styles.infoBlock}>
                <p>city district</p>
                <span>{dataLocation.city_district}</span>
              </div>
              <div className={styles.infoBlock}>
                <p>postcode</p>
                <span>{dataLocation.postcode}</span>
              </div>
            </div>
          )}
        </div>
        <div className={styles.map}>Here will be map...</div>
      </div>
    </div>
  );
};

export default Location;
