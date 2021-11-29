import React, { useEffect, useState } from "react";
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
  const [imageName, setImageName] = useState("Upload an image");

  const addObject = (e) => {
    let url;
    if (e.target.files[0]) {
      url = URL.createObjectURL(e.target.files[0]);
      setImage((image.src = url));
      setImageName(e.target.files[0].name);
    }
    image.addEventListener("load", function () {
      canvasImage(inputText.top, inputText.bottom, canvas, image);
    });
  };

  useEffect(() => {
    if (canvas.getContext) {
      canvasImage(inputText.top, inputText.bottom, canvas, image);
    }
  }, [inputText.top, inputText.bottom]);

  const canvasImage = (top, bottom, canvas, image) => {
    const containerCanvas = document.getElementById("containerCanvas");
    setImage(image);
    const ctx = canvas.getContext("2d");
    const height = containerCanvas.clientHeight;
    const width = containerCanvas.clientWidth;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const marginY = height / 9;
    const fontSize = 60;

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

  const handleSave = (e) => {
    e.preventDefault();
    const image = e.target.previousSibling;
    const element = document.createElement("a");
    element.download = "download.png";
    element.href = image.toDataURL();
    element.click();
    element.remove();
  };

  return (
    <div className={styles.meme}>
      <Home />
      <div className={styles.containerMeme}>
        <div className={styles.contentText}>
          <div className={styles.setupCanvas}>
            <h2>Create your own MEME</h2>
            <form>
              <div className={styles.inputField}>
                <label htmlFor="imageFiles">Load image</label>
                <input
                  type="file"
                  id="imageFiles"
                  onChange={addObject}
                  accept="image/*"
                />
                <p>{imageName.slice(0,16)}</p>
              </div>
              <div className={styles.inputField}>
                <label htmlFor="topText">Top Label Text</label>
                <input
                  type="text"
                  id="topText"
                  autoComplete="off"
                  value={inputText.top}
                  onChange={handleInput}
                  name="top"
                  maxLength={10}
                />
              </div>
              <div className={styles.inputField}>
                <label htmlFor="bottomText">Bottom Label Text</label>
                <input
                  type="text"
                  id="bottomText"
                  autoComplete="off"
                  name="bottom"
                  value={inputText.bottom}
                  onChange={handleInput}
                  maxLength={10}
                />
              </div>
            </form>
          </div>
        </div>
        <div id="containerCanvas" className={styles.imageCanvas}>
          {renderCanvas} 
          <button onClick={handleSave}>Save Files</button>
        </div>
      </div>
    </div>
  );
};

export default Meme;
