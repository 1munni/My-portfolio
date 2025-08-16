import React from "react";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router";

//   {
//     name: "Online Forum",
//     description:
//       "A global platform for connecting, sharing, and discussing ideas.",
//     live: "https://my-assignment-12-9bb6a.web.app/",
//     github: "https://github.com/1munni/Online-forum",
//     details: "/project/online-forum",
//     tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
//     image: "https://i.ibb.co/VpLpncqb/Screenshot-15.png",
//   },
//   {
//     name: "Tree Campaign",
//     description:
//       "Joining hands to plant trees and restore ecosystems for a greener planet.",
//     live: "https://my-assignment-11-def23.web.app/",
//     github: "https://github.com/1munni/Tree-campaign-repo",
//     details: "/project/tree-campaign",
//     tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
//     image: "https://i.ibb.co/d4Jgvxjh/Screenshot-14.png",
//   },
//   {
//     name: "Plant Care Tracker",
//     description:
//       "An intuitive app for tracking plant care, ensuring your plants thrive.",
//     live: "https://plan-care-tracker-app.web.app/",
//     github: "https://github.com/1munni/Plant-care-tracker",
//     details: "/project/plant-care-tracker",
//     tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
//     image: "https://i.ibb.co/Xr32tD20/Screenshot-14.png",
//   },
// ];
const projects = [
  {
    id: "1", 
    name: "Online Forum",
    description: "A global platform for connecting, sharing, and discussing ideas.",
    live: "https://my-assignment-12-9bb6a.web.app/",
    github: "https://github.com/1munni/Online-forum",
    details: "/project/online-forum",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
    image: "https://i.ibb.co/VpLpncqb/Screenshot-15.png",
  },
  {
    id: "2", 
    name: "Tree Campaign",
    description: "Joining hands to plant trees and restore ecosystems for a greener planet.",
    live: "https://my-assignment-11-def23.web.app/",
    github: "https://github.com/1munni/Tree-campaign-repo",
    details: "/project/tree-campaign",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
    image: "https://i.ibb.co/d4Jgvxjh/Screenshot-14.png",
  },
  {
    id: "3",
    name: "Plant Care Tracker",
    description: "An intuitive app for tracking plant care, ensuring your plants thrive.",
    live: "https://plan-care-tracker-app.web.app/",
    github: "https://github.com/1munni/Plant-care-tracker",
    details: "/project/plant-care-tracker",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
    image: "https://i.ibb.co/Xr32tD20/Screenshot-14.png",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="
    py-8 bg-base-300 dark:bg-gray-800 mb-10 rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-[#12526d]">
  My <span className="text-gradient animate-bounce">Projects</span>
</h2>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover h-full w-full transition-transform duration-300 transform hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[#12526d] dark:text-[#f2f6f7] mb-3 relative after:absolute after:bottom-[-4px] after:left-0 after:w-1/4 after:h-[3px] after:bg-[#1bb1dc] after:rounded-full">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-1 mt-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-[#e5f6fa] text-[#12526d] dark:bg-[#12526d] dark:text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-wrap justify-between gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg bg-[#88B9C3] text-white hover:bg-[#12526d] transition-colors duration-300 shadow-md"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition-colors duration-300 shadow-md"
                  >
                    <FaGithub /> GitHub
                  </a>
  <Link
  to={`/projectDetails/${project.id}`}
  className="flex-1 text-center flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg bg-[#12526d] text-white hover:bg-[#1bb1dc] transition-colors duration-300 shadow-md"
>
  <FaInfoCircle /> Details
</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;