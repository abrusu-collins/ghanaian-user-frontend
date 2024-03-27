import React from "react";
import { FaGithub } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
function Hero() {
  return (
    <div className="hero">
      <a href="" className="star">
        <FaGithub />
        <p>Star us on GitHub</p>
        <GoChevronRight />
      </a>
      <p className="title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
        eveniet facilis. Delectus veniet facilis. Delectus
      </p>
      <div className="text">
        <p>Lorem ipsum dolor facilis. Delectus</p>
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="cta">
        <a href="">Get Started</a>
        <a href="">See it in action</a>
      </div>
    </div>
  );
}

export default Hero;
