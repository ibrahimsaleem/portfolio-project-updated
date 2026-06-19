import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Security & Governance Engineer",
          "LLM & Agentic AI Security",
          "AI Red Teamer & Threat Modeler",
          "Published AI Researcher",
          "MCP Security Specialist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
