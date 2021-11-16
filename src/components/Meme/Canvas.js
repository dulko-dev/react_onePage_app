import React, { useState, useEffect } from "react";

const Canvas = () => {
  const [canvas, setCanvas] = useState("");

  useEffect(() => {
    setCanvas(document.getElementById("canvas"));
  }, []);

  return {
    canvas,
    renderCanvas: <canvas id="canvas"></canvas>,
  };
};

export default Canvas;
