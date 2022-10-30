import React from "react";
import HeroRight from "./heroRight";
import HeroLeft from "./heroLeft";

const Hero = () => {
  return (
    <div className="hero">
      <img src="/img/iconfinder_glasses_71479.png" className="glasses" alt=""/>
      <HeroLeft />
      <HeroRight />
    </div>
  );
};
export default Hero;
