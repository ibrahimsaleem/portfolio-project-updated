import React, { memo } from "react";
import Particles from "react-tsparticles";

// One global background, mounted once in App so it never restarts on navigation.
// Tuned for speed: fewer particles on small screens, a 60fps cap, circles only, no per-particle
// size/opacity animation, no click-to-add (it grew the particle count without limit), paused when
// the tab is hidden, and still when the visitor prefers reduced motion.
const reduceMotion =
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
const small = typeof window !== "undefined" && window.innerWidth < 768;

const options = {
  fpsLimit: 60,
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  background: { opacity: 0 },
  particles: {
    number: { value: small ? 28 : 60, density: { enable: true, value_area: 1200 } },
    color: { value: ["#00d4ff", "#667eea", "#f093fb", "#ffffff"] },
    shape: { type: "circle" },
    line_linked: { enable: true, distance: 140, color: "#00d4ff", opacity: 0.2, width: 1 },
    move: { enable: !reduceMotion, speed: 0.8, direction: "none", random: false, straight: false, out_mode: "out" },
    size: { value: 2, random: true },
    opacity: { value: 0.55, random: true },
  },
  interactivity: {
    detect_on: "window",
    events: { onhover: { enable: !small && !reduceMotion, mode: "grab" }, onclick: { enable: false }, resize: true },
    modes: { grab: { distance: 170, line_linked: { opacity: 0.45 } } },
  },
  retina_detect: false, // full-resolution particles on retina screens cost ~4x for no visible gain here
};

function Particle() {
  return <Particles id="tsparticles" params={options} />;
}

export default memo(Particle);
