import React from "react";
import doctor from "./doctor.json";
import "./HeroSection.css";

import Lottie from "lottie-react";

function HeroSection() {
  return (
    <section className="HeroSection">
      <div className="TextContainer">
        <h1>Advanced Healthcare </h1>
        <h2>
          Made Personal. <br />
          Best at Work
        </h2>
      </div>
      <div className="ImageContainer">
        <Lottie animationData={doctor} />
      </div>
    </section>
  );
}

export default HeroSection;
