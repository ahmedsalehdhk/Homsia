import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
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
        <div className="projects-text flex flex-col justify-center sm:items-start items-center mb-10">
          <h1 className="text-4xl mb-8 font-merriweather">Our Projects</h1>
        </div>
        <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return <ProjectCard data={project} key={index} />;
          })}
        </div>
      </div>
      <Link
        to={"/"}
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-black border-b border-gray-900 hover:border-black pb-0.5 mb-12 transition-colors"
      >
        <span aria-hidden="true">←</span>
        Back to home
      </Link>
    </div>
    </>
  );
};

export default Projects;
