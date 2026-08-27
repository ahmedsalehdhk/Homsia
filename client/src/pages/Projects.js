import ProjectCard from "../components/ProjectCard";
import projects from "../data/db";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar />
    <div className="flex flex-col justify-center items-center bg-white w-screen">
      <div className="projects container-site pt-40 pb-32">
        <div className="projects-text flex flex-col justify-center sm:items-start items-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-4">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-display leading-[1.05] text-gray-900">
            Our Projects
          </h1>
        </div>
        <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return <ProjectCard data={project} key={index} />;
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default Projects;
