import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  // ── Web Developer ──────────────────────────────────────────────
  {
    title: "JobFlow",
    description:
      "Job searching web using Vue.js and Laravel as its backend, styled with DaisyUI. Seamless job search experience with modern UI.",
    image: "/JobFlow.png",
    video: "/DemoJobFlow.mkv",
    link: null,
    github: "https://github.com/ezrelafidelynn/JobFlow",
    category: "web",
    tech: ["Vue.js", "Laravel", "DaisyUI"],
    timeAgo: "2 days ago",
  },
  {
    title: "Spotify Clone",
    description:
      "A Spotify clone with a modern dashboard. Music streaming experience reimagined with a clean dark UI.",
    image: "/DashboardSpotify.png",
    video: "/DemoSpotify.mkv",
    link: null,
    github: "https://github.com/ezrelafidelynn/SpotifyClone",
    category: "web",
    tech: ["React", "Node.js", "Express"],
    timeAgo: "1 week ago",
  },
  {
    title: "TicketFlow",
    description:
      "Ticketing reporting website using Vue 3 and Laravel. Modern dashboard for ticket management and reporting.",
    image: "/DashboardTicketFlow.png",
    video: null,
    link: null,
    github: "https://github.com/ezrelafidelynn/TicketFlow",
    category: "web",
    tech: ["Vue 3", "Laravel"],
    timeAgo: "5 days ago",
  },
  {
    title: "Fynance",
    description:
      "Personal finance made simple. A clean, intuitive app to help people track expenses and reach financial goals.",
    image: "/Fynance.png",
    link: "https://fynancetest.vercel.app",
    github: "https://github.com/ezrelafidelynn/Fynance",
    category: "web",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    timeAgo: "1 month ago",
  },
  {
    title: "EzNotes",
    description:
      "Neon-themed note-taking app with CRUD operations, smooth animations, and a modern dark UI. Perfect for late-night coding sessions.",
    image: "/EzNotes.png",
    link: null,
    github: "https://github.com/ezrelafidelynn/EzNotes",
    category: "web",
    tech: ["React", "Node.js", "MongoDB"],
    timeAgo: "3 days ago",
  },
  {
    title: "EzChat",
    description:
      "Modern chat application with real-time messaging, typing indicators, and smooth message animations.",
    image: "/EzChat.png",
    link: null,
    github: "https://github.com/ezrelafidelynn/EzChat",
    category: "web",
    tech: ["React", "Socket.io", "Express"],
    timeAgo: "2 weeks ago",
  },

  // ── Artificial Intelligence ─────────────────────────────────────
  {
    title: "AI Project Portfolio",
    description:
      "A comprehensive presentation of AI projects and research, covering machine learning concepts, experiments, and practical applications.",
    image: "/MixedAR.jpeg",
    link: "https://canva.link/oz8yeo98ejftjjy",
    github: null,
    category: "ai",
    tech: ["Machine Learning", "Python", "Canva"],
    timeAgo: "Recently",
  },

  // ── Internet of Things ──────────────────────────────────────────
  {
    title: "Automatic Curtain Slider",
    description:
      "Smart automated curtain system using IoT sensors and microcontrollers. Control your curtains remotely or automatically based on light conditions.",
    image: null,
    link: "https://drive.google.com/file/d/1IxKnc4m9l2Dq9m3ryig5BK3SPXJ1XU7T/view?usp=sharing",
    github: null,
    category: "iot",
    tech: ["Arduino", "IoT", "C++", "Sensors"],
    timeAgo: "Recently",
  },
];

const Projects = ({ activeCategory }) => {
  const filtered = projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="py-8 px-0">
      <div className="space-y-6 animate-fadeIn" key={activeCategory}>
        {filtered.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            delay={index * 80}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
