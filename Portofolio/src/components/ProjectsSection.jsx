import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";

const ALL_PROJECTS = [
  // ── Web Developer ──────────────────────────────────────────────
  {
    category: "web",
    title: "JobFlow",
    description: "Job searching web using Vue.js and Laravel as its backend, styled with DaisyUI. Seamless job search experience with modern UI.",
    image: "/JobFlow.png",
    video: "/DemoJobFlow.mkv",
    link: null,
    github: "https://github.com/ezrelafidelynn/JobFlow",
    tech: ["Vue.js", "Laravel", "DaisyUI"],
  },
  {
    category: "web",
    title: "Spotify Clone",
    description: "A Spotify clone with a modern dashboard. Music streaming experience reimagined.",
    image: "/DashboardSpotify.png",
    video: "/DemoSpotify.mkv",
    link: null,
    github: "https://github.com/ezrelafidelynn/SpotifyClone",
    tech: ["React.js", "Node.js", "Express.js"],
  },
  {
    category: "web",
    title: "TicketFlow",
    description: "Ticketing reporting website using Vue 3 and Laravel. Modern dashboard for ticket management and reporting.",
    image: "/DashboardTicketFlow.png",
    video: null,
    link: null,
    github: "https://github.com/ezrelafidelynn/TicketFlow",
    tech: ["Vue.js", "Laravel"],
  },
  {
    category: "web",
    title: "Fynance",
    description: "Business finance made simple! A clean, intuitive app to help people track their expenses and reach their financial goals. Money management doesn't have to be complicated!",
    image: "/Fynance.png",
    video: null,
    link: "https://fynancetest.vercel.app",
    github: "https://github.com/ezrelafidelynn/Fynance",
    tech: ["Next.js"],
  },
  {
    category: "web",
    title: "EzNotes",
    description: "Neon-themed note-taking app! Features CRUD operations, smooth animations, and a modern dark UI that's easy on the eyes. Perfect for developers who code late into the night! 🌙",
    image: "/EzNotes.png",
    video: null,
    link: null,
    github: "https://github.com/ezrelafidelynn/EzNotes",
    tech: ["React.js", "Node.js", "MongoDB"],
  },
  {
    category: "web",
    title: "EzChat",
    description: "A modern chat application with real-time messaging accounts! Features a sleek dark UI, typing indicators, and smooth message animations. Communication has never looked this good!",
    image: "/EzChat.png",
    video: null,
    link: null,
    github: "https://github.com/ezrelafidelynn/EzChat",
    tech: ["React.js", "Express.js", "Socket.io"],
  },
  {
    category: "web",
    title: "Serpent Ledger",
    description: "A single-file, zero-dependency personal finance tracker. Vanilla JS + hand-written CSS, localStorage persistence with versioned migrations, JSON import/export, and a from-scratch SVG radar chart. Percentage-of-income bucket budgeting with goal/pool tracking and calendar-aware recurring entries.",
    image: "/serpent-ledger.png",
    fullImage: "/serpent-ledger-full.png",
    video: null,
    link: null,
    github: "https://github.com/ezrelafidelynn/personal-finance-tracker",
    tech: ["HTML5", "Vanilla JS", "CSS3", "SVG"],
  },

  // ── Artificial Intelligence ─────────────────────────────────────
  {
    category: "ai",
    title: "BISINDO Sign Language Recognition Using Computer Vision",
    description: "A Deep Learning model that detects Sign language from your webcam real-time using Python.",
    image: "/BISINDO.png",
    video: null,
    link: "https://canva.link/oz8yeo98ejftjjy",
    github: null,
    tech: ["YOLOv10", "YOLOv11", "YOLOv12", "Tkinter"],
    demoLabel: "View Project",
  },

  // ── Internet of Things ──────────────────────────────────────────
  {
    category: "iot",
    title: "Automatic Curtain Slider",
    description: "A IoT prototype where when the sun comes up it will automatically slide open the curtain and closes when dark.",
    image: null,
    video: null,
    link: "https://drive.google.com/file/d/1IxKnc4m9l2Dq9m3ryig5BK3SPXJ1XU7T/view?usp=sharing",
    github: null,
    tech: ["Arduino IDE", "IoT"],
    demoLabel: "View Paper",
  },
];

const CATEGORIES = [
  {
    id: "web",
    label: "Web Developer",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 19h8M11 16v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 9l2 2-2 2M11 13h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "ai",
    label: "Artificial Intelligence",
    color: "#ff7fec",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="3" stroke="#ff7fec" strokeWidth="1.5"/>
        <circle cx="4" cy="5" r="1.5" stroke="#ff7fec" strokeWidth="1.2"/>
        <circle cx="18" cy="5" r="1.5" stroke="#ff7fec" strokeWidth="1.2"/>
        <circle cx="4" cy="17" r="1.5" stroke="#ff7fec" strokeWidth="1.2"/>
        <circle cx="18" cy="17" r="1.5" stroke="#ff7fec" strokeWidth="1.2"/>
        <path d="M5.5 5.5L8.5 8.5M13.5 13.5L16.5 16.5M16.5 5.5L13.5 8.5M8.5 13.5L5.5 16.5" stroke="#ff7fec" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    id: "iot",
    label: "Internet of Things",
    color: "#ff5500",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 3v12M7 11l4 4 4-4" stroke="#ff5500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 17h12" stroke="#ff5500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 8c0-3.5 3.6-5 8-5s8 1.5 8 5" stroke="#ff5500" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2"/>
      </svg>
    ),
  },
];

const ProjectsSection = ({ activeCategory, onCategoryChange }) => {
  const sectionRef = useRef(null);

  const handleTab = (id) => {
    onCategoryChange(id);
    // Keep the section in view without scrolling to top
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < 72) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const filtered = ALL_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" ref={sectionRef} className="max-w-6xl mx-auto px-8 py-12">
      {/* Section heading */}
      <h2 className="text-center text-white text-2xl font-light mb-8 tracking-wide">Projects</h2>

      {/* Category tabs */}
      <div
        className="flex items-center justify-center gap-2 mb-1 border-b"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleTab(cat.id)}
            className={`cat-tab${activeCategory === cat.id ? " active" : ""}`}
          >
            <span className={activeCategory === cat.id ? "" : "opacity-50"}>
              {cat.icon}
            </span>
            <span className="text-sm">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div className="mt-8">
        {filtered.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
