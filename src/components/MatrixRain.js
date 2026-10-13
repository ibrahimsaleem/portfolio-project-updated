import React, { useEffect, useRef } from "react";

// Matrix rain background. Drawn with requestAnimationFrame at ~25fps (the effect doesn't need more),
// paused while the tab is hidden, and a single still frame for visitors who prefer reduced motion.
const FRAME_MS = 40;

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const charArr = "アイウエオカキクケコサシスセソタチツテトナニヌネノ01010110101AI>_{}[]|#@$%SECURITY".split("");
    const fontSize = 13;
    let drops = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops = Array(Math.floor(canvas.width / fontSize)).fill(0).map(() => Math.random() * -100);
    };
    resize();

    function draw() {
      ctx.fillStyle = "rgba(6, 6, 17, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px 'Courier New', monospace`;
      for (let i = 0; i < drops.length; i++) {
        const brightness = Math.random();
        ctx.fillStyle = brightness > 0.98 ? "#ffffff" : brightness > 0.9 ? "#80ffb0" : "#00FF41";
        ctx.globalAlpha = 0.7 + Math.random() * 0.3;
        ctx.fillText(charArr[(Math.random() * charArr.length) | 0], i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.978) drops[i] = 0;
        drops[i] += 0.5;
      }
      ctx.globalAlpha = 1;
    }

    if (reduceMotion) {
      drops = drops.map(() => Math.random() * (canvas.height / fontSize));
      draw();
      return undefined;
    }

    let raf = 0;
    let last = 0;
    const loop = (t) => {
      raf = requestAnimationFrame(loop);
      if (t - last < FRAME_MS) return;
      last = t;
      draw();
    };
    const start = () => {
      if (!raf && !document.hidden) raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    start();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
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
