import React, { useState, useEffect } from "react";

const Canvas = () => {
  const [canvas, setCanvas] = useState("");

  useEffect(() => {
    setCanvas(document.getElementById("canvas"));
  }, []);

  return {
    canvas,
    renderCanvas: <canvas style={{width:'100%', height:'100%'}} id="canvas"></canvas>,
  };
};

export default Canvas;
