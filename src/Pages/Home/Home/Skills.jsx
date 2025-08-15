import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaFigma, FaJsSquare, FaRegFileAlt
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiVite, SiVercel
} from 'react-icons/si';

// Individual skill item
const SkillItem = ({ icon: Icon, label, color }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition transform hover:scale-105">
    <Icon className="text-xl" style={{ color }} />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

// Grouping each card (Frontend, Backend, etc)
const SkillCard = ({ title, skills }) => (
<section id="skills" >  <div className="bg-white/5 p-6 rounded-xl shadow-lg flex flex-col gap-4 border border-white/10 hover:bg-white/10 transition hover:shadow-2xl transform hover:-translate-y-1">
    <h3 className="text-lg font-semibold text-[#85B7C2]">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <SkillItem key={index} icon={skill.icon} label={skill.label} color={skill.color} />
      ))}
    </div>
  </div> </section>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0b2230] text-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#D16EFF] mb-3">Skills & Technologies</h2>
        <p className="text-gray-300 text-sm md:text-base mb-12 max-w-2xl mx-auto">
          Crafting digital experiences with cutting-edge technologies and modern development practices, combined with proven expertise in professional content creation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          
          {/* ➤ Frontend */}
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

          {/* ➤ Backend */}
          <SkillCard
            title="Backend"
            skills={[
              { icon: FaNodeJs, label: "Node.js", color: "#339933" },
              { icon: SiExpress, label: "Express.js", color: "#000000" },
              { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
              { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
            ]}
          />

          {/* ➤ Tools & Platforms */}
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

          {/* ➤ Content Writing */}
          <SkillCard
            title="Content Writing"
            skills={[
              { icon: FaRegFileAlt, label: "Web Content Writing", color: "#FFD700" },
              { icon: FaRegFileAlt, label: "SEO Blogging", color: "#FFD700" },
              { icon: FaRegFileAlt, label: "WordPress Writing", color: "#FFD700" },
              { icon: FaRegFileAlt, label: "Technical Documentation", color: "#FFD700" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;