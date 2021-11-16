import React, { useState } from "react";
import Home from "../Home";
import Canvas from "./Canvas";
import styles from "../../style/Meme.module.css";

const Meme = () => {
  const { canvas, renderCanvas } = Canvas();

  const [image, setImage] = useState(new Image());
  const [inputText, setInputText] = useState({
    top: "",
    bottom: "",
  });

  const addObject = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImage((image.src = url));

    image.addEventListener("load", function () {
      canvasImage(inputText.top, inputText.bottom, canvas, image);
    });
  };

  const canvasImage = (top, bottom, canvas, image) => {
    const containerCanvas = document.getElementById("containerCanvas");

    const ctx = canvas.getContext("2d");
    const height = containerCanvas.clientHeight;
    const width = containerCanvas.clientWidth;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // wrapped text or limit of words
    
    const marginY = height / 9;
    const fontSize = Math.floor(height / 10);

    ctx.fillStyle = "black";
    ctx.strokeStyle = "white";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px serif`;

    ctx.baseLine = "top";
    ctx.strokeText(top, width / 2, marginY);
    ctx.fillText(top, width / 2, marginY);

    ctx.baseLine = "bottom";
    ctx.strokeText(bottom, width / 2, height - marginY);
    ctx.fillText(bottom, width / 2, height - marginY);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputText((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.meme}>
      <Home />
      <div className={styles.container}>
        <div className={styles.contentText}>
          <div className={styles.setupCanvas}>
            <h2>Create your own MEME</h2>
            <form>
              <label htmlFor="imageFiles">Load image</label>
              <input type="file" id="imageFiles" onChange={addObject} />
              <label htmlFor="topText">Top Label Text</label>
              <input
                id="topText"
                value={inputText.top}
                onChange={handleInput}
                name="top"
              />
              <label htmlFor="bottomText">Bottom Label Text</label>
              <input
                id="bottomText"
                name="bottom"
                value={inputText.bottom}
                onChange={handleInput}
              />
              <div className={styles.changeColor}>
                {/* configuration for text color height and position */}
              </div>
            </form>
          </div>
        </div>
        <div id="containerCanvas" className={styles.imageCanvas}>
          {renderCanvas}
        </div>
      </div>
    </div>
  );
};

export default Meme;
