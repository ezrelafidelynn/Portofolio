import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projectsData = [
    {
      title: "JobFlow",
      description:
        "Job searching web using Vue.js and Laravel as its backend, styled with DaisyUI. Seamless job search experience with modern UI.",
      image: "/JobFlow.png",
      video: "/DemoJobFlow.mkv",
      link: "https://github.com/ezrelafidelynn/JobFlow",
      github: "https://github.com/ezrelafidelynn/JobFlow",
      category: "web",
      tech: ["Vue.js", "Laravel", "DaisyUI"],
      likes: 312,
      comments: 44,
      timeAgo: "2 days ago",
    },
    {
      title: "Spotify Clone",
      description:
        "A Spotify clone with a modern dashboard. Music streaming experience reimagined.",
      image: "/DashboardSpotify.png",
      video: "/DemoSpotify.mkv",
      link: null,
      github: null,
      category: "web",
      tech: ["React", "Node.js", "Express"],
      likes: 210,
      comments: 27,
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
      likes: 178,
      comments: 19,
      timeAgo: "5 days ago",
    },
    {
      title: "Fynance",
      description:
        "Personal finance made simple! 💰 Created a clean, intuitive app to help people track their expenses and reach their financial goals. Money management doesn't have to be complicated! 📊",
      image: "/Fynance.png",
      link: "https://fynancetest.vercel.app",
      github: "https://github.com/ezrelafidelynn/Fynance",
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
      github: "https://github.com/ezrelafidelynn/EzNotes",
      category: "web",
      tech: ["React", "Node.js", "MongoDB"],
      likes: 89,
      comments: 12,
      timeAgo: "3 days ago",
    },
    {
      title: "EzChat",
      description:
        "Built a modern chat application with real-time messaging! 💬 Features a sleek dark UI, typing indicators, and smooth message animations. Communication has never looked this good! 🚀",
      image: "/EzChat.png",
      link: null,
      github: "https://github.com/ezrelafidelynn/EzChat",
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
