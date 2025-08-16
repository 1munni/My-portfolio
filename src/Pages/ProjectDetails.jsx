import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";

const projects = [
  {
    id: "1",
    name: "Online Forum",
    description: "A global platform for connecting, sharing, and discussing ideas.",
    image: "https://i.ibb.co/VpLpncqb/Screenshot-15.png",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
    challenges: "Managing real-time upvotes and single-review-per-user logic.",
    improvements: "Adding more real-time functionality",
    live: "https://my-assignment-12-9bb6a.web.app/",
    github: "https://github.com/1munni/Online-forum",
  },
  {
    id: "2",
    name: "Tree Campaign",
    description: "Joining hands to plant trees and restore ecosystems for a greener planet.",
    image: "https://i.ibb.co/d4Jgvxjh/Screenshot-14.png",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
    challenges: "Managing real-time upvotes and single-review-per-user logic.",
    improvements: "Adding more real-time functionality",
    live: "https://my-assignment-11-def23.web.app/",
    github: "https://github.com/1munni/Tree-campaign-repo",
  },
  {
    id: "3",
    name: "Plant Care Tracker",
    description: "An intuitive app for tracking plant care, ensuring your plants thrive.",
    image: "https://i.ibb.co/Xr32tD20/Screenshot-14.png",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
    challenges: "Managing real-time upvotes and single-review-per-user logic.",
    improvements: "Adding more real-time functionality",
    live: "https://plan-care-tracker-app.web.app/",
    github: "https://github.com/1munni/Plant-care-tracker",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2 className="text-center text-red-500 mt-10">No project found 🚫</h2>;
  }
  
  const handleBackToProjects = () => {
    navigate("/"); // Navigate to the home page first
    setTimeout(() => {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // A small delay to ensure the page has loaded
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Back to Projects Button */}
      <div className="mb-8">
        <button
          onClick={handleBackToProjects}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[#12526d] text-white hover:bg-[#1bb1dc] transition-colors duration-300"
        >
          <FaArrowLeft /> Back to Projects
        </button>
      </div>

      <img
        src={project.image}
        alt={project.name}
        className="rounded-xl shadow-lg w-full max-h-96 object-cover mb-8"
      />
      <h1 className="text-4xl font-extrabold text-[#12526d] mb-6">{project.name}</h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">{project.description}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#12526d]">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-[#12526d] text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-[#1bb1dc] transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#12526d]">Challenges Faced</h2>
        <p className="text-gray-700 dark:text-gray-300">{project.challenges}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#12526d]">Potential Improvements</h2>
        <p className="text-gray-700 dark:text-gray-300">{project.improvements}</p>
      </section>


    </div>
  );
};

export default ProjectDetails;