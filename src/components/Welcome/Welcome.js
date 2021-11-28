import React from "react";
import styles from "../../style/Welcome.module.css";
import { SiAboutdotme } from "react-icons/si";

const Welcome = () => {


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>&#128513; &#9995; Hi there! &#9995; &#128513;</p>
        <ul className={styles.list}>
          <div className={styles.firstTwoIcons}>
            <li >
              On the left hand you can find and test them my four applications
             
            </li>
            <li>
              If you wanna get touch with me please check last icon
              <span style={{ display: "block" }}>
                &#8223;
                <SiAboutdotme className={styles.meIcon} />
                &#8221;
              </span>
            </li>
          </div>
          <div className={styles.lastTwoIcons}>
            <li>I hope you will enjoy it!</li>
            <li>Live long and prosper </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Welcome;
