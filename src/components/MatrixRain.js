import React, { useEffect, useRef } from "react";

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノ01010110101AI>_{}[]|#@$%SECURITY";
    const charArr = chars.split("");
    const fontSize = 13;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(0).map(() => Math.random() * -100);

    function draw() {
      ctx.fillStyle = "rgba(6, 6, 17, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArr[Math.floor(Math.random() * charArr.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const brightness = Math.random();
        if (brightness > 0.98) {
          ctx.fillStyle = "#ffffff";
        } else if (brightness > 0.9) {
          ctx.fillStyle = "#80ffb0";
        } else {
          ctx.fillStyle = "#00FF41";
        }

        ctx.globalAlpha = 0.7 + Math.random() * 0.3;
        ctx.fillText(char, x, y);
        ctx.globalAlpha = 1;

        if (y > canvas.height && Math.random() > 0.978) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }
    }

    const interval = setInterval(draw, 40);

    const handleResize = () => {
      resize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0).map(() => Math.random() * -100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.13,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

export default MatrixRain;
