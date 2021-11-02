import React, { useState, useRef } from "react";
import Home from "../Home";
import styles from "../../style/Location.module.css";
import { Map, View, Feature } from "ol";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import XYZ from "ol/source/XYZ";
import VectorSource from "ol/source/Vector";
import { fromLonLat } from "ol/proj";
import Point from "ol/geom/Point";

const Location = () => {
  const [data, setData] = useState({
    clock: "",
    date: "",
  });
  const [dataLocation, setDataLocation] = useState();
  const [visibleInfo, setVisibleInfo] = useState(false);
  const mapElement = useRef();

  const mapLayer = (lon, lat) => {
    let map = new Map({
      target: mapElement.current,
      layers: [],
      view: new View({
        center: fromLonLat([lon, lat]),
        zoom: 17,
        maxZoom: 20,
      }),
      controls: [],
    });

    let tileMap = new TileLayer({
      source: new XYZ({
        url: "http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}",
      }),
    });

    let vector = new VectorLayer({
      source: new VectorSource({
        features: [
          new Feature({
            geometry: new Point(fromLonLat([lon, lat])),
          }),
        ],
      }),
    });

    map.addLayer(tileMap);
    map.addLayer(vector);
  };

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
          .then((data) => {
            setDataLocation(data.results[0]);
            mapLayer(longitude, latitude);
          });

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
                <span>{dataLocation.components.road}</span>
              </div>
              <div className={styles.infoBlock}>
                <p>city</p>
                <span>{dataLocation.components.city}</span>
              </div>
              <div className={styles.infoBlock}>
                <p>city district</p>
                <span>{dataLocation.components.city_district}</span>
              </div>
              <div className={styles.infoBlock}>
                <p>postcode</p>
                <span>{dataLocation.components.postcode}</span>
              </div>
              <div className={styles.infoBlock}>
                <p className={styles.probablyPlace}>your probably place</p>
                <span className={styles.place}>{dataLocation.formatted}</span>
              </div>
              <div className={styles.infoBlock}>
                <p>strenght of confidence</p>
                <span>{dataLocation.confidence}</span>
              </div>
              <div className={styles.generate}>
                <p>Generate at</p>
                <span className={styles.time}>
                  {data.date} {data.clock}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className={styles.mapDiv}>
          <div ref={mapElement} className={styles.map}></div>
        </div>
      </div>
    </div>
  );
};

export default Location;
