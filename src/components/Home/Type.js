import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Applied AI Data Scientist",
          "AI Engineer",
          "LLM & RAG Practitioner",
          "Cybersecurity Researcher",
          "Software Engineer (.NET/Angular)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
