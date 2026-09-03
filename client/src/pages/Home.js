import { Link } from "react-router-dom";
import {
  FaQuoteLeft,
  FaRegBuilding,
  FaMoneyCheckAlt,
  FaLightbulb,
} from "react-icons/fa";

import projects from "../data/db";
import HeroCarousel from "../components/HeroCarousel";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    if (!window.location.hash) return;
    const el = document.getElementById(window.location.hash.slice(1));
    if (el) el.scrollIntoView();
  }, []);

  return (
    <>
      <Navbar />
      <div className="home master-container overflow-x-hidden" id="home">
        {/* HERO SECTION */}
        <HeroCarousel />

        {/* ABOUT TEASER */}
        <div className="about py-32 bg-white" id="about">
          <div className="container-site text-left">
            <h2 className="text-4xl md:text-5xl mb-12 font-display leading-tight max-w-3xl text-gray-900">
              Building Homeownership Together
            </h2>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-800 font-semibold mb-6">
                  Homsia Properties Ltd is a Dhaka-based real estate company
                  built on a simple promise: to make homeownership
                  accessible, clear, and affordable for everyone.
                </p>
                <p className="text-lg text-gray-700 font-light mb-8">
                  Through our share-based ownership model, the cost of a
                  property is divided into smaller, affordable shares—so
                  everyday people can build real wealth through real estate,
                  one share at a time.
                </p>
                <Link
                  to={"/about"}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-black border-b border-gray-900 hover:border-black pb-0.5 transition-colors"
                >
                  Learn more about us
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="lg:w-1/2 w-full">
                <img
                  src="/assets/hero/about-hero-01.jpg"
                  alt="Homsia — Building Homeownership Together"
                  className="w-full h-auto object-cover aspect-[4/5] lg:aspect-auto lg:h-[560px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FEATURED SECTION */}
        <div className="featured py-32 bg-white" id="featured">
          <div className="container-site flex flex-col justify-center items-center">
            <h2 className="text-4xl md:text-5xl mb-5 font-display text-gray-900">
              Our Featured Exclusives
            </h2>
            <p className="text-gray-700 font-light mb-12 max-w-2xl text-center">
              Discover unparalleled real estate opportunities with our featured
              exclusives—crafted to elevate your property search and provide
              unique investment prospects.
            </p>
            <div className="featured-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full">
              {projects
                .filter((p) => p.featured === true || p.featured === "true")
                .slice(0, 3)
                .map((project) => (
                  <div key={project.id} className="w-full">
                    <ProjectCard data={project} />
                  </div>
                ))}
            </div>
            <Link
              to={"/projects"}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-black border-b border-gray-900 hover:border-black pb-0.5 transition-colors"
            >
              View all projects
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* SERVICES SECTION */}
        <div className="services py-32 bg-white" id="services">
          <div className="container-site">
            <div className="max-w-3xl mb-20">
              <h2 className="text-4xl md:text-5xl mb-6 font-display leading-tight text-gray-900">
                What we do
              </h2>
              <p className="text-lg text-gray-600 font-light">
                From breaking ground on new land to helping families move
                into a home of their own, we cover the full arc of modern
                real estate.
              </p>
            </div>
            <div className="service-cards grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 w-full">
              {[
                {
                  num: "01",
                  Icon: FaRegBuilding,
                  title: "Land Development",
                  desc: "We turn raw land into well-planned property projects—handling everything from start to finish. Through our shared ownership model, we make profitable and sustainable real estate simple and affordable for everyone.",
                },
                {
                  num: "02",
                  Icon: FaMoneyCheckAlt,
                  title: "Sell Apartments",
                  desc: "Our expert team helps you sell your home with ease and confidence, connecting you directly with the right buyers. We handle every detail to ensure you get the best value without the stress.",
                },
                {
                  num: "03",
                  Icon: FaLightbulb,
                  title: "Real Estate Consultancy",
                  desc: "Expert guidance for owners, investors, and developers—so every real estate decision moves you closer to your goals. Our team provides clear insights and strategies to help you maximize your success at every step.",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="service-card flex flex-col items-start pt-8 border-t border-gray-300"
                >
                  <div className="flex items-center gap-4 mb-8 w-full">
                    <span className="text-sm tracking-[0.3em] text-gray-400">
                      {s.num}
                    </span>
                    <s.Icon className="text-2xl text-gray-800 ml-auto" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display mb-5 leading-snug text-gray-900">
                    {s.title}
                  </h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TAGLINE */}
        <div
          className="tagline relative py-32 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage: "url('/assets/hero/quote-hero-01.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container-site relative flex flex-col justify-center items-center gap-4 text-white">
            <FaQuoteLeft className="text-4xl" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center font-display max-w-3xl">
              Your <span className="border-b-2 border-white pb-1">Blueprint</span>{" "}
              To Better Living
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
