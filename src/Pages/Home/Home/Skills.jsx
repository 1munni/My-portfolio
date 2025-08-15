import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaFigma, FaJsSquare, FaRegFileAlt
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiVite, SiVercel
} from 'react-icons/si';

// Unified Skill Card Component
const SkillCard = ({ title, skills }) => (
  <div className="bg-white/7 p-6 rounded-xl shadow-lg border border-white/10 hover:bg-white/10 transition hover:shadow-2xl transform hover:-translate-y-1 min-h-[300px] flex flex-col">
    <h3 className="text-lg font-semibold text-[#85B7C2] mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3 mt-auto">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2 bg-[#12526d] hover:bg-[#147393] rounded-md transition transform hover:scale-105"
        >
          <skill.icon className="text-xl" style={{ color: skill.color }} />
          <span className="text-sm font-medium text-white">{skill.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-[#12526D] scroll-smooth text-white py-16 px-4 md:px-12 rounded-2xl mb-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-medium text-shadow-white mb-3">Skills & Technologies</h2>
        
        <p className="text-gray-300 text-sm md:text-base mb-12 max-w-2xl mx-auto">
          Developing digital experiences utilizing state-of-the-art technologies and contemporary development methodologies, complemented by demonstrated expertise in professional content creation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          
          <SkillCard
            title="Frontend"
            skills={[
              { icon: FaReact, label: "React", color: "#61DAFB" },
              { icon: FaHtml5, label: "HTML5", color: "#E34F26" },
              { icon: FaCss3Alt, label: "CSS3", color: "#1572B6" },
              { icon: FaJsSquare, label: "JavaScript", color: "#F7DF1E" },
              { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38BDF8" },
            ]}
          />

          <SkillCard
            title="Backend"
            skills={[
              { icon: FaNodeJs, label: "Node.js", color: "#339933" },
              { icon: SiExpress, label: "Express.js", color: "#000000" },
              { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
              { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
            ]}
          />

          <SkillCard
            title="Tools & Platforms"
            skills={[
              { icon: FaGitAlt, label: "Git", color: "#F05032" },
              { icon: FaGithub, label: "GitHub", color: "#181717" },
              { icon: FaFigma, label: "Figma", color: "#F24E1E" },
              { icon: SiVercel, label: "Vercel", color: "#000000" },
              { icon: SiVite, label: "Vite", color: "#646CFF" },
            ]}
          />

          <SkillCard
            title="Content Writing"
            skills={[
              { icon: FaRegFileAlt, label: "Web Content Writing", color: "#FFD700" },
              { icon: FaRegFileAlt, label: "SEO Blogging", color: "#FFD700" },
              { icon: FaRegFileAlt, label: "WordPress Writing", color: "#FFD700" },
           
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;