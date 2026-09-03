import {
  FaRegBuilding,
  FaMoneyCheckAlt,
  FaLightbulb,
  FaQuoteLeft,
} from "react-icons/fa";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const About = () => {
  useEffect(() => {
    if (!window.location.hash) return;
    const el = document.getElementById(window.location.hash.slice(1));
    if (el) el.scrollIntoView();
  }, []);

  return (
    <>
      <Navbar />
      <div className="about-page master-container overflow-x-hidden">
        {/* ABOUT SECTION */}
        <div className="about pt-40 pb-32 bg-white" id="about">
          <div className="container-site text-left">
            <h1 className="text-5xl md:text-6xl mb-12 font-display leading-[1.05] max-w-3xl text-gray-900">
              Building Homeownership Together
            </h1>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-800 font-semibold mb-6">
                  Homsia Properties Ltd is a Dhaka-based real estate company
                  built on a simple promise: to make homeownership
                  accessible, clear, and affordable for everyone.
                </p>
                <p className="text-lg text-gray-700 font-light mb-6">
                  Homsia was started by a group of friends who saw a big
                  problem in real estate: buying a property costs too much
                  money upfront, so many people are locked out. We set out
                  to change that with a simple dream—one where owning a
                  home isn't reserved for the few.
                </p>
                <p className="text-lg text-gray-700 font-light mb-6">
                  To make this happen, we use a share-based ownership model.
                  Instead of one person paying the full price for an entire
                  property, the total cost is divided into smaller,
                  affordable shares. You can buy as many shares as your
                  budget allows, giving you real ownership and equity
                  without taking on overwhelming debt.
                </p>
                <p className="text-lg text-gray-700 font-light mb-8">
                  We handle every step of the process, from selecting raw
                  land to delivering complete, well-planned projects. By
                  combining expert property management with shared buying
                  power, Homsia opens the door for everyday people to build
                  real wealth through real estate—one share at a time.
                </p>
                <a
                  href="#team"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-black border-b border-gray-900 hover:border-black pb-0.5 transition-colors"
                >
                  Meet the team
                  <span aria-hidden="true">→</span>
                </a>
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

        {/* TEAM SECTION */}
        <div className="team py-32 bg-white" id="team">
          <div className="container-site">
            <h2 className="text-4xl md:text-5xl mb-16 font-display text-gray-900">
              Meet the team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Mohit Rahman Chowdhury",
                  role: "Chairman",
                  image: "/assets/team/Mohit Rahman Chowdhury.png",
                },
                {
                  name: "Yaminul Haq",
                  role: "Managing Director",
                  image: "/assets/team/Yaminul Haq.jpg",
                },
                {
                  name: "Md. Opu Saruar",
                  role: "Director",
                  image: "/assets/team/Opu Saroar.png",
                },
              ].map((m, i) => (
                <div key={i} className="team-member">
                  <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden mb-6">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-2 font-normal">
                    {m.name}
                  </h3>
                  <p className="text-xs tracking-[0.25em] uppercase text-gray-500">
                    {m.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
