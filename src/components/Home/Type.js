import React from "react";
import Typewriter from "typewriter-effect";
import portfolioData from "../../portfolio.json";

function Type() {
  const { skillset } = portfolioData;
  return (
    <Typewriter
      options={{
        strings: skillset,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
