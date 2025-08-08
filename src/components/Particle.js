import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        background: {
          opacity: 0
        },
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: ["#00d4ff", "#667eea", "#f093fb", "#ffffff"]
          },
          shape: {
            type: ["circle", "triangle", "star"],
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00d4ff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.5
              }
            },
            push: {
              particles_nb: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            }
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
