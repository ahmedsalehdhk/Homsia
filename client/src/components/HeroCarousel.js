import React from "react";
import { FaArrowDown } from "react-icons/fa";

const HeroCarousel = () => {
  return (
    <div className="hero-main relative h-screen w-screen text-center text-white overflow-y-hidden">
      <div
        className="hero h-full w-full"
        id="hc1"
        style={{ backgroundImage: "url('/assets/hero/hero-01.jpg')" }}
      >
        <div className="overlay-hero bg-black/50 h-full w-full flex flex-col md:justify-center items-stretch pt-40 md:pt-0">
          <div className="container-site flex flex-col items-center">
            <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 font-merriweather max-w-4xl leading-tight">
              Own Real Estate at a Fraction of the Cost
            </h1>
            <p className="hero-text text-lg md:text-xl font-light max-w-2xl text-gray-100">
              Homsia makes homeownership accessible to everyone through
              transparent, share-based property ownership.
            </p>
          </div>
        </div>
      </div>
      <a href="#about">
        <div className="indicater absolute top-[70%] lg:top-[85%] left-0 right-0 mx-auto border rounded-full px-4 py-8 animate-bounce w-fit">
          <FaArrowDown />
        </div>
      </a>
    </div>
  );
};

export default HeroCarousel;
