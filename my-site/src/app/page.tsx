'use client';

import ScrollSection from "../components/ScrollSection";
import ProjectCard from "components/ProjectCard";
import ExperienceBlock from "components/ExperienceBlock";

const experienceList = [
  {
    title: "Robotics Engineer Intern",
    company: "MiTeGen LLC",
    date: "Sept 2023 – Dec 2023",
    logoSrc: "/logos/mitegen.png",
    bullets: [
      "Developed Python automation software for scientific workflows",
      "Engineered a small-scale slush nitrogen machine",
    ],
    description: "Robotics engineering creating automation scripts for cryo cooling",
  },
  {
    title: "Resaerch Assistant",
    company: "University of Waterloo",
    date: "May 2022 – Aug 2022",
    logoSrc: "/logos/waterloo.png",
    bullets: [
      "Developed education alternatives to Ingstrom machines",
      "Created and tested azure percept machine learning model for FEA testing",
    ],
    description: "Combining FEA and machine learning into one",
  },

  // Add more experiences here!
];
const projectList = [
  {
    title: "ROS-Unity Turret Simulation",
    description: "Simulated autonomous turret with Unity + ROS2. Handles vision, targeting, and rotation using CNNs and OpenCV.",
    link: "https://github.com/jdmwan/balloonpositiondetector",
    tags: ["ROS2", "Unity", "Python"],
  },
  {
    title: "QuantConnect Backtester UI",
    description: "Flask + JS frontend for adjusting strategy parameters and visualizing backtest results in real time.",
    link: "https://github.com/jdmwan/lean-backtest-app",
    tags: ["Python", "Flask", "QuantConnect"],
  },
];

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Section 1 — Intro Quote */}
      <ScrollSection>
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-zinc-100">
            “Skill, Strategy, Fortune, Form.
          </h1>
          <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-zinc-100">
            Many factors influence strength.
          </h1>
          <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-zinc-100">
            But Victory Never lies.“
          </h1>
          <p className="text-sm text-zinc-400 italic">– Mavuika</p>
          <p className="text-sm text-gray-400 animate-bounce mt-8">Scroll down to learn more ↓</p>

        </div>
        {/* <div className="text-center bottom-auto space-y-4">
          <p>hiiiiiii</p>
        </div> */}
      </ScrollSection>

      {/* Section 2 — Real Intro */}
      <ScrollSection>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Hi, I’m Jeffrey Wan</h2>
          <p>
            Welcome to my webpage. You’ll see lots of fun projects scattered around, and learn about me bit by bit. Go to the resume page to see what I do, and scroll down for more info about me.
          </p>
          <p className="text-sm text-gray-400 animate-bounce mt-8">Scroll down to learn more ↓</p>
        </div>
      </ScrollSection>
      <ScrollSection> 
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">About me</h2>
          <p>I’m a mechanical engineer who builds across disciplines: hardware, software, whatever it takes. I move fast, but I care deeply. Every project is a chance to solve something real and leave it better than I found it.
          </p>
        </div>
      </ScrollSection>
      <ScrollSection>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Featured Experiences and Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {experienceList.map((experience, index) => (
              <ExperienceBlock
                key = {index}
                title = {experience.title}
                company = {experience.company}
                date = {experience.date}
                logoSrc = {experience.logoSrc}
                description = {experience.description}

              />
            ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projectList.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                tags = {project.tags}

              />
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Want more? Check out the full list on the <a href="/resume" className="text-blue-500 hover:underline">Resume page</a>.
          </p>
        </div>
      </ScrollSection>
    </main>
  );
}

