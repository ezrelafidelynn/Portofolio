import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projectsData = [
    {
      title: "JobFlow",
      description:
        "Revolutionary job application tracking system! 🚀 Built with modern stack to help job seekers organize their applications, track progress, and never miss an opportunity. The future of job hunting is here! 💼",
      image: "/JobFlow.png",
      link: null,
      sourceCode: "https://github.com/ezrelafidelynn/TicketFlow",
      category: "web",
      tech: ["React", "Node.js", "PostgreSQL"],
      likes: 312,
      comments: 45,
      timeAgo: "2 days ago",
    },
    {
      title: "Fynance",
      description:
        "Personal finance made simple! 💰 Created a clean, intuitive app to help people track their expenses and reach their financial goals. Money management doesn't have to be complicated! 📊",
      image: "/Fynance.png",
      link: "https://fynancetest.vercel.app",
      sourceCode: "https://github.com/ezrelafidelynn/Fynance",
      category: "web",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      likes: 203,
      comments: 31,
      timeAgo: "1 month ago",
    },
    {
      title: "EzNotes",
      description:
        "Just shipped my neon-themed note-taking app! 📝✨ Features CRUD operations, smooth animations, and a modern dark UI that's easy on the eyes. Perfect for developers who code late into the night! 🌙",
      image: "/EzNotes.png",
      link: null,
      sourceCode: "https://github.com/ezrelafidelynn/EzNotes",
      category: "web",
      tech: ["React", "Node.js", "MongoDB"],
      likes: 89,
      comments: 12,
      timeAgo: "3 days ago",
    },
    {
      title: "MixedAR",
      description:
        "Excited to share my latest Mixed Reality project! 🥽 Created an immersive cultural heritage experience with interactive VR museum scenes. Technology meets history in the most beautiful way! 🏛️",
      image: "/MixedAR.jpeg",
      link: null,
      sourceCode: null,
      category: "ar",
      tech: ["Unity", "C#", "AR Foundation"],
      likes: 156,
      comments: 23,
      timeAgo: "1 week ago",
    },
    {
      title: "EzChat",
      description:
        "Built a modern chat application with real-time messaging! 💬 Features a sleek dark UI, typing indicators, and smooth message animations. Communication has never looked this good! 🚀",
      image: "/EzChat.png",
      link: null,
      sourceCode: "https://github.com/ezrelafidelynn/EzChat",
      category: "web",
      tech: ["React", "Socket.io", "Express"],
      likes: 124,
      comments: 18,
      timeAgo: "2 weeks ago",
    },
  ];

  const categories = [
    { id: "all", label: "All Posts", icon: "📱" },
    { id: "web", label: "Web Dev", icon: "💻" },
    { id: "ar", label: "AR/VR", icon: "🥽" },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-panel p-2 rounded-full">
            <div className="flex space-x-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    filter === cat.id
                      ? "bg-gradient-to-r from-neon-purple to-neon-cyan text-white shadow-neon-purple"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Feed */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${filter}`}
              {...project}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
