import ExperienceBlock from "../../components/ExperienceBlock";
import ProjectCard from "../../components/ProjectCard"; // We'll create this next
import ScrollSection from "../../components/ScrollSection";
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
  },
  {
    title: "Process Engineering Intern",
    company: "Amphenol CTI Industries",
    date: "Jan 2021 – Apr 2021",
    logoSrc: "/logos/amphenol.jpg",
    bullets: [
      "Designed fixtures in wire harness boards for ease of assembly",
      "Compared BOMs and wire harnesses to cut waste",
    ],
  },
  {
    title: "Applications Engineer",
    company: "ULMA Construction Systems",
    date: "Jan 2019 – Aug 2019",
    logoSrc: "/logos/ulma.jpg",
    bullets: [
      "Designed formwork layouts using AutoCAD",
      "Generated concrete pressure calculations for slab and wall systems"
    ],
  },
  // Add more experiences here!
];

const projectList = [
    {
      title: "ROS-Unity Turret Simulation",
      description: "Simulated autonomous turret with Unity + ROS2. Handles vision, targeting, and rotation using CNNs and OpenCV.",
      link: "https://github.com/jdmwan/balloonpositiondetector",
    },
    {
      title: "QuantConnect Backtester UI",
      description: "Flask + JS frontend for adjusting strategy parameters and visualizing backtest results in real time.",
      link: "https://github.com/jdmwan/lean-backtest-app",
    },
  ];
  
  export default function ResumePage() {
    return (
      <main className="overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <ScrollSection>
          <section>
            <h1 className="text-4xl font-bold mb-5">Experience</h1>
            <div className="space-y-6">
              {experienceList.map((exp, idx) => (
                <ExperienceBlock key={idx} {...exp} />
              ))}
            </div>
            <p className="text-sm text-center text-gray-400 animate-bounce mt-5">Scroll down for projects ↓</p>
          </section>
        </ScrollSection>
  
        <ScrollSection>
          <section>
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="space-y-6">
              {projectList.map((proj, idx) => (
                <ProjectCard key={idx} {...proj} />
              ))}
            </div>
          </section>
        </ScrollSection>
      </main>
    );
  }
