import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaBed, FaShower, FaCar, FaRuler, FaMapMarkerAlt } from "react-icons/fa";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import projects from "../data/db";

const statusStyles = {
  sold: "bg-red-500/90 text-white",
  available: "bg-emerald-500/90 text-white",
  upcoming: "bg-amber-500/90 text-white",
  ongoing: "bg-blue-500/90 text-white",
};

export default function Project() {
  var { id } = useParams();
  id = id - 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects[id];
  const statusKey = (project.status || "").toString().toLowerCase();
  const statusClass = statusStyles[statusKey] || "bg-black/85 text-white";

  const features = [
    { icon: <FaBed />, value: project.bedrooms, label: "Bedrooms" },
    { icon: <FaShower />, value: project.bathrooms, label: "Bathrooms" },
    { icon: <FaCar />, value: project.parkings, label: "Parking" },
    { icon: <FaRuler />, value: project.sft ? `${project.sft} sft` : "", label: "Area" },
  ].filter((f) => f.value !== "" && f.value !== undefined && f.value !== null);

  return (
    <>
      <Navbar />
      <div className="project-page pt-32 pb-16 bg-white">
        {/* HEADER */}
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex-1">
              <p className="flex items-center gap-2 text-sm text-gray-500 uppercase tracking-[0.2em] mb-4">
                <FaMapMarkerAlt className="text-xs" />
                {project.address}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-merriweather leading-tight text-gray-900">
                {project.title}
              </h1>
            </div>
            <span
              className={`self-start text-[10px] font-semibold tracking-[0.25em] uppercase px-4 py-2 rounded-full ${statusClass}`}
            >
              {project.status}
            </span>
          </div>

          {/* FEATURES */}
          {features.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 border-y border-gray-200 divide-x divide-gray-200 mb-12">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col items-center justify-center py-6 px-4">
                  <span className="text-2xl text-gray-800 mb-2">{f.icon}</span>
                  <span className="text-lg font-medium text-gray-900">{f.value}</span>
                  <span className="text-xs tracking-[0.2em] uppercase text-gray-500 mt-1">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* GALLERY — full container width */}
        <div className="container-site mb-16">
          <ImageSlider images={project.images} />
        </div>

        {/* DESCRIPTION */}
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-merriweather mb-4 text-gray-900">
            About this project
          </h2>
          <p className="text-lg text-gray-700 font-light leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="container-site flex justify-center items-center gap-10 my-12">
        <Link
          to={"/"}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-black border-b border-gray-900 hover:border-black pb-0.5 transition-colors"
        >
          <span aria-hidden="true">←</span>
          To home
        </Link>
        <Link
          to={"/projects"}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-black border-b border-gray-900 hover:border-black pb-0.5 transition-colors"
        >
          To projects
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </>
  );
}
