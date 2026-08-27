import React from "react";
import { FaArrowDown } from "react-icons/fa";

const HeroCarousel = () => {
  return (
    <div className="hero-main relative h-screen w-screen text-center text-white">
      <div
        className="hero h-full w-full"
        id="hc1"
        style={{ backgroundImage: "url('/assets/hero/hero-01.jpg')" }}
      >
        <div className="overlay-hero bg-black/50 h-full w-full flex flex-col justify-center items-stretch">
          <div className="container-site flex flex-col items-center">
            <h1 className="hero-text text-4xl md:text-5xl lg:text-7xl font-medium mb-6 font-display max-w-4xl leading-[1.05] tracking-tight">
              Own Real Estate at a Fraction of the Cost
            </h1>
            <p className="hero-text text-lg md:text-xl font-light max-w-xl text-gray-100 leading-relaxed">
              Homsia makes homeownership accessible to everyone through
              transparent, share-based property ownership.
            </p>
          </div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll down">
        <div className="indicater absolute bottom-10 left-0 right-0 mx-auto border border-white/70 rounded-full px-4 py-8 animate-bounce w-fit">
          <FaArrowDown />
        </div>
      </a>
    </div>
  );
};

export default HeroCarousel;
