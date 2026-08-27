import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  const { data } = props;

  return (
    <Link
      to={`/projects/${data.id}`}
      className="project-card group block w-full"
    >
      <div className="relative overflow-hidden aspect-[3/4] mb-6">
        <img
          src={data.images[0]}
          alt={data.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <span className="absolute top-5 left-5 bg-white text-gray-900 text-[10px] font-medium tracking-[0.25em] uppercase px-3 py-1.5">
          {data.status}
        </span>
      </div>
      <h3 className="text-2xl md:text-3xl text-gray-900 mb-2 font-normal font-display leading-tight">
        {data.title}
      </h3>
      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
        {data.address}
      </p>
    </Link>
  );
}
